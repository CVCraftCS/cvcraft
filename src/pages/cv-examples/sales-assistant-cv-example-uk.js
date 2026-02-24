import CvExamplePage from "../../components/CvExamplePage";

export default function SalesAssistantCvExampleUk() {
  const title =
    "Sales Assistant CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Sales Assistant CV example for the UK (2026). Includes a personal statement, key sales skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/sales-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Sales Assistant CV Example (UK 2026) + Free Sales Assistant CV Template"
      intro="A strong UK sales assistant CV should highlight customer service, confidence on the shop floor, and the ability to support sales targets. Employers look for someone who can engage customers, recommend products, process payments accurately, and maintain high store standards.\n\nSales Assistant CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and relevant qualifications. Use numbers where possible — sales targets, upsell rates, customer feedback scores."
      profileTitle="Example Personal Statement for a Sales Assistant CV"
      profileText="Friendly and motivated Sales Assistant with 3+ years’ experience in fast-paced retail environments. Skilled in customer engagement, upselling, till operation, and stock management. Consistently supports team sales targets while maintaining excellent store presentation and delivering positive customer experiences."
      skillsTitle="Key Skills for a Sales Assistant CV (UK)"
      skills={[
        "Customer service and product knowledge",
        "Till operation and accurate cash handling",
        "Upselling and cross-selling techniques",
        "Working to sales targets and KPIs",
        "Stock replenishment and merchandising",
        "Handling deliveries and back-of-house tasks",
        "Maintaining store presentation standards",
        "Teamwork and shift coordination",
        "Complaint handling and basic problem resolution",
        "Opening/closing procedures (if applicable)",
      ]}
      jobTitle="Sales Assistant — HighStreet Retail"
      jobMeta="London | 2022 – Present"
      bullets={[
        "Served customers confidently, offered product recommendations, and supported a positive in-store experience",
        "Processed cash and card payments accurately while following refund and exchange procedures",
        "Supported weekly sales targets through upselling and promoting seasonal offers",
        "Replenished stock, rotated products, and maintained clean, well-presented displays",
        "Assisted with deliveries and ensured back-of-house areas remained organised and compliant with safety standards",
        "Helped reduce queue times during peak periods by supporting additional tills",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Customer service experience (essential)",
        "Confidence with basic maths and cash handling",
        "Retail or sales training (optional)",
        "GCSEs including English & Maths (helpful but not always required)",
      ]}
      tipsTitle="How to Make Your Sales Assistant CV Stand Out"
      tips={[
        "Include measurable results if possible (sales targets, upsell rates, customer feedback)",
        "Mention busy periods you handled successfully (weekends, promotions, Christmas)",
        "Show trust and responsibility (opening/closing duties, keyholder support)",
        "Highlight product knowledge and confidence speaking with customers",
        "Include POS systems or tools you’ve used",
        "Keep bullet points focused on outcomes and customer impact",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Sales Assistant CV Mistakes to Avoid"
      mistakes={[
        "Not including any sales numbers or targets",
        "Listing generic duties without showing impact on sales or customer experience",
        "Forgetting to mention tills/POS systems",
        "Not showing flexibility for evenings/weekends",
        "Writing long paragraphs instead of short, results-focused bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a sales assistant CV?",
          a: "Include customer service, upselling, cash handling, working to sales targets, product knowledge, teamwork, and maintaining store standards.",
        },
        {
          q: "How long should a sales assistant CV be in the UK?",
          a: "1 page is ideal for most candidates. Two pages is acceptable if you have extensive retail experience or supervisory responsibility.",
        },
        {
          q: "How do I write a sales assistant CV with no experience?",
          a: "Focus on communication skills, confidence, reliability, teamwork, and any experience dealing with people (school, volunteering, hospitality). Show willingness to learn and work flexible shifts.",
        },
        {
          q: "Should I include sales targets on my CV?",
          a: "Yes. Employers value measurable performance. If you’ve supported or exceeded targets, include numbers to strengthen your CV.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV Example (UK)" },
        { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/receptionist-cv-example-uk", label: "Receptionist CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Sales Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly sales assistant CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Sales Assistant CV Now"
      ctaHref="/cv"
    />
  );
}