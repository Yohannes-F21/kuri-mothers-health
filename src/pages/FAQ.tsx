import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Products",
    questions: [
      { q: "What ingredients are in Kuri's Lactation Tea?", a: "Our tea blend contains fenugreek, fennel, blessed thistle, and other carefully selected galactagogue herbs. All ingredients are natural, organic where possible, and free from artificial additives." },
      { q: "How should I prepare and drink the tea?", a: "Steep one tea bag or tablespoon in hot (not boiling) water for 5–7 minutes. We recommend 2–3 cups daily. You can add honey or milk to taste." },
      { q: "How quickly will I see results?", a: "Most mothers notice improvements within 24–72 hours of consistent use. We recommend at least one full week for the full effect." },
      { q: "Are Kuri products safe while breastfeeding?", a: "Yes. All our products are made with ingredients that have a long history of safe use during breastfeeding. We always recommend consulting your healthcare provider if you have specific concerns." },
    ],
  },
  {
    category: "Breastfeeding Support",
    questions: [
      { q: "Does Kuri provide lactation consultations?", a: "Yes. Through our support platform, you can connect with certified lactation consultants for personalized, one-on-one guidance." },
      { q: "Is the support platform free?", a: "We offer both free resources and premium support options. Basic community access and educational content are free. Expert consultations and advanced features are available through our premium plans." },
      { q: "Can I get support if I'm not in Addis Ababa?", a: "Absolutely. Our digital platform is accessible from anywhere in Ethiopia. We also have growing community groups in multiple cities." },
    ],
  },
  {
    category: "Community & Platform",
    questions: [
      { q: "How do I join Kuri's community?", a: "You can sign up through our website or download our app. Once registered, you'll have access to peer groups, educational content, and expert guidance." },
      { q: "Is the community only for first-time mothers?", a: "Not at all. Our community includes mothers at every stage — from first-time parents to experienced mothers who mentor and support others." },
      { q: "Can family members join?", a: "We encourage partners and family members to engage with our educational resources. Some community features are specifically for mothers, but we're building more family-inclusive content." },
    ],
  },
  {
    category: "Orders & Inquiries",
    questions: [
      { q: "How do I order Kuri products?", a: "You can order through our website, via our social media channels, or find us at partner pharmacies and retailers across Ethiopia." },
      { q: "Do you deliver across Ethiopia?", a: "Yes. We deliver to all major cities in Ethiopia. Delivery times and fees vary by location." },
      { q: "What is your return policy?", a: "If you're not satisfied, contact us within 14 days of purchase. We'll work with you to find a solution." },
    ],
  },
  {
    category: "Partnerships",
    questions: [
      { q: "How can my pharmacy stock Kuri products?", a: "Visit our Partners page and submit an inquiry. Our partnership team will reach out to discuss terms, pricing, and support." },
      { q: "Do you work with NGOs?", a: "Yes. We actively collaborate with organizations working to improve maternal and child health. Contact us to explore partnership opportunities." },
      { q: "What support do partners receive?", a: "Partners receive product training, marketing materials, dedicated support, and flexible terms designed to make the partnership mutually beneficial." },
    ],
  },
  {
    category: "About Kuri",
    questions: [
      { q: "Where is Kuri based?", a: "Kuri is based in Addis Ababa, Ethiopia. We serve mothers across the country and are expanding across Africa." },
      { q: "Who founded Kuri?", a: "Kuri was founded by an Ethiopian mother who experienced firsthand the gaps in breastfeeding support. Her personal journey became the foundation for a national mission." },
      { q: "Is Kuri a medical company?", a: "Kuri is a maternal wellness company, not a medical provider. We offer natural products and support services. We always recommend consulting healthcare professionals for medical advice." },
    ],
  },
];

const FAQ = () => {
  return (
    <main>
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <p className="label-sm mb-4 text-accent">FAQ</p>
            <h1 className="heading-xl mb-6">Questions? We have answers.</h1>
            <p className="body-lg max-w-2xl">
              Everything you need to know about Kuri's products, support platform, community, and partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-y max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="heading-md mb-6">{cat.category}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.questions.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.category}-${i}`} className="bg-card rounded-xl border border-border px-6">
                    <AccordionTrigger className="font-serif text-base font-medium hover:no-underline py-5">{faq.q}</AccordionTrigger>
                    <AccordionContent className="body-md text-sm pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQ;
