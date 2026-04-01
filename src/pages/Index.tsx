import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-mother.jpg";
import productMint from "@/assets/product-mint.jpg";
import productFennel from "@/assets/product-fennel.jpg";
import productHero from "@/assets/product-fennel-hero.jpg";
import communityImg from "@/assets/community.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import farmersImg from "@/assets/farmers.jpg";
import {
  Heart,
  Leaf,
  Users,
  Smartphone,
  ShieldCheck,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Sprout,
} from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Natural Products",
    desc: "Carefully selected herbal blends rooted in tradition and backed by research.",
  },
  {
    icon: Heart,
    title: "Expert Guidance",
    desc: "Trusted advice from lactation specialists and maternal health professionals.",
  },
  {
    icon: Users,
    title: "Peer Support",
    desc: "A community of mothers who understand the journey and walk it with you.",
  },
  {
    icon: Smartphone,
    title: "Digital Platform",
    desc: "Modern tools and resources accessible wherever and whenever you need them.",
  },
];

const problems = [
  "Limited access to lactation specialists in many regions",
  "Inconsistent guidance from well-meaning but untrained sources",
  "Isolation during the breastfeeding journey without peer support",
  "Lack of natural, safe, and accessible lactation products",
  "Overwhelming information with no clear, trusted pathway",
];

const trustReasons = [
  {
    icon: Leaf,
    title: "Natural & Carefully Selected",
    desc: "Every ingredient chosen for safety, efficacy, and tradition.",
  },
  {
    icon: Heart,
    title: "Designed for Real Needs",
    desc: "Built by understanding what mothers actually go through.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    desc: "Shaped by the experiences and feedback of real mothers.",
  },
  {
    icon: ShieldCheck,
    title: "Expert-Informed",
    desc: "Guidance developed with lactation consultants and health professionals.",
  },
  {
    icon: Globe,
    title: "Ethiopian, African, Global",
    desc: "Rooted in Ethiopia with ambition to serve mothers across Africa.",
  },
  {
    icon: Star,
    title: "Holistic Approach",
    desc: "Beyond products — a complete support ecosystem for every mother.",
  },
];

const testimonials = [
  {
    name: "Meron T.",
    location: "Addis Ababa",
    quote:
      "Kuri gave me the confidence I needed during my first weeks of breastfeeding. The tea helped, but the community changed everything.",
  },
  {
    name: "Hanna B.",
    location: "Hawassa",
    quote:
      "I didn't know support like this existed. The expert guidance made me feel like I wasn't alone in this journey.",
  },
  {
    name: "Sara M.",
    location: "Dire Dawa",
    quote:
      "As a second-time mother, I thought I knew it all. Kuri showed me there's always more support to receive and give.",
  },
];

const faqs = [
  {
    q: "What is Kuri?",
    a: "Kuri is Ethiopia's first integrated breastfeeding support platform, combining natural lactation products with expert guidance, community support, and digital tools for mothers.",
  },
  {
    q: "Are Kuri products safe for breastfeeding mothers?",
    a: "Yes. Our products are made with carefully selected natural ingredients, following traditional wisdom and modern safety standards. Always consult your healthcare provider if you have specific concerns.",
  },
  {
    q: "How does the support platform work?",
    a: "Our digital platform connects you with lactation experts, peer support groups, educational content, and personalized guidance — all accessible from your phone.",
  },
  {
    q: "Is Kuri only for first-time mothers?",
    a: "Not at all. Kuri supports all breastfeeding mothers, whether it's your first child or your fourth. Every journey is unique and deserves support.",
  },
  {
    q: "How can I partner with Kuri?",
    a: "We work with pharmacies, health centers, distributors, and community organizations. Visit our Partners page or contact us to explore collaboration opportunities.",
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mother holding her baby with love"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 section-padding max-w-[1440px] mx-auto w-full pt-32 pb-20">
          <div className="max-w-2xl">
            <p className="label-sm mb-6 !text-primary-foreground/80">
              Ethiopia's First Lactation Support Ecosystem
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-[1.08] tracking-tight text-primary-foreground mb-6">
              Nourishing Mothers,
              <br />
              <span className="italic font-normal">Naturally.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/80 max-w-lg mb-10">
              Natural lactation products, trusted expert guidance, and a caring
              community of mothers — everything you need for a supported
              breastfeeding journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button
                size="xl"
                className="bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25 backdrop-blur-sm"
                asChild
              >
                <Link to="/services">Join the Community</Link>
              </Button>
            </div>
            {/* Trust cues */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-primary-foreground/15">
              {[
                "Natural Ingredients",
                "Expert-Backed",
                "Mother-Centered",
                "Ethiopian Brand",
              ].map((cue) => (
                <div
                  key={cue}
                  className="flex items-center gap-2 text-primary-foreground/60 text-sm"
                >
                  <CheckCircle size={14} />
                  <span>{cue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro / Value Proposition */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading
          label="Why Kuri"
          title="More than a product. A complete support system."
          description="Kuri was born from a simple belief: every breastfeeding mother deserves access to natural products, expert knowledge, and a community that truly cares."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-5">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                {p.title}
              </h3>
              <p className="body-md text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-sm mb-4 text-accent">The Reality</p>
              <h2 className="heading-lg mb-6">
                Breastfeeding is natural. But it isn't always easy.
              </h2>
              <p className="body-lg mb-8">
                Millions of mothers navigate the breastfeeding journey without
                adequate support, reliable guidance, or access to safe, natural
                products. The challenges are real — and they deserve real
                solutions.
              </p>
              <ul className="space-y-4">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span className="body-md">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={communityImg}
                alt="Mothers supporting each other"
                loading="lazy"
                width={1200}
                height={800}
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Kuri Helps */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading
          label="How Kuri Helps"
          title="An integrated support ecosystem for every mother."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Nourish Naturally",
              desc: "Start with our expertly crafted herbal lactation teas — four flavours including fenugreek and fenugreek-free options.",
              img: productHero,
            },
            {
              step: "02",
              title: "Get Expert Guidance",
              desc: "Access trusted advice from lactation specialists and maternal health professionals through our digital platform.",
              img: ingredientsImg,
            },
            {
              step: "03",
              title: "Join Your Community",
              desc: "Connect with other mothers, share experiences, and find the peer support that makes all the difference.",
              img: communityImg,
            },
          ].map((item) => (
            <div key={item.step} className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* <p className="label-sm text-accent mb-2">{item.step}</p> */}
              <h3 className="heading-sm mb-3">{item.title}</h3>
              <p className="body-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-sage-light">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="Our Products"
            title="Crafted by nature. Trusted by mothers."
            description="Each Kuri product is thoughtfully formulated with natural ingredients, rooted in traditional wisdom, and designed for the modern mother."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mint Lactation Tea",
                desc: "Refreshing mint blend with fenugreek to naturally support healthy milk production.",
                price: "ETB 450",
                img: productMint,
                tag: "With Fenugreek",
              },
              {
                name: "Fennel Blend Tea",
                desc: "Our signature fennel and fenugreek blend — trusted by Ethiopian mothers for generations.",
                price: "ETB 450",
                img: productFennel,
                tag: "Bestseller",
              },
              {
                name: "Lemon Tea (Fenugreek-Free)",
                desc: "A bright, citrus-forward lactation tea for mothers who prefer a fenugreek-free option.",
                price: "ETB 450",
                img: productMint,
                tag: "Fenugreek-Free",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group h-full flex flex-col"
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="body-md text-sm mb-6">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-serif text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                    <Button variant="hero" size="sm">
                      <Link to="/products"> Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services / Digital Platform */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-sm mb-4 text-accent">Support Platform</p>
            <h2 className="heading-lg mb-6">
              Beyond products. A digital companion for your journey.
            </h2>
            <p className="body-lg mb-8">
              Our support platform brings together everything a breastfeeding
              mother needs — expert guidance, community connection, educational
              resources, and personalized support — right at your fingertips.
            </p>
            <div className="space-y-5">
              {[
                "Free one-on-one lactation consultations",
                "Peer support groups and forums",
                "Breastfeeding Basics & Pumping guides",
                "Progress tracking and personalized tips",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="body-md">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  Explore the Platform <ArrowRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="space-y-6">
              {[
                {
                  icon: "💬",
                  label: "Expert Chat",
                  desc: "Connect with lactation specialists",
                },
                {
                  icon: "👥",
                  label: "Peer Groups",
                  desc: "Join mothers in your area",
                },
                {
                  icon: "📚",
                  label: "Resources",
                  desc: "Evidence-based guides and tips",
                },
                {
                  icon: "📊",
                  label: "Your Journey",
                  desc: "Track progress and milestones",
                },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <p className="font-sans font-semibold text-sm">
                      {feature.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Mothers Trust Kuri */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading label="Trust" title="Why mothers choose Kuri." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map((reason) => (
              <div
                key={reason.title}
                className="p-8 rounded-xl bg-background border border-border"
              >
                <reason.icon size={24} className="text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="body-md text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading
          label="Stories"
          title="Voices from our community."
          description="Real mothers sharing real experiences. Their words remind us why this work matters."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-base italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Chain / Farmers */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={farmersImg}
              alt="Ethiopian herb farmers supplying Kuri"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="label-sm mb-4 text-accent">Our Supply Chain</p>
            <h2 className="heading-lg mb-6">
              Rooted in Ethiopia's farming communities.
            </h2>
            <p className="body-lg mb-6">
              Every Kuri product begins in Ethiopia's highlands, where we work
              directly with smallholder farmers to source fenugreek, fennel,
              moringa, and other galactagogue herbs. Our supply chain is built
              on fair partnerships, traceability, and respect for the land.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Sprout,
                  text: "Direct partnerships with 200+ farmers across Oromia, Amhara & SNNPR",
                },
                {
                  icon: Leaf,
                  text: "Sustainable harvesting and organic farming practices",
                },
                {
                  icon: Users,
                  text: "Empowering rural women farmers with fair, reliable income",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon
                    size={18}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="body-md">{item.text}</span>
                </div>
              ))}
            </div>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/about">
                Learn Our Story <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact / Mission */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative section-padding section-y max-w-[1440px] mx-auto text-center">
          <p className="label-sm mb-4 !text-primary-foreground/80">
            Our Mission
          </p>
          <h2 className="heading-lg text-primary-foreground mb-6 max-w-3xl mx-auto">
            Empowering every mother in Ethiopia — and across Africa — to
            breastfeed with confidence.
          </h2>
          <p className="body-lg !text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            We envision a world where no mother walks the breastfeeding journey
            alone. From Addis Ababa to the continent, Kuri is building the
            infrastructure of maternal support.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { metric: "5,000+", label: "Mothers Supported" },
              { metric: "200+", label: "Partner Farmers" },
              { metric: "12+", label: "Cities Reached" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.metric}
                </p>
                <p className="text-xs text-primary-foreground/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-sm mb-4 text-accent">Partnerships</p>
            <h2 className="heading-lg mb-6">
              Grow with Kuri. Partner with purpose.
            </h2>
            <p className="body-lg mb-6">
              We partner with pharmacies, maternal health centers, distributors,
              retailers, and organizations committed to improving maternal care
              across Ethiopia and Africa.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Pharmacies & retail partners",
                "Maternal & child health centers",
                "NGOs & community organizations",
                "Distributors & wholesale partners",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="body-md text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <Link to="/partners">
                Partner with Kuri <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-10 border border-border text-center">
            <Globe size={48} className="text-primary mx-auto mb-6" />
            <h3 className="heading-sm mb-4">Ready to make an impact?</h3>
            <p className="body-md mb-6">
              Join a growing network of partners dedicated to supporting mothers
              and building healthier communities.
            </p>
            <Button variant="hero-outline" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="FAQ"
            title="Common questions, honest answers."
          />
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-background rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="font-serif text-base font-medium hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="body-md text-sm pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Button variant="ghost" asChild>
                <Link to="/faq">
                  View All FAQs <ArrowRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding section-y max-w-[1440px] mx-auto text-center">
        <h2 className="heading-lg mb-6 max-w-2xl mx-auto">
          Your breastfeeding journey deserves more than you're getting.
        </h2>
        <p className="body-lg max-w-xl mx-auto mb-10">
          Whether you're a new mother seeking support or a partner looking to
          make a difference — Kuri is here for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <Link to="/products">Shop Kuri Products</Link>
          </Button>
          <Button variant="accent-outline" size="xl" asChild>
            <Link to="/partners">Become a Partner</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
