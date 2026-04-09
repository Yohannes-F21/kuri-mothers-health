import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import communityImg from "@/assets/join-your-community.png";
import ingredientsImg from "@/assets/why-it-matters.png";
import farmersImg from "@/assets/supply-chain-2.png";
import {
  Heart,
  Leaf,
  Users,
  Globe,
  Target,
  Eye,
  ArrowRight,
  Sprout,
  MapPin,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Mother-Centered",
    desc: "Everything we do starts with a mother's real needs and experiences.",
  },
  {
    icon: Leaf,
    title: "Natural & Safe",
    desc: "We believe in the power of nature, guided by science and tradition.",
  },
  {
    icon: Users,
    title: "Community-First",
    desc: "No mother should walk this journey alone. Support is at the core.",
  },
  {
    icon: Globe,
    title: "African Ambition",
    desc: "Rooted in Ethiopia, with a vision to serve mothers across the continent.",
  },
  {
    icon: Target,
    title: "Evidence-Informed",
    desc: "Our products and guidance are shaped by research and real-world feedback.",
  },
  {
    icon: Eye,
    title: "Holistic Care",
    desc: "Beyond products — we build systems of support for lasting impact.",
  },
];

const supplyChainPoints = [
  {
    icon: Sprout,
    title: "Sourced from Ethiopian Farmers",
    desc: "We partner directly with smallholder farmers across Ethiopia's most fertile regions — from Oromia to Amhara to SNNPR — to source the finest fenugreek, fennel, moringa, and other galactagogue herbs.",
  },
  {
    icon: MapPin,
    title: "Traceability & Quality",
    desc: "Every ingredient is traceable to its origin. We work closely with farming communities to ensure sustainable harvesting practices, fair pricing, and consistent quality from field to finished product.",
  },
  {
    icon: Handshake,
    title: "Empowering Rural Communities",
    desc: "By building direct relationships with farmers — many of them women — Kuri creates economic opportunity in rural Ethiopia while securing a reliable supply of the highest-quality natural ingredients.",
  },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">About Kuri</p>
            <h1 className="heading-xl mb-6">A mother's strength, supported.</h1>
            <p className="body-lg max-w-2xl">
              Kuri was born from a profound understanding: breastfeeding is one
              of the most natural acts in the world, yet millions of mothers
              face it without the support they deserve. We exist to change that
              — starting in Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-8 md:p-10 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/50 via-accent/80 to-primary/20" />
            <p className="label-sm mb-4 text-accent">Our Mission</p>
            <h2 className="heading-md mb-5">
              To empower every breastfeeding mother with the products,
              knowledge, and community she needs to thrive.
            </h2>
            <p className="body-lg text-base md:text-lg">
              We combine time-honoured herbal traditions with modern maternal
              health science to create an integrated support system. Kuri is not
              just a brand — it's a movement toward better maternal care in
              Africa.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-8 md:p-10 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/80 via-primary/50 to-accent/30" />
            <p className="label-sm mb-4 text-accent">Our Vision</p>
            <h2 className="heading-md mb-5">
              A world where no mother breastfeeds alone.
            </h2>
            <p className="body-lg text-base md:text-lg">
              We see a future where every mother in Ethiopia and across Africa
              has access to safe, natural lactation products and a network of
              support that uplifts, educates, and nurtures her through the
              entire breastfeeding journey.
            </p>
          </article>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={communityImg}
                alt="Kuri community of mothers"
                loading="lazy"
                width={1200}
                height={800}
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="label-sm mb-4 text-accent">Our Story</p>
              <h2 className="heading-lg mb-6">
                From a deeply observed problem to a mission to support mothers.
              </h2>
              <p className="body-md mb-4">
                Kuri was founded by women who witnessed closely how difficult
                the breastfeeding journey can be for many mothers in Ethiopia.
                For one of our founders, the inspiration came from seeing a
                close family member struggle with breastfeeding and the lack of
                reliable, accessible support around her. For our co-founder, a
                medical doctor who worked closely with mothers in the obstetric
                ward, the challenge was something she saw repeatedly in
                practice, with many mothers facing limited guidance,
                inconsistent advice, and very few safe, locally relevant
                solutions. Bringing together these personal and professional
                experiences, Kuri was created to build a trusted maternal
                wellness brand that supports mothers with natural products,
                expert guidance, and a stronger support system throughout
                motherhood.
              </p>
              {/* <p className="body-md mb-4">
                What started as a search for natural lactation solutions evolved
                into something much bigger: a vision for a comprehensive support
                ecosystem that combines the best of traditional herbal wisdom
                with modern technology and expert guidance.
              </p> */}
              <p className="body-md">
                Today, Kuri serves thousands of mothers across Ethiopia, and
                we're just getting started. Our ambition is to become Africa's
                most trusted maternal wellness brand — one mother, one
                community, one city at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain & Farmers */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-sm mb-4 text-accent">Our Supply Chain</p>
            <h2 className="heading-lg mb-6">
              From Ethiopian farms to every mother's hands.
            </h2>
            <p className="body-lg mb-8">
              Kuri doesn't just sell products — we build supply chains that
              uplift communities. We work directly with farmers across Ethiopia
              to source the natural herbs and botanicals that power our
              lactation support products.
            </p>
            <div className="space-y-8">
              {supplyChainPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                    <point.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-1">
                      {point.title}
                    </h3>
                    <p className="body-md text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={farmersImg}
              alt="Ethiopian farmers harvesting herbs for Kuri products"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-2xl w-full object-cover aspect-[4/3]"
            />
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Herb farmers in the Ethiopian highlands — the origin of every Kuri
              product.
            </p>
          </div>
        </div>
      </section>

      {/* Why Maternal Support Matters */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <SectionHeading
            label="Why It Matters"
            title="Maternal support changes everything."
            description="When a mother is supported, her child thrives. When her community rallies around her, entire generations benefit. The evidence is clear: investing in breastfeeding support is one of the most impactful things we can do."
          />
          <img
            src={ingredientsImg}
            alt="Natural herbal ingredients"
            loading="lazy"
            width={1200}
            height={800}
            className="rounded-2xl w-full max-w-4xl mx-auto object-cover aspect-[16/9]"
          />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading label="Our Values" title="What guides us, every day." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-8 rounded-xl bg-card border border-border"
            >
              <v.icon size={24} className="text-primary mb-4" />
              <h3 className="font-serif text-lg font-semibold mb-2">
                {v.title}
              </h3>
              <p className="body-md text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Ready to experience the Kuri difference?
          </h2>
          <p className="body-lg max-w-lg mx-auto mb-10">
            Explore our products, join our community, or partner with us to make
            maternal support accessible to every mother.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Explore Products <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="accent-outline" size="lg" asChild>
              <Link to="/partners">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
