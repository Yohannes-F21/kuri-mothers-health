import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import productMint from "@/assets/product-mint.jpg";
import productLemon from "@/assets/product-lemon.jpg";
import productFennel from "@/assets/product-fennel.jpg";
import productHero from "@/assets/product-fennel-hero.jpg";
import productLifestyle from "@/assets/product-lifestyle.jpg";
import ingredientsImg from "@/assets//rooted-in-nature.png";
import {
  Leaf,
  ShieldCheck,
  Beaker,
  Heart,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Package,
  Baby,
} from "lucide-react";

const teas = [
  {
    name: "Mint Lactation Tea",
    desc: "A refreshing mint-infused herbal blend with fenugreek, crafted to naturally support healthy milk production while soothing digestion.",
    price: "ETB 450",
    tag: "With Fenugreek",
    img: productMint,
  },
  {
    name: "Fennel Lactation Tea",
    desc: "Our signature fennel blend tea with fenugreek — a time-honored galactagogue combination trusted by Ethiopian mothers for generations.",
    price: "ETB 450",
    tag: "With Fenugreek",
    img: productFennel,
  },
  {
    name: "Mint Tea (Fenugreek-Free)",
    desc: "A gentle, fenugreek-free mint lactation tea for mothers who prefer or need an alternative formulation without compromising on support.",
    price: "ETB 450",
    tag: "Fenugreek-Free",
    img: productMint,
  },
  {
    name: "Lemon Tea (Fenugreek-Free)",
    desc: "A bright, citrus-forward lactation tea without fenugreek. Perfect for mothers seeking a lighter, refreshing option with natural lactation herbs.",
    price: "ETB 450",
    tag: "Fenugreek-Free",
    img: productLemon,
  },
];

const guides = [
  {
    icon: Baby,
    name: "Breastfeeding Basics Guide",
    desc: "A comprehensive guide covering latch techniques, positioning, feeding schedules, and everything new mothers need to start their breastfeeding journey with confidence.",
  },
  {
    icon: BookOpen,
    name: "Pumping & Storage Guide",
    desc: "Designed for working mothers — step-by-step guidance on expressing, storing, and handling breast milk safely while maintaining supply.",
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
    a: "Our fenugreek blends (Mint and Fennel) use fenugreek as a key galactagogue — it's one of the most traditional and effective herbs for boosting milk supply. Our fenugreek-free options (Mint and Lemon) use alternative lactation-supporting herbs, ideal for mothers who are sensitive to fenugreek or prefer a different taste.",
  },
  {
    q: "How should I prepare the Lactation Tea?",
    a: ` - Add 1 teaspoon of Kuri Lactation,
    - Tea to 1 cup (250 ml) of freshly boiled water,
    - Cover and steep for 3–5 minutes,
    - Strain before drinking,
    - Drink it warm,1 to 3 cups per day, 
    - preferably 30–60 minutes before breastfeeding or pumping
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
    a: "The Working Mom Package includes milk collectors for hands-free expressing, selected lactation teas, and both our Breastfeeding Basics and Pumping & Storage guides — everything you need to maintain your supply when returning to work.",
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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {teas.map((product) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-sage-light/40">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full border border-border/70">
                  {product.tag}
                </span>
              </div>
              <div className="p-7 md:p-8 flex flex-col h-full">
                <h3 className="font-serif text-2xl font-semibold mb-3 leading-tight">
                  {product.name}
                </h3>
                <p className="body-md text-sm md:text-base mb-6">
                  {product.desc}
                </p>
                <div className="mt-auto pt-5 border-t border-border/70 flex items-center justify-between">
                  <span className="font-serif text-xl font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button variant="accent-outline" size="default">
                    Order Now
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
          description="Our thoughtfully curated packages combine teas, guides, and accessories — giving mothers everything they need in one box."
        />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-sage-light/40">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full border border-border/70">
                  {pkg.tag}
                </span>
              </div>
              <div className="p-7 md:p-8 flex flex-col h-full">
                <h3 className="font-serif text-2xl font-semibold mb-3 leading-tight">
                  {pkg.name}
                </h3>
                <p className="body-md text-sm md:text-base mb-5">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
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
                <div className="mt-auto pt-5 border-t border-border/70">
                  <Button variant="accent-outline" size="default">
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
              Shop Now
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
