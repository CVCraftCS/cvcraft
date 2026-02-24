import CvExamplePage from "../../components/CvExamplePage";

export default function CustomerServiceCvExampleUk() {
  const title =
    "Customer Service CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Customer Service CV example for the UK (2026). Includes a personal statement, key skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/customer-service-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Customer Service CV Example (UK 2026) + Free Customer Service CV Template"
      intro="A strong customer service CV shows calm communication, problem solving, and reliability. UK employers want proof you can handle customers professionally, resolve issues efficiently, and work to targets or KPIs.\n\nCustomer Service CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and relevant qualifications. Use measurable results where possible — calls per day, CSAT %, resolution times."
      profileTitle="Example Personal Statement for a Customer Service CV"
      profileText="Professional and approachable Customer Service Advisor with 4+ years’ experience in retail and contact centre environments. Skilled in handling complaints calmly, resolving issues quickly, and maintaining high customer satisfaction. Confident using CRM systems, documenting outcomes accurately, and working towards daily performance targets."
      skillsTitle="Key Skills for a Customer Service CV (UK)"
      skills={[
        "Communication and active listening",
        "Complaint handling and de-escalation",
        "Problem solving and resolution focus",
        "Empathy, patience and professionalism",
        "Working to KPIs (CSAT, AHT, FCR)",
        "Accurate admin and note taking",
        "CRM systems and ticketing tools",
        "Teamwork and reliability under pressure",
        "Email and live chat support",
        "Data protection and GDPR awareness",
      ]}
      jobTitle="Customer Service Advisor — CityConnect Support"
      jobMeta="Birmingham | 2021 – Present"
      bullets={[
        "Handled 60+ inbound customer calls per day across billing, delivery and account queries",
        "Maintained customer satisfaction (CSAT) above 95% through clear, calm communication",
        "Resolved complaints and processed refunds efficiently, escalating complex cases when required",
        "Updated CRM records accurately after each interaction (notes, outcomes, next steps)",
        "Worked to daily and weekly targets for quality, resolution and call handling performance",
        "Supported live chat and email enquiries during peak periods",
      ]}
      qualificationsTitle="Qualifications & Training (Helpful for UK Roles)"
      qualifications={[
        "GCSEs including English & Maths (common requirement)",
        "Customer service training / induction (if applicable)",
        "CRM system experience (valuable — name it if you can)",
        "Any regulated training (finance/energy/telecoms) if relevant",
      ]}
      tipsTitle="How to Make Your Customer Service CV Stand Out"
      tips={[
        "Add numbers: calls per day, CSAT %, first contact resolution, complaint turnaround time",
        "Show the environment: call centre, retail, reception/front desk, online support, live chat",
        "Include systems/tools: CRM, ticketing tools, knowledge base, Microsoft Office/Google Workspace",
        "Use calm, positive wording that shows professionalism under pressure",
        "Keep bullets outcome-led (resolved, improved, reduced, maintained) instead of duties-only",
        "Mention GDPR or data protection awareness where relevant",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Customer Service CV Mistakes to Avoid"
      mistakes={[
        "Listing generic duties without measurable results",
        "Not mentioning KPIs or performance metrics",
        "Forgetting to include CRM or system experience",
        "Using negative or emotional wording about difficult customers",
        "Writing long paragraphs instead of short, clear bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I include on a customer service CV?",
          a: "Include communication, active listening, complaint handling, problem solving, working to KPIs, CRM systems, teamwork, and professionalism under pressure.",
        },
        {
          q: "How long should a customer service CV be in the UK?",
          a: "1 page is ideal for most applicants. Two pages is acceptable if you have several years of experience or team leadership responsibility.",
        },
        {
          q: "How do I write a customer service CV with no experience?",
          a: "Focus on transferable skills like communication, teamwork, problem solving, and reliability. Include school projects, volunteering, hospitality, or retail roles that involved helping people.",
        },
        {
          q: "Should I include KPIs on my CV?",
          a: "Yes. Employers value measurable performance such as CSAT scores, call volumes, first contact resolution, or quality scores.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV Example (UK)" },
        { href: "/cv-examples/sales-assistant-cv-example-uk", label: "Sales Assistant CV Example (UK)" },
        { href: "/cv-examples/receptionist-cv-example-uk", label: "Receptionist CV Example (UK)" },
        { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Customer Service CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly customer service CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Customer Service CV Now"
      ctaHref="/cv"
    />
  );
}