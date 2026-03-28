import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import communityImg from "@/assets/community.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import { Heart, Leaf, Users, Globe, Target, Eye, ArrowRight } from "lucide-react";

const values = [
  { icon: Heart, title: "Mother-Centered", desc: "Everything we do starts with a mother's real needs and experiences." },
  { icon: Leaf, title: "Natural & Safe", desc: "We believe in the power of nature, guided by science and tradition." },
  { icon: Users, title: "Community-First", desc: "No mother should walk this journey alone. Support is at the core." },
  { icon: Globe, title: "African Ambition", desc: "Rooted in Ethiopia, with a vision to serve mothers across the continent." },
  { icon: Target, title: "Evidence-Informed", desc: "Our products and guidance are shaped by research and real-world feedback." },
  { icon: Eye, title: "Holistic Care", desc: "Beyond products — we build systems of support for lasting impact." },
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
              Kuri was born from a profound understanding: breastfeeding is one of the most natural acts in the world, yet millions of mothers face it without the support they deserve. We exist to change that — starting in Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-sm mb-4 text-accent">Our Mission</p>
            <h2 className="heading-lg mb-6">To empower every breastfeeding mother with the products, knowledge, and community she needs to thrive.</h2>
            <p className="body-lg">
              We combine time-honoured herbal traditions with modern maternal health science to create an integrated support system. Kuri is not just a brand — it's a movement toward better maternal care in Africa.
            </p>
          </div>
          <div>
            <p className="label-sm mb-4 text-accent">Our Vision</p>
            <h2 className="heading-lg mb-6">A world where no mother breastfeeds alone.</h2>
            <p className="body-lg">
              We see a future where every mother in Ethiopia and across Africa has access to safe, natural lactation products and a network of support that uplifts, educates, and nurtures her through the entire breastfeeding journey.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src={communityImg} alt="Kuri community of mothers" loading="lazy" width={1200} height={800} className="rounded-2xl w-full object-cover aspect-[4/3]" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="label-sm mb-4 text-accent">Our Story</p>
              <h2 className="heading-lg mb-6">From a personal struggle to a national mission.</h2>
              <p className="body-md mb-4">
                Kuri began when our founder experienced firsthand the gaps in breastfeeding support available to Ethiopian mothers. Navigating conflicting advice, limited access to quality products, and the isolating reality of early motherhood, she realized the system needed to change.
              </p>
              <p className="body-md mb-4">
                What started as a search for natural lactation solutions evolved into something much bigger: a vision for a comprehensive support ecosystem that combines the best of traditional herbal wisdom with modern technology and expert guidance.
              </p>
              <p className="body-md">
                Today, Kuri serves thousands of mothers across Ethiopia, and we're just getting started. Our ambition is to become Africa's most trusted maternal wellness brand — one mother, one community, one city at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maternal Support Matters */}
      <section className="section-padding section-y max-w-[1440px] mx-auto text-center">
        <SectionHeading
          label="Why It Matters"
          title="Maternal support changes everything."
          description="When a mother is supported, her child thrives. When her community rallies around her, entire generations benefit. The evidence is clear: investing in breastfeeding support is one of the most impactful things we can do."
        />
        <img src={ingredientsImg} alt="Natural herbal ingredients" loading="lazy" width={1200} height={800} className="rounded-2xl w-full max-w-4xl mx-auto object-cover aspect-[16/9]" />
      </section>

      {/* Values */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading label="Our Values" title="What guides us, every day." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-xl bg-background border border-border">
                <v.icon size={24} className="text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">{v.title}</h3>
                <p className="body-md text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-y max-w-[1440px] mx-auto text-center">
        <h2 className="heading-lg mb-6">Ready to experience the Kuri difference?</h2>
        <p className="body-lg max-w-lg mx-auto mb-10">
          Explore our products, join our community, or partner with us to make maternal support accessible to every mother.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">Explore Products <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/partners">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
