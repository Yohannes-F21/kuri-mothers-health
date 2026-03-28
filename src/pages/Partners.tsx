import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Building2, Heart, Truck, Store, Handshake, Globe, CheckCircle, ArrowRight } from "lucide-react";

const partnerTypes = [
  { icon: Building2, title: "Pharmacies", desc: "Stock Kuri products and become a trusted source of lactation support in your community." },
  { icon: Heart, title: "Maternal Health Centers", desc: "Integrate Kuri into your care pathways to enhance the support you provide to breastfeeding mothers." },
  { icon: Truck, title: "Distributors", desc: "Help us reach more mothers across Ethiopia and Africa through strategic distribution partnerships." },
  { icon: Store, title: "Retailers & Wellness Shops", desc: "Offer your customers premium, natural lactation products with proven demand." },
  { icon: Handshake, title: "NGOs & Organizations", desc: "Collaborate to improve maternal health outcomes in communities that need it most." },
  { icon: Globe, title: "Brand Collaborators", desc: "Partner with Kuri on co-branded initiatives, events, and campaigns that support mothers." },
];

const whyPartner = [
  "Growing demand for natural lactation products in Ethiopia and Africa",
  "Premium brand positioning with strong customer loyalty",
  "Comprehensive partner support: training, marketing, and logistics",
  "Positive social impact aligned with maternal health goals",
  "Flexible partnership models tailored to your business",
  "Part of a growing ecosystem with strong community engagement",
];

const Partners = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Partnerships</p>
            <h1 className="heading-xl mb-6">Grow with Kuri. Partner with purpose.</h1>
            <p className="body-lg max-w-2xl">
              Join a network of partners committed to improving maternal health across Ethiopia and Africa. Whether you're a pharmacy, health center, distributor, or organization — there's a place for you in the Kuri ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-sm mb-4 text-accent">Why Partner With Kuri</p>
            <h2 className="heading-lg mb-6">A partnership that creates lasting value.</h2>
            <p className="body-lg mb-8">
              Kuri is building the leading maternal wellness brand in Africa. Our partners don't just distribute products — they become part of a movement that empowers mothers and strengthens communities.
            </p>
            <ul className="space-y-4">
              {whyPartner.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                  <span className="body-md text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-10 border border-border">
            <h3 className="heading-sm mb-6">Partnership Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium block mb-1.5">Organization Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your organization" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Contact Person</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Full name" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Partnership Type</label>
                <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select type</option>
                  <option>Pharmacy</option>
                  <option>Health Center</option>
                  <option>Distributor</option>
                  <option>Retailer</option>
                  <option>NGO / Organization</option>
                  <option>Brand Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Message</label>
                <textarea className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" rows={4} placeholder="Tell us about your interest..." />
              </div>
              <Button variant="hero" size="lg" className="w-full">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading label="Who We Work With" title="Partnerships for every mission." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((p) => (
              <div key={p.title} className="p-8 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-5">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{p.title}</h3>
                <p className="body-md text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Let's build healthier communities together.</h2>
          <p className="body-lg text-primary-foreground/70 max-w-lg mx-auto mb-10">
            Contact us to explore how a Kuri partnership can create value for your organization and the mothers you serve.
          </p>
          <Button size="xl" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Partners;
