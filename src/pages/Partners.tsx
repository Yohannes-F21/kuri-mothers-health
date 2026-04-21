import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ApiError, submitInquiry } from "@/services/inquiry";
import ithielLogo from "@/assets/partners/Ithiel Logo (1).png";
import marhiwotLogo from "@/assets/partners/marhiwot-removebg-preview.png";
import mulmulLogo from "@/assets/partners/Mulmul Logo (2) (1).png";
import michuMultimediaLogo from "@/assets/partners/michu-multi-media-removebg-preview.png";
import naebLogo from "@/assets/partners/naeb-removebg-preview.png";
import whizKidsLogo from "@/assets/partners/whiz-kids-removebg-preview.png";
import yeneHealthLogo from "@/assets/partners/yene-health.png";
import {
  Building2,
  Heart,
  Truck,
  Store,
  Handshake,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Pharmacies",
    desc: "Stock Kuri products and become a trusted source of lactation support in your community.",
  },
  {
    icon: Heart,
    title: "Maternal Health Centers",
    desc: "Integrate Kuri into your care pathways to enhance the support you provide to breastfeeding mothers.",
  },
  {
    icon: Truck,
    title: "Distributors",
    desc: "Help us reach more mothers across Ethiopia and Africa through strategic distribution partnerships.",
  },
  {
    icon: Store,
    title: "Retailers & Wellness Shops",
    desc: "Offer your customers premium, natural lactation products with proven demand.",
  },
  {
    icon: Handshake,
    title: "NGOs & Organizations",
    desc: "Collaborate to improve maternal health outcomes in communities that need it most.",
  },
  {
    icon: Globe,
    title: "Brand Collaborators",
    desc: "Partner with Kuri on co-branded initiatives, events, and campaigns that support mothers.",
  },
];

const whyPartner = [
  "Growing demand for natural lactation products in Ethiopia and Africa",
  "Premium brand positioning with strong customer loyalty",
  "Comprehensive partner support: training, marketing, and logistics",
  "Positive social impact aligned with maternal health goals",
  "Flexible partnership models tailored to your business",
  "Part of a growing ecosystem with strong community engagement",
];

const partnerLogos = [
  { src: ithielLogo, name: "Ithiel", logoClass: "max-w-[250px] max-h-28" },
  { src: marhiwotLogo, name: "Marhiwot", logoClass: "max-w-[380px] max-h-44" },
  { src: mulmulLogo, name: "Mulmul", logoClass: "max-w-[380px] max-h-46" },
  {
    src: michuMultimediaLogo,
    name: "Michu Multimedia",
    logoClass: "max-w-[250px] max-h-28",
  },
  { src: naebLogo, name: "NAEB", logoClass: "max-w-[250px] max-h-28" },
  { src: whizKidsLogo, name: "Whiz Kids", logoClass: "max-w-[380px] max-h-46" },
  {
    src: yeneHealthLogo,
    name: "Yene Health",
    logoClass: "max-w-[250px] max-h-28",
  },
];

type SubmitStatus = "idle" | "success" | "error";

type PartnershipFormState = {
  organizationName: string;
  contactPerson: string;
  email: string;
  partnershipType: string;
  message: string;
};

type PartnershipFormErrors = Partial<
  Record<keyof PartnershipFormState, string>
>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultPartnershipFormState: PartnershipFormState = {
  organizationName: "",
  contactPerson: "",
  email: "",
  partnershipType: "",
  message: "",
};

const Partners = () => {
  const [partnershipForm, setPartnershipForm] = useState<PartnershipFormState>(
    defaultPartnershipFormState,
  );
  const [partnershipErrors, setPartnershipErrors] =
    useState<PartnershipFormErrors>({});
  const [isPartnershipSubmitting, setIsPartnershipSubmitting] = useState(false);
  const [partnershipSubmitStatus, setPartnershipSubmitStatus] =
    useState<SubmitStatus>("idle");
  const [partnershipSubmitMessage, setPartnershipSubmitMessage] = useState("");
  const partnershipRequestRef = useRef<AbortController | null>(null);

  const validatePartnershipForm = (
    values: PartnershipFormState,
  ): { errors: PartnershipFormErrors; trimmed: PartnershipFormState } => {
    const trimmed: PartnershipFormState = {
      organizationName: values.organizationName.trim(),
      contactPerson: values.contactPerson.trim(),
      email: values.email.trim(),
      partnershipType: values.partnershipType.trim(),
      message: values.message.trim(),
    };

    const errors: PartnershipFormErrors = {};

    if (!trimmed.organizationName) {
      errors.organizationName = "Organization name is required.";
    }
    if (!trimmed.contactPerson) {
      errors.contactPerson = "Contact person is required.";
    }
    if (!trimmed.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(trimmed.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!trimmed.partnershipType) {
      errors.partnershipType = "Partnership type is required.";
    }
    if (!trimmed.message) {
      errors.message = "Message is required.";
    }

    return { errors, trimmed };
  };

  const handlePartnershipChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setPartnershipForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setPartnershipErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    if (partnershipSubmitStatus !== "idle") {
      setPartnershipSubmitStatus("idle");
      setPartnershipSubmitMessage("");
    }
  };

  const handlePartnershipSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (isPartnershipSubmitting) return;

    const { errors, trimmed } = validatePartnershipForm(partnershipForm);
    setPartnershipErrors(errors);

    if (Object.keys(errors).length > 0) {
      setPartnershipSubmitStatus("error");
      setPartnershipSubmitMessage("Please fix the highlighted fields.");
      return;
    }

    partnershipRequestRef.current?.abort();
    const controller = new AbortController();
    partnershipRequestRef.current = controller;

    setIsPartnershipSubmitting(true);
    setPartnershipSubmitStatus("idle");
    setPartnershipSubmitMessage("");

    try {
      const response = await submitInquiry(
        {
          ...trimmed,
          inquiryType: "Partnership Inquiry",
        },
        controller.signal,
      );

      setPartnershipSubmitStatus("success");
      setPartnershipSubmitMessage(
        response.message ||
          "Your partnership inquiry has been sent successfully.",
      );
      setPartnershipForm(defaultPartnershipFormState);
      setPartnershipErrors({});
    } catch (error) {
      if (error instanceof ApiError && error.message) {
        setPartnershipSubmitMessage(error.message);
      } else {
        setPartnershipSubmitMessage(
          "Unable to submit your inquiry. Please try again.",
        );
      }
      setPartnershipSubmitStatus("error");
    } finally {
      setIsPartnershipSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Partnerships</p>
            <h1 className="heading-xl mb-6">
              Grow with Kuri. Partner with purpose.
            </h1>
            <p className="body-lg max-w-2xl">
              Join a network of partners committed to improving maternal health
              across Ethiopia and Africa. Whether you're a pharmacy, health
              center, distributor, or organization there's a place for you in
              the Kuri ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-sm mb-4 text-accent">Why Partner With Kuri</p>
            <h2 className="heading-lg mb-6">
              A partnership that creates lasting value.
            </h2>
            <p className="body-lg mb-8">
              Kuri is building the leading maternal wellness brand in Africa.
              Our partners don't just distribute products they become part of a
              movement that empowers mothers and strengthens communities.
            </p>
            <ul className="space-y-4">
              {whyPartner.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-primary mt-1 shrink-0"
                  />
                  <span className="body-md text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl p-10 border border-border">
            <h3 className="heading-sm mb-6">Partnership Inquiry</h3>
            <form className="space-y-4" onSubmit={handlePartnershipSubmit}>
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Organization Name
                </label>
                <input
                  name="organizationName"
                  type="text"
                  value={partnershipForm.organizationName}
                  onChange={handlePartnershipChange}
                  aria-invalid={Boolean(partnershipErrors.organizationName)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your organization"
                />
                {partnershipErrors.organizationName && (
                  <p className="text-xs text-destructive mt-1.5">
                    {partnershipErrors.organizationName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Contact Person
                </label>
                <input
                  name="contactPerson"
                  type="text"
                  value={partnershipForm.contactPerson}
                  onChange={handlePartnershipChange}
                  aria-invalid={Boolean(partnershipErrors.contactPerson)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Full name"
                />
                {partnershipErrors.contactPerson && (
                  <p className="text-xs text-destructive mt-1.5">
                    {partnershipErrors.contactPerson}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={partnershipForm.email}
                  onChange={handlePartnershipChange}
                  aria-invalid={Boolean(partnershipErrors.email)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="email@example.com"
                />
                {partnershipErrors.email && (
                  <p className="text-xs text-destructive mt-1.5">
                    {partnershipErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Partnership Type
                </label>
                <select
                  name="partnershipType"
                  value={partnershipForm.partnershipType}
                  onChange={handlePartnershipChange}
                  aria-invalid={Boolean(partnershipErrors.partnershipType)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select type</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Health Center">Health Center</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Retailer">Retailer</option>
                  <option value="NGO / Organization">NGO / Organization</option>
                  <option value="Brand Collaboration">
                    Brand Collaboration
                  </option>
                  <option value="Other">Other</option>
                </select>
                {partnershipErrors.partnershipType && (
                  <p className="text-xs text-destructive mt-1.5">
                    {partnershipErrors.partnershipType}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={partnershipForm.message}
                  onChange={handlePartnershipChange}
                  aria-invalid={Boolean(partnershipErrors.message)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  rows={4}
                  placeholder="Tell us about your interest..."
                />
                {partnershipErrors.message && (
                  <p className="text-xs text-destructive mt-1.5">
                    {partnershipErrors.message}
                  </p>
                )}
              </div>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isPartnershipSubmitting}
              >
                {isPartnershipSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
              {partnershipSubmitStatus !== "idle" && (
                <p
                  className={`text-sm text-center ${partnershipSubmitStatus === "success" ? "text-primary" : "text-destructive"}`}
                >
                  {partnershipSubmitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-card">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <SectionHeading
            label="Who We Work With"
            title="Partnerships for every mission."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-xl bg-background border border-border"
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
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="">
        <div className="section-padding section-y max-w-[1440px] mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-14">
            <h2 className="heading-lg mb-5 text-foreground">
              Our Partners, Investors, Supporters and Affiliates
            </h2>
            <p className="body-lg max-w-4xl mx-auto">
              We're grateful for our partners' support in advancing our mission
              to empower women across the African continent meet their
              reproductive health needs.
            </p>
          </div>

          <div className="partner-marquee group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="partner-marquee-track flex w-max items-center gap-6 sm:gap-8 lg:gap-10 py-4">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="group/logo shrink-0 w-[220px] sm:w-[250px] min-h-[150px] flex items-center justify-center rounded-xl transition-all duration-500 hover:-translate-y-1 hover:bg-card/60"
                >
                  <img
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className={`${partner.logoClass} w-full object-contain opacity-90 transition-all duration-500 group-hover/logo:scale-[1.03] group-hover/logo:opacity-100`}
                  />
                </div>
              ))}
              {partnerLogos.map((partner) => (
                <div
                  key={`${partner.name}-duplicate`}
                  aria-hidden="true"
                  className="group/logo shrink-0 w-[220px] sm:w-[250px] min-h-[150px] flex items-center justify-center rounded-xl transition-all duration-500 hover:-translate-y-1 hover:bg-card/60"
                >
                  <img
                    src={partner.src}
                    alt=""
                    loading="lazy"
                    className={`${partner.logoClass} w-full object-contain opacity-90 transition-all duration-500 group-hover/logo:scale-[1.03] group-hover/logo:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="section-padding section-y max-w-[1440px] mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Let's build healthier communities together.
          </h2>
          <p className="body-lg !text-primary-foreground/70 max-w-lg mx-auto mb-10">
            Contact us to explore how a Kuri partnership can create value for
            your organization and the mothers you serve.
          </p>
          <Button
            size="xl"
            className="bg-accent text-accent-foreground hover:bg-accent/85"
            asChild
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Partners;
