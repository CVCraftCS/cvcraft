// src/pages/retail-cv-example-uk.js
import CvExamplePage from "../../components/CvExamplePage";

export default function RetailCvExampleUk() {
  const title =
    "Retail CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional retail CV example for the UK (2026). Includes a personal statement, key retail skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/retail-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Retail CV Example (UK 2026) + Free Retail CV Template"
      intro="A strong UK retail CV should highlight customer service, reliability, teamwork, and measurable results like sales targets, upsells, or positive feedback.\n\nRetail CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and relevant qualifications. Use numbers wherever possible — daily targets, customers served, upsells, queue times reduced."
      profileTitle="Example Personal Statement for a Retail CV"
      profileText="Friendly and reliable Retail Assistant with 3+ years’ experience in fast-paced stores, delivering excellent customer service and supporting daily sales targets. Confident with tills, cash handling, stock replenishment and merchandising. Known for calm, professional communication and consistent shift attendance, including weekends and late shifts."
      skillsTitle="Key Skills for a Retail CV (UK)"
      skills={[
        "Customer service and communication",
        "Tills / POS systems and cash handling",
        "Stock replenishment and rotation",
        "Merchandising and display standards",
        "Queue management during busy periods",
        "Teamwork and shift coordination",
        "Problem solving and basic complaint handling",
        "Timekeeping, reliability, and flexibility",
        "Upselling and hitting sales targets",
        "Opening/closing procedures (if applicable)",
      ]}
      jobTitle="Retail Assistant — High Street Store"
      jobMeta="Leeds | 2022 – Present"
      bullets={[
        "Served customers quickly and professionally during peak periods, maintaining a friendly experience",
        "Operated tills confidently, processed cash/card payments accurately, and followed cashing-up procedures",
        "Replenished stock and maintained tidy, well-presented displays to company standards",
        "Supported promotions and recommended add-on items when suitable to help hit daily targets",
        "Resolved basic complaints politely and escalated more complex issues when needed",
        "Helped reduce queue times by supporting busy tills and self-checkout during rush hours",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "GCSEs including English & Maths (helpful for many retail roles)",
        "Retail/customer service training (optional)",
        "Food hygiene training (optional, if supermarket/food retail)",
        "First Aid training (optional)",
      ]}
      tipsTitle="How to Make Your Retail CV Stand Out"
      tips={[
        "Add numbers if you can: customers served, tills covered, queue times reduced, targets hit",
        "Mention busy periods you handled well (Christmas, sales events, weekends)",
        "Show trust/responsibility: opening/closing duties, cash handling, keyholder support",
        "Include systems you’ve used (POS/tills, self-checkout support, stock systems)",
        "Keep bullets focused on outcomes: speed, accuracy, standards, customer experience",
        "If you supported visual merchandising or promotions, mention it",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Retail CV Mistakes to Avoid"
      mistakes={[
        "Not including any numbers (targets hit, customers served, sales performance)",
        "Listing only generic duties like 'served customers' without impact",
        "Forgetting to mention tills/POS systems",
        "Not showing flexibility (weekends, evenings, busy periods)",
        "Writing long paragraphs instead of short, scannable bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a retail CV?",
          a: "Include customer service, tills/POS systems, cash handling, teamwork, stock replenishment, merchandising, and reliability. Add upselling or target-based experience if applicable.",
        },
        {
          q: "How long should a retail CV be in the UK?",
          a: "1 page is ideal for entry-level or junior retail roles. Two pages is acceptable if you have strong experience or supervisory responsibility.",
        },
        {
          q: "How do I write a retail CV with no experience?",
          a: "Focus on transferable skills such as communication, teamwork, reliability, and handling responsibility. Use examples from school, volunteering, hospitality, or part-time work.",
        },
        {
          q: "Should I include sales targets on my retail CV?",
          a: "Yes. If you’ve hit targets or contributed to sales goals, include numbers. Employers value measurable performance.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/sales-assistant-cv-example-uk", label: "Sales Assistant CV Example (UK)" },
        { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/receptionist-cv-example-uk", label: "Receptionist CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Retail CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly retail CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Retail CV Now"
      ctaHref="/cv"
    />
  );
}