import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import communityImg from "@/assets/community.jpg";
import {
  MessageCircle,
  Users,
  BookOpen,
  BarChart3,
  Heart,
  Smartphone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Lactation Consultation",
    desc: "Kuri offers mothers access to lactation support and expert consultation to help them navigate breastfeeding with practical, trusted guidance.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    desc: "Connect with certified lactation consultants and maternal health professionals for personalized, evidence-based support.",
  },
  {
    icon: Users,
    title: "Peer Support Groups",
    desc: "Join groups of mothers in your area or online. Share experiences, ask questions, and find encouragement from women who understand.",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    desc: "Access a growing library of evidence-based articles, videos, and guides including our Breastfeeding Basics and Pumping & Storage guides.",
  },

  {
    icon: Smartphone,
    title: "Mobile Access",
    desc: "Everything you need, right in your pocket. Access support, resources, and community anytime, anywhere.",
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Support Platform</p>
            <h1 className="heading-xl mb-6">
              More than products. A more complete support system for mothers.
            </h1>
            <p className="body-lg max-w-2xl">
              Kuri’s support platform is designed to give mothers access to
              practical guidance beyond the product itself. By bringing together
              expert support, educational resources, community connection, and
              helpful tools, Kuri aims to make the breastfeeding journey more
              informed, supported, and manageable for every mother.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-sm mb-4 text-accent">The Kuri Model</p>
            <h2 className="heading-lg mb-6">
              Mothers need more than products. They need support that fits real
              life.
            </h2>
            <p className="body-lg mb-6">
              Kuri is built on the belief that practical maternal support goes
              beyond what is in the package. Mothers often need trusted
              information, everyday guidance, and a sense of support alongside
              the products they use. That is why Kuri is designed as more than a
              product line it is a growing support model that combines natural
              lactation products with education, guidance, and community to
              better respond to the real needs of breastfeeding mothers.
            </p>
            {/* <p className="body-md">
              Our platform is designed to complement our natural products,
              creating a holistic support experience that addresses the
              physical, emotional, and informational needs of breastfeeding
              mothers.
            </p> */}
          </div>
          <div>
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
      </section>

      {/* Features Grid */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="Platform Features"
            title="Everything you need, in one place."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 rounded-xl bg-background border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-5">
                  <f.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="body-md text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="section-padding section-y max-w-[1440px] mx-auto">
        <SectionHeading
          label="How It Works"
          title="Your support journey in three steps."
        />
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Sign Up & Share",
              desc: "Create your profile and tell us about your breastfeeding journey. We'll tailor your experience to your unique needs.",
            },
            {
              step: "02",
              title: "Connect & Learn",
              desc: "Access expert consultations, join peer groups, and explore our educational resources. Get the support you need, when you need it.",
            },
            {
              step: "03",
              title: "Thrive & Grow",
              desc: "Track your progress, celebrate milestones, and become part of a community that uplifts and empowers every mother.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl font-bold text-primary">
                  {item.step}
                </span>
              </div>
              <h3 className="heading-sm mb-3">{item.title}</h3>
              <p className="body-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Why Combined Support */}
      <section className="bg-primary">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <p className="label-sm mb-4 !text-primary-foreground/80">
              The Power of Combined Support
            </p>
            <h2 className="heading-lg text-primary-foreground mb-6">
              Products + Guidance + Community = Better Support for Mothers.
            </h2>
            <p className="body-lg !text-primary-foreground/70 mb-10">
              Breastfeeding support works best when mothers have more than one
              kind of help. Alongside practical products, mothers often need
              trusted guidance, useful information, and a supportive community
              to feel more confident in their journey.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { metric: "87%", label: "Feel more confident" },
                { metric: "3.2x", label: "Longer breastfeeding" },
                { metric: "94%", label: "Would recommend" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl font-bold text-primary-foreground">
                    {stat.metric}
                  </p>
                  <p className="text-sm text-primary-foreground/60 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-y max-w-[1440px] mx-auto text-center">
        <h2 className="heading-lg mb-6">
          Ready to experience complete breastfeeding support?
        </h2>
        <p className="body-lg max-w-lg mx-auto mb-10">
          Join Kuri's support platform and discover what it means to have a
          community that truly cares about your journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl">
            <Link to="https://t.me/kurimotherchannel">Join the Platform</Link>
          </Button>
          <Button variant="accent-outline" size="xl" asChild>
            <Link to="/products">
              Explore Products <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
