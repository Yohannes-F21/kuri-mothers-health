import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ApiError, submitInquiry } from "@/services/inquiry";

type SubmitStatus = "idle" | "success" | "error";

type GeneralFormState = {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: string;
  message: string;
};

type GeneralFormErrors = Partial<Record<keyof GeneralFormState, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultGeneralFormState: GeneralFormState = {
  firstName: "",
  lastName: "",
  email: "",
  inquiryType: "General Inquiry",
  message: "",
};

const Contact = () => {
  const [generalForm, setGeneralForm] = useState<GeneralFormState>(
    defaultGeneralFormState,
  );
  const [generalErrors, setGeneralErrors] = useState<GeneralFormErrors>({});
  const [isGeneralSubmitting, setIsGeneralSubmitting] = useState(false);
  const [generalSubmitStatus, setGeneralSubmitStatus] =
    useState<SubmitStatus>("idle");
  const [generalSubmitMessage, setGeneralSubmitMessage] = useState("");
  const generalRequestRef = useRef<AbortController | null>(null);

  const validateGeneralForm = (
    values: GeneralFormState,
  ): { errors: GeneralFormErrors; trimmed: GeneralFormState } => {
    const trimmed: GeneralFormState = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim(),
      inquiryType: values.inquiryType.trim() || "General Inquiry",
      message: values.message.trim(),
    };

    const errors: GeneralFormErrors = {};

    if (!trimmed.firstName) errors.firstName = "First name is required.";
    if (!trimmed.lastName) errors.lastName = "Last name is required.";
    if (!trimmed.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(trimmed.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!trimmed.message) errors.message = "Message is required.";

    return { errors, trimmed };
  };

  const handleGeneralChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setGeneralForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setGeneralErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    if (generalSubmitStatus !== "idle") {
      setGeneralSubmitStatus("idle");
      setGeneralSubmitMessage("");
    }
  };

  const handleGeneralSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (isGeneralSubmitting) return;

    const { errors, trimmed } = validateGeneralForm(generalForm);
    setGeneralErrors(errors);

    if (Object.keys(errors).length > 0) {
      setGeneralSubmitStatus("error");
      setGeneralSubmitMessage("Please fix the highlighted fields.");
      return;
    }

    generalRequestRef.current?.abort();
    const controller = new AbortController();
    generalRequestRef.current = controller;

    setIsGeneralSubmitting(true);
    setGeneralSubmitStatus("idle");
    setGeneralSubmitMessage("");

    try {
      const response = await submitInquiry(trimmed, controller.signal);
      setGeneralSubmitStatus("success");
      setGeneralSubmitMessage(
        response.message || "Your message has been sent successfully.",
      );
      setGeneralForm(defaultGeneralFormState);
      setGeneralErrors({});
    } catch (error) {
      if (error instanceof ApiError && error.message) {
        setGeneralSubmitMessage(error.message);
      } else {
        setGeneralSubmitMessage(
          "Unable to submit your message. Please try again.",
        );
      }
      setGeneralSubmitStatus("error");
    } finally {
      setIsGeneralSubmitting(false);
    }
  };

  return (
    <main>
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">Contact</p>
            <h1 className="heading-xl mb-6">We'd love to hear from you.</h1>
            <p className="body-lg max-w-2xl">
              Whether you're a mother seeking support, a partner exploring
              collaboration, or simply curious about Kuri — reach out. We're
              here to help.
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
                  <p className="font-sans font-semibold text-sm mb-1">
                    Location
                  </p>
                  <p className="body-md text-sm">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="label-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Telegram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <p className="font-serif text-base font-medium mb-2">
                For partnership inquiries
              </p>
              <p className="body-md text-sm mb-3">
                If you're a pharmacy, health center, distributor, or
                organization interested in partnering with Kuri, please use the
                partnership form or email us directly.
              </p>
              <Button variant="hero-outline" size="sm" asChild>
                <a href="mailto:partners@kurimothers.com">
                  Email Partners Team
                </a>
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <h3 className="heading-sm mb-6">Send us a message.</h3>
              <form className="space-y-5" onSubmit={handleGeneralSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium block mb-1.5">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      value={generalForm.firstName}
                      onChange={handleGeneralChange}
                      aria-invalid={Boolean(generalErrors.firstName)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your first name"
                    />
                    {generalErrors.firstName && (
                      <p className="text-xs text-destructive mt-1.5">
                        {generalErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      value={generalForm.lastName}
                      onChange={handleGeneralChange}
                      aria-invalid={Boolean(generalErrors.lastName)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your last name"
                    />
                    {generalErrors.lastName && (
                      <p className="text-xs text-destructive mt-1.5">
                        {generalErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={generalForm.email}
                    onChange={handleGeneralChange}
                    aria-invalid={Boolean(generalErrors.email)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="email@example.com"
                  />
                  {generalErrors.email && (
                    <p className="text-xs text-destructive mt-1.5">
                      {generalErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={generalForm.inquiryType}
                    onChange={handleGeneralChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Support Platform">Support Platform</option>
                    <option value="Partnership / Business">
                      Partnership / Business
                    </option>
                    <option value="Media / Press">Media / Press</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={generalForm.message}
                    onChange={handleGeneralChange}
                    aria-invalid={Boolean(generalErrors.message)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    rows={6}
                    placeholder="How can we help?"
                  />
                  {generalErrors.message && (
                    <p className="text-xs text-destructive mt-1.5">
                      {generalErrors.message}
                    </p>
                  )}
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isGeneralSubmitting}
                >
                  {isGeneralSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {generalSubmitStatus !== "idle" && (
                  <p
                    className={`text-sm text-center ${generalSubmitStatus === "success" ? "text-primary" : "text-destructive"}`}
                  >
                    {generalSubmitMessage}
                  </p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
