import { Link } from "react-router-dom";
import kuriLogo from "@/assets/kuri-logo-clean.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={kuriLogo} alt="Kuri — Mother's Health Solution" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              Ethiopia's first trusted lactation support platform. Natural products, expert guidance, and a caring community — all for the breastfeeding mother.
            </p>
            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-wider uppercase mb-3 opacity-60">Stay Connected</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40"
                />
                <button className="bg-accent text-accent-foreground px-5 py-2.5 rounded-r-lg text-sm font-medium hover:bg-accent/85 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase mb-6 opacity-60">Explore</p>
            <ul className="space-y-3">
              {[
                { label: "About Kuri", path: "/about" },
                { label: "Our Products", path: "/products" },
                { label: "Support Platform", path: "/services" },
                { label: "Partner With Us", path: "/partners" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase mb-6 opacity-60">Products</p>
            <ul className="space-y-3">
              {["Lactation Tea Blend", "Herbal Support Capsules", "Nursing Comfort Kit", "Gift Sets"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase mb-6 opacity-60">Contact</p>
            <ul className="space-y-3 text-sm opacity-70">
              <li>Addis Ababa, Ethiopia</li>
              <li>hello@kurimothers.com</li>
              <li>+251 91 234 5678</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "Telegram"].map((social) => (
                <a key={social} href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity uppercase tracking-wider">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">© 2025 Kuri Mothers Health Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-40 hover:opacity-70 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-xs opacity-40 hover:opacity-70 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
