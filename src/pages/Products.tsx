import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { featuredProducts } from "@/data/featured-products";
import productHero from "@/assets/new-mom-package.png";
import productLifestyle from "@/assets/working-mom-package.png";
import ingredientsImg from "@/assets/rooted-in-nature.png";
import {
  Leaf,
  ShieldCheck,
  Beaker,
  Heart,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Baby,
} from "lucide-react";

const teas = featuredProducts.map((product) => ({
  ...product,
  desc: product.shortDescription,
}));

const guides = [
  {
    icon: Baby,
    name: "Breastfeeding Basics Guide",
    desc: "A comprehensive guide covering latch techniques, positioning, feeding schedules, and everything new mothers need to start their breastfeeding journey with confidence.",
  },
  {
    icon: BookOpen,
    name: "Pumping & Storage Guide",
    desc: "Designed for working mothers step-by-step guidance on expressing, storing, and handling breast milk safely while maintaining supply.",
  },
];

const packages = [
  {
    name: "New Mom Package",
    desc: "Everything a new mother needs in one box: all four lactation tea flavours, Kuri labelled Mug, plus our breastfeeding basics and pumping & storage guides.",
    includes: [
      "All 4 tea flavours",
      "Breastfeeding Basics Guide",
      "Pumping & Storage Guide",
      "Dad guide",
    ],
    tag: "Complete Starter",
    img: productHero,
  },
  {
    name: "Working Mom Package",
    desc: "Built for mothers returning to work: includes milk collectors, selected lactation teas, and both essential guides to keep your supply strong on the go.",
    includes: [
      "Selected lactation teas",
      "Breastfeeding Basics Guide",
      "Pumping & Storage Guide",
    ],
    tag: "Back-to-Work",
    img: productLifestyle,
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No artificial additives, preservatives, or synthetic ingredients.",
  },
  {
    icon: ShieldCheck,
    title: "AAFDA Certified",
    desc: "Every product certified and approved for safety and quality.",
  },
  {
    icon: Beaker,
    title: "Research-Backed",
    desc: "Formulations informed by traditional wisdom and modern science.",
  },
  {
    icon: Heart,
    title: "Mother-Tested",
    desc: "Developed with real feedback from breastfeeding mothers.",
  },
];

const productFaqs = [
  {
    q: "What's the difference between fenugreek and fenugreek-free teas?",
    a: "Our fenugreek blends (Mint and Fennel) use fenugreek as a key galactagogue it's one of the most traditional and effective herbs for boosting milk supply. Our fenugreek-free options (Mint and Lemon) use alternative lactation-supporting herbs, ideal for mothers who are sensitive to fenugreek or prefer a different taste.",
  },
  {
    q: "How should I prepare the Lactation Tea?",
    a: ` -> Add 1 teaspoon of Kuri Lactation,
    -> Tea to 1 cup (250 ml) of freshly boiled water,
    -> Cover and steep for 3–5 minutes,
    -> Strain before drinking,
    -> Drink it warm,1 to 3 cups per day, 
    -> preferably 30–60 minutes before breastfeeding or pumping
    `,
  },
  {
    q: "How long before I see results?",
    a: "Most mothers notice improvements within 2–4 days of consistent use. We recommend using the products daily for at least one week to experience the full benefits.",
  },
  {
    q: "What's included in the New Mom Package?",
    a: "The New Mom Package includes all four lactation tea flavours (Mint, Fennel, Mint Fenugreek-Free, and Lemon Fenugreek-Free) plus our Breastfeeding Basics Guide, Pumping & Storage Guide, and Dad guide.",
  },
  {
    q: "What's included in the Working Mom Package?",
    a: "The Working Mom Package includes milk collectors for hands-free expressing, selected lactation teas, and both our Breastfeeding Basics and Pumping & Storage guides everything you need to maintain your supply when returning to work.",
  },
  {
    q: "Are your products safe for all breastfeeding mothers?",
    a: "Our products are made with ingredients that have a long history of safe use during breastfeeding and are certified by AAFDA. However, if you have specific allergies or medical conditions, please consult your healthcare provider before use.",
  },
];

const Products = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Our Products</p>
            <h1 className="heading-xl mb-6">
              Natural support for your breastfeeding journey.
            </h1>
            <p className="body-lg max-w-2xl">
              Every Kuri product is carefully crafted to support mothers through
              a blend of trusted herbal ingredients, quality standards, and
              practical daily use. Made with natural ingredients and certified
              by AAFDA, Kuri offers safe, locally made lactation support
              designed for mothers who want both confidence and comfort in their
              breastfeeding journey.
            </p>
          </div>
        </div>
      </section>

      {/* Lactation Teas */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading
          label="Lactation Teas"
          title="Four flavours. Two formulations. One mission."
          description="Choose from our fenugreek-enriched blends for maximum galactagogue support, or our fenugreek-free options for a gentler alternative."
        />
        <div className="grid gap-6 sm:gap-7 md:auto-rows-fr md:grid-cols-2 lg:gap-10">
          {teas.map((product) => (
            <article
              key={product.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background shadow-[0_14px_40px_-28px_hsl(var(--foreground)/0.75)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_-30px_hsl(var(--foreground)/0.7)]"
            >
              <div className="relative flex w-full aspect-[1/1] items-center justify-center overflow-hidden ">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  // width={1000}
                  // height={1000}
                  className="h-full w-full object-cover object-center drop-shadow-[0_18px_26px_hsl(var(--foreground)/0.2)] transition-transform duration-700 group-hover:scale-[1.15]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                <h3 className="mb-3 font-serif text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-[1.85rem]">
                  {product.name}
                </h3>
                <p className="body-md mb-6 text-sm leading-relaxed md:text-base">
                  {product.desc}
                </p>
                <div className="mt-auto pt-2">
                  <Button
                    variant="hero-outline"
                    size="default"
                    asChild
                    className="w-full"
                  >
                    <Link to={`/products/${product.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="Educational Guides"
            title="Knowledge is power. Especially for mothers."
            description="Practical, expert-informed guides designed to give you confidence at every stage of your breastfeeding journey."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <div
                key={guide.name}
                className="p-8 rounded-xl bg-background border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                  <guide.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {guide.name}
                </h3>
                <p className="body-md">{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading
          label="Curated Packages"
          title="Complete support, beautifully packaged."
          description="Our thoughtfully curated packages combine teas, guides, and accessories giving mothers everything they need in one box."
        />
        <div className="grid gap-6 sm:gap-7 md:auto-rows-fr md:grid-cols-2 lg:gap-10">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background shadow-[0_14px_40px_-28px_hsl(var(--foreground)/0.75)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_-30px_hsl(var(--foreground)/0.7)]"
            >
              <div className="relative flex w-full aspect-[4/3] items-center justify-center overflow-hidden ">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover object-center  transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
                  {pkg.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                <h3 className="mb-3 font-serif text-2xl font-semibold leading-tight tracking-[-0.01em] sm:text-[1.85rem]">
                  {pkg.name}
                </h3>
                <p className="body-md mb-5 text-sm leading-relaxed md:text-base">
                  {pkg.desc}
                </p>
                <ul className="mb-6 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle
                        size={14}
                        className="text-primary shrink-0"
                      />
                      <span className="body-md text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-border/70 pt-5">
                  <Button
                    variant="accent-outline"
                    size="default"
                    className="w-full"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="Our Philosophy"
            title="What makes Kuri products different."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-5">
                  <b.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {b.title}
                </h3>
                <p className="body-md text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="section-padding section-y max-w-[1440px] mx-auto text-center">
        <SectionHeading
          label="Ingredients"
          title="Rooted in nature. Trusted by science."
          description="We source our ingredients directly from Ethiopian farmers, prioritizing quality, purity, traceability, and the wisdom of Ethiopian herbal traditions."
        />
        <img
          src={ingredientsImg}
          alt="Natural herbal ingredients"
          loading="lazy"
          width={1200}
          height={800}
          className="rounded-2xl w-full max-w-4xl mx-auto object-cover aspect-[16/9]"
        />
      </section>

      {/* Product FAQs */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading label="FAQ" title="Product questions." />
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {productFaqs.map((faq, i) => (
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Ready to support your breastfeeding journey naturally?
          </h2>
          <p className="body-lg !text-primary-foreground/80 max-w-lg mx-auto mb-10">
            Join thousands of mothers who trust Kuri's natural products and
            holistic support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="xl"
              className="bg-accent text-accent-foreground hover:bg-accent/85"
            >
              <Link to="https://t.me/kurimotherchannel">Shop Now</Link>
            </Button>
            <Button
              size="xl"
              className="bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25"
              asChild
            >
              <Link to="/partners">
                Become a Reseller <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
