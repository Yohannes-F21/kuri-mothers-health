import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { apiClient } from "@/lib/api-client";

type BlogLanguageContent = {
  title: string;
  content: string;
};

type BlogItem = {
  _id: string;
  thumbnail?: string;
  isPublished: boolean;
  category: string;
  updated: string;
  lang: {
    english: BlogLanguageContent;
    amharic: BlogLanguageContent;
  };
};

type BlogApiResponse = {
  blogs?: BlogItem[];
};

const fallbackCover =
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1400&q=80";

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const previewText = (html: string, length: number) => {
  const plain = stripHtml(html);
  if (plain.length <= length) return plain;
  return `${plain.slice(0, length).trimEnd()}...`;
};

const formatDate = (isoString: string) => {
  if (!isoString) return "Unknown date";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoString));
};

const formatCategory = (category: string) =>
  category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

const News = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const response = await apiClient.get<BlogApiResponse>("/blogs", {
          signal: controller.signal,
        });

        setBlogs(response.data.blogs || []);
      } catch (primaryError) {
        try {
          const fallbackResponse = await axios.get<BlogApiResponse>(
            "/api/blogs",
            {
              signal: controller.signal,
            },
          );
          setBlogs(fallbackResponse.data.blogs || []);
          setErrorMessage(null);
        } catch (fallbackError) {
          setBlogs([]);
          const fallbackMessage =
            (axios.isAxiosError(fallbackError)
              ? (
                  fallbackError.response?.data as
                    | { message?: string }
                    | undefined
                )?.message
              : undefined) ||
            "Unable to load news articles right now. Please try again shortly.";

          setErrorMessage(fallbackMessage);
          console.error("News fetch failed", { primaryError, fallbackError });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();

    return () => controller.abort();
  }, []);

  const publishedBlogs = useMemo(
    () => blogs.filter((blog) => blog.isPublished && blog.category === "news"),
    [blogs],
  );

  const filteredBlogs = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();
    if (!keyword) return publishedBlogs;

    return publishedBlogs.filter((blog) => {
      const title = blog.lang.english.title.toLowerCase();
      const content = stripHtml(blog.lang.english.content).toLowerCase();
      return title.includes(keyword) || content.includes(keyword);
    });
  }, [publishedBlogs, searchTerm]);

  const featuredBlog = filteredBlogs[0];
  const gridBlogs = featuredBlog
    ? filteredBlogs.filter((blog) => blog._id !== featuredBlog._id)
    : filteredBlogs;

  return (
    <main>
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.accent/20),transparent_42%)]" />
        <div className="section-padding max-w-[1440px] mx-auto relative">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">News</p>
            <h1 className="heading-xl mb-6">
              Updates, announcements, and trusted motherhood news.
            </h1>
            <p className="body-lg max-w-2xl">
              Stay current with Kuri announcements, community updates, and
              important news for mothers and families.
            </p>
          </div>

          <div className="mt-10 max-w-2xl relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search news articles"
              className="w-full bg-background border border-border rounded-full pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="section-padding section-y max-w-[1440px] mx-auto">
        {!searchTerm && isLoading && (
          <div className="rounded-2xl border border-border bg-card p-8 animate-pulse">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-muted rounded-xl aspect-[4/3]" />
              <div className="space-y-4">
                <div className="h-4 w-28 bg-muted rounded" />
                <div className="h-10 w-3/4 bg-muted rounded" />
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-11/12 bg-muted rounded" />
                <div className="h-4 w-10/12 bg-muted rounded" />
              </div>
            </div>
          </div>
        )}

        {!isLoading && errorMessage && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        {!isLoading && !errorMessage && featuredBlog && (
          <article className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredBlog.thumbnail || fallbackCover}
                  alt={featuredBlog.lang.english.title}
                  className="w-full h-full min-h-[320px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <p className="label-sm text-accent mb-3">Featured News</p>
                <h2 className="heading-md mb-4">
                  {featuredBlog.lang.english.title}
                </h2>
                <p className="body-md mb-8">
                  {previewText(featuredBlog.lang.english.content, 320)}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-5">
                  <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
                    <CalendarDays size={16} />
                    {formatDate(featuredBlog.updated)}
                  </p>
                  <Button variant="accent-outline" asChild>
                    <Link to={`/news/${featuredBlog._id}`}>
                      Read More <ArrowRight className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        )}
      </section>

      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="Latest News"
            title="Read updates, learn, and stay informed."
            description="Important news and community updates designed to keep families connected to Kuri's work."
          />

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-background overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : gridBlogs.length === 0 ? (
            <div className="rounded-xl border border-border bg-background p-8 text-center">
              <p className="body-md">No news found for your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridBlogs.map((blog) => (
                <article
                  key={blog._id}
                  className="group rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-lg transition-shadow flex flex-col"
                >
                  <img
                    src={blog.thumbnail || fallbackCover}
                    alt={blog.lang.english.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3 inline-flex items-center rounded-full bg-sage-light px-3 py-1 text-xs font-semibold text-primary">
                      {formatCategory(blog.category)}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 leading-tight">
                      {blog.lang.english.title}
                    </h3>
                    <p className="body-md text-sm mb-6">
                      {previewText(blog.lang.english.content, 170)}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/70 flex items-center justify-between gap-3">
                      <span className="text-xs text-muted-foreground">
                        {formatDate(blog.updated)}
                      </span>
                      <Link
                        to={`/news/${blog._id}`}
                        className="text-sm font-medium text-accent hover:text-primary transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default News;
