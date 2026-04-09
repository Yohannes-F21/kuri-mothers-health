import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Clock3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1600&q=80";

const formatDate = (isoString: string) => {
  if (!isoString) return "Unknown date";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoString));
};

const estimateReadTime = (content: string) => {
  const words = content
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
};

const BlogDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const contentType = location.pathname.startsWith("/news") ? "news" : "blog";
  const contentLabel = contentType === "news" ? "News" : "Blog";
  const backPath = contentType === "news" ? "/news" : "/blog";
  const [blog, setBlog] = useState<BlogItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlog = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const response = await apiClient.get<BlogApiResponse>("/blogs", {
          signal: controller.signal,
        });

        const blogs = response.data.blogs || [];
        const foundBlog =
          blogs.find(
            (item) => item._id === id && item.category === contentType,
          ) || null;
        setBlog(foundBlog);
      } catch (primaryError) {
        try {
          const fallbackResponse = await axios.get<BlogApiResponse>(
            "/api/blogs",
            {
              signal: controller.signal,
            },
          );

          const blogs = fallbackResponse.data.blogs || [];
          const foundBlog =
            blogs.find(
              (item) => item._id === id && item.category === contentType,
            ) || null;
          setBlog(foundBlog);
          setErrorMessage(null);
        } catch (fallbackError) {
          setBlog(null);
          const fallbackMessage =
            (axios.isAxiosError(fallbackError)
              ? (
                  fallbackError.response?.data as
                    | { message?: string }
                    | undefined
                )?.message
              : undefined) ||
            "Unable to load this article right now. Please try again shortly.";

          setErrorMessage(fallbackMessage);
          console.error("Article detail fetch failed", {
            primaryError,
            fallbackError,
          });
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    } else {
      setIsLoading(false);
      setBlog(null);
    }

    return () => controller.abort();
  }, [contentType, id]);

  const publishedAt = useMemo(() => formatDate(blog?.updated || ""), [blog]);
  const readingTime = useMemo(
    () => estimateReadTime(blog?.lang.english.content || ""),
    [blog],
  );

  return (
    <main>
      <section className="relative overflow-hidden bg-card pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.accent/22),transparent_42%)]" />
        <div className="section-padding max-w-[1440px] mx-auto relative">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Link
              to={backPath}
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} /> Back to {contentLabel}
            </Link>
            <ChevronRight size={14} />
            <span>{contentLabel} Details</span>
          </div>

          {isLoading ? (
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start animate-pulse">
              <div className="rounded-3xl bg-muted aspect-[16/10]" />
              <div className="space-y-4 lg:pt-10">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-12 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
                <div className="h-4 w-4/5 bg-muted rounded" />
                <div className="h-4 w-3/4 bg-muted rounded" />
              </div>
            </div>
          ) : errorMessage ? (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
              {errorMessage}
            </div>
          ) : !blog ? (
            <div className="grid place-items-center rounded-3xl border border-border bg-background px-6 py-20 text-center">
              <div className="max-w-xl">
                <p className="label-sm mb-4 text-accent">{contentLabel}</p>
                <h1 className="heading-lg mb-4">{contentLabel} not found.</h1>
                <p className="body-md mb-8">
                  The {contentType} you are looking for may have been removed or
                  is no longer available.
                </p>
                <Button variant="accent-outline" asChild>
                  <Link to={backPath}>
                    <ArrowLeft className="mr-1" /> Back to {contentLabel}
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
              <article className="rounded-3xl overflow-hidden border border-border bg-background shadow-sm">
                <div className="relative">
                  <img
                    src={blog.thumbnail || fallbackCover}
                    alt={blog.lang.english.title}
                    className="w-full aspect-[16/10] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-accent mb-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-light px-3 py-1.5 text-primary">
                      <Sparkles size={14} /> {contentLabel} Story
                    </span>
                    <span>{contentLabel}</span>
                  </div>

                  <h1 className="heading-lg mb-5 max-w-3xl">
                    {blog.lang.english.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-border pb-6 mb-8 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={16} /> {publishedAt}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={16} /> {readingTime} min read
                    </span>
                  </div>

                  <div
                    className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-img:rounded-2xl prose-img:shadow-sm"
                    dangerouslySetInnerHTML={{
                      __html: blog.lang.english.content,
                    }}
                  />
                </div>
              </article>

              <aside className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="label-sm mb-4 text-accent">Article Summary</p>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-3">
                      <span className="font-medium text-foreground">
                        Published
                      </span>
                      <span className="text-right">{publishedAt}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-3">
                      <span className="font-medium text-foreground">
                        Reading time
                      </span>
                      <span>{readingTime} minutes</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-medium text-foreground">
                        Category
                      </span>
                      <span>{contentLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm bg-[linear-gradient(180deg,rgba(176,200,173,0.16),rgba(255,255,255,0.0))]">
                  <p className="label-sm mb-3 text-accent">
                    Need More Support?
                  </p>
                  <h2 className="heading-sm mb-3">Talk to the Kuri team.</h2>
                  <p className="body-md text-sm mb-5">
                    If this article raised a question, our team can help with
                    product guidance, feeding support, and partnership
                    inquiries.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="hero" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="accent-outline" asChild>
                      <Link to={backPath}>
                        Browse More{" "}
                        {contentType === "news" ? "News" : "Articles"}
                        <ChevronRight className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
