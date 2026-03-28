import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Contact</p>
            <h1 className="heading-xl mb-6">We'd love to hear from you.</h1>
            <p className="body-lg max-w-2xl">
              Whether you're a mother seeking support, a partner exploring collaboration, or simply curious about Kuri — reach out. We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="heading-md mb-8">Get in touch.</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm mb-1">Email</p>
                  <p className="body-md text-sm">hello@kurimothers.com</p>
                  <p className="body-md text-sm">partners@kurimothers.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm mb-1">Phone</p>
                  <p className="body-md text-sm">+251 91 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm mb-1">Location</p>
                  <p className="body-md text-sm">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="label-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Telegram"].map((social) => (
                  <a key={social} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <p className="font-serif text-base font-medium mb-2">For partnership inquiries</p>
              <p className="body-md text-sm mb-3">
                If you're a pharmacy, health center, distributor, or organization interested in partnering with Kuri, please use the partnership form or email us directly.
              </p>
              <Button variant="hero-outline" size="sm" asChild>
                <a href="mailto:partners@kurimothers.com">Email Partners Team</a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <h3 className="heading-sm mb-6">Send us a message.</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium block mb-1.5">First Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">Last Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Email</label>
                  <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Inquiry Type</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>General Inquiry</option>
                    <option>Product Question</option>
                    <option>Support Platform</option>
                    <option>Partnership / Business</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Message</label>
                  <textarea className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" rows={6} placeholder="How can we help?" />
                </div>
                <Button variant="hero" size="lg" className="w-full">Send Message</Button>
                <p className="text-xs text-muted-foreground text-center">We typically respond within 24 hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
