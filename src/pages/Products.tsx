import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import productImg from "@/assets/product-tea.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import { Leaf, ShieldCheck, Beaker, Heart, ArrowRight, CheckCircle } from "lucide-react";

const products = [
  {
    name: "Lactation Tea Blend",
    desc: "Our signature herbal blend carefully formulated with fenugreek, fennel, blessed thistle, and other galactagogues to naturally support healthy milk production.",
    price: "ETB 450",
    tag: "Bestseller",
  },
  {
    name: "Herbal Support Capsules",
    desc: "Concentrated botanical support in easy-to-take capsule form. Perfect for mothers who prefer a convenient option without compromising on quality.",
    price: "ETB 580",
    tag: "New",
  },
  {
    name: "Nursing Comfort Kit",
    desc: "A thoughtfully curated wellness kit featuring our lactation tea, organic nipple balm, and a guided breastfeeding journal — the perfect gift for new mothers.",
    price: "ETB 1,200",
    tag: "Gift Set",
  },
  {
    name: "Postpartum Recovery Tea",
    desc: "A soothing blend designed to support postpartum recovery, reduce inflammation, and restore energy for new mothers during the fourth trimester.",
    price: "ETB 420",
    tag: "Coming Soon",
  },
];

const benefits = [
  { icon: Leaf, title: "100% Natural", desc: "No artificial additives, preservatives, or synthetic ingredients." },
  { icon: ShieldCheck, title: "Safety First", desc: "Every ingredient vetted for safety during breastfeeding." },
  { icon: Beaker, title: "Research-Backed", desc: "Formulations informed by traditional wisdom and modern science." },
  { icon: Heart, title: "Mother-Tested", desc: "Developed with real feedback from breastfeeding mothers." },
];

const productFaqs = [
  { q: "How should I prepare the Lactation Tea?", a: "Steep one tea bag or one tablespoon of loose blend in hot water (not boiling) for 5–7 minutes. Drink 2–3 cups daily for best results. Many mothers enjoy it with honey or a splash of milk." },
  { q: "How long before I see results?", a: "Most mothers notice improvements within 24–72 hours of consistent use. We recommend using the products daily for at least one week to experience the full benefits." },
  { q: "Can I take the capsules and drink the tea together?", a: "Yes, the tea and capsules are designed to complement each other. However, we recommend starting with one product and adding the other gradually." },
  { q: "Are your products safe for all breastfeeding mothers?", a: "Our products are made with ingredients that have a long history of safe use during breastfeeding. However, if you have specific allergies or medical conditions, please consult your healthcare provider before use." },
];

const Products = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Our Products</p>
            <h1 className="heading-xl mb-6">Nature's support for your breastfeeding journey.</h1>
            <p className="body-lg max-w-2xl">
              Every Kuri product is crafted with intention — blending traditional Ethiopian herbal knowledge with modern science to give you safe, effective, and natural lactation support.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading label="Shop" title="Our collection." />
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
              <div className="p-8 bg-sage-light/50 flex justify-center relative">
                <img src={productImg} alt={product.name} loading="lazy" width={800} height={1000} className="h-64 w-auto object-contain group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">{product.tag}</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-3">{product.name}</h3>
                <p className="body-md mb-5">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-semibold text-primary">{product.price}</span>
                  <Button variant="hero" size="default">Order Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Spotlight */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={productImg} alt="Kuri Lactation Tea Blend" loading="lazy" width={800} height={1000} className="rounded-2xl w-full max-w-md mx-auto object-contain" />
            </div>
            <div>
              <p className="label-sm mb-4 text-accent">Flagship Product</p>
              <h2 className="heading-lg mb-6">Kuri Lactation Tea Blend</h2>
              <p className="body-lg mb-6">
                Our most-loved product, trusted by thousands of Ethiopian mothers. A harmonious blend of galactagogue herbs carefully selected to support your body's natural milk production.
              </p>
              <ul className="space-y-3 mb-8">
                {["Fenugreek – traditionally used for centuries to support lactation", "Fennel – aids digestion for both mother and baby", "Blessed Thistle – supports healthy milk flow", "Organic & ethically sourced ingredients"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                    <span className="body-md text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg">Order Now — ETB 450</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading label="Our Philosophy" title="What makes Kuri products different." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-5">
                <b.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{b.title}</h3>
              <p className="body-md text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <SectionHeading label="Ingredients" title="Rooted in nature. Trusted by science." description="We source our ingredients responsibly, prioritizing quality, purity, and the wisdom of Ethiopian herbal traditions." />
          <img src={ingredientsImg} alt="Natural herbal ingredients" loading="lazy" width={1200} height={800} className="rounded-2xl w-full max-w-4xl mx-auto object-cover aspect-[16/9]" />
        </div>
      </section>

      {/* Product FAQs */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading label="FAQ" title="Product questions." />
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {productFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="font-serif text-base font-medium hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="body-md text-sm pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Ready to support your breastfeeding journey naturally?</h2>
          <p className="body-lg text-primary-foreground/70 max-w-lg mx-auto mb-10">
            Join thousands of mothers who trust Kuri's natural products and holistic support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" className="bg-accent text-accent-foreground hover:bg-accent/85">Shop Now</Button>
            <Button size="xl" className="bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25" asChild>
              <Link to="/partners">Become a Reseller <ArrowRight className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
