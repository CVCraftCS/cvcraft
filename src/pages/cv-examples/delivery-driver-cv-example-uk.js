import CvExamplePage from "../../components/CvExamplePage";

export default function DeliveryDriverCvExampleUk() {
  const title =
    "Delivery Driver CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Delivery Driver CV example for the UK (2026). Includes a personal statement, key driving skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/delivery-driver-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Delivery Driver CV Example (UK 2026) + Free Delivery Driver CV Template"
      intro="A strong delivery driver CV shows reliability, safe driving habits, route efficiency, and customer service. UK employers want proof you can complete multi-drop routes on time, handle parcels carefully, and represent the company professionally.\n\nDelivery Driver CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and driving qualifications. Use numbers wherever possible — drops per day, on-time delivery rate, customer feedback."
      profileTitle="Example Personal Statement for a Delivery Driver CV"
      profileText="Reliable and safety-focused Delivery Driver with 3+ years’ experience completing multi-drop routes across urban and residential areas. Strong knowledge of route planning, proof-of-delivery systems, and customer service. Consistently meets delivery targets while maintaining excellent safety standards, daily vehicle checks, and professional conduct."
      skillsTitle="Key Skills for a Delivery Driver CV (UK)"
      skills={[
        "Multi-drop delivery and route planning",
        "Safe driving and vehicle safety checks",
        "Time management and meeting delivery windows",
        "Proof of delivery (POD) apps / handheld scanners",
        "Customer service and professional communication",
        "Loading, unloading and safe parcel handling",
        "Basic vehicle maintenance checks",
        "Problem solving (missed addresses / re-delivery)",
        "Knowledge of UK road regulations and DVLA compliance",
        "Using sat-nav and route optimisation tools",
      ]}
      jobTitle="Delivery Driver — Rapid Logistics"
      jobMeta="Birmingham | 2022 – Present"
      bullets={[
        "Completed 60–90 drops per day while meeting strict delivery windows and KPIs",
        "Used POD app to capture signatures/photos and update delivery status in real time",
        "Performed daily vehicle checks (tyres, fluids, lights) and reported faults promptly",
        "Maintained excellent customer feedback through polite, professional doorstep service",
        "Managed route changes and traffic delays using sat-nav and local route knowledge",
        "Loaded and secured parcels safely to prevent damage in transit",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Full UK Driving Licence (Category B)",
        "Clean driving record (if applicable)",
        "Basic Health & Safety / Manual Handling training",
        "Van driving experience (if applicable)",
      ]}
      tipsTitle="How to Make Your Delivery Driver CV Stand Out"
      tips={[
        "Add numbers: drops per day, on-time delivery rate, customer rating if available",
        "Mention vehicle types driven (small van, LWB, refrigerated, etc.)",
        "Highlight safety: daily checks, accident-free record, compliance",
        "Show reliability: early starts, weekend shifts, flexible routes",
        "Mention knowledge of local areas or route optimisation tools",
        "Keep bullets focused on performance and outcomes, not just duties",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Delivery Driver CV Mistakes to Avoid"
      mistakes={[
        "Not clearly stating your driving licence type",
        "Forgetting to mention multi-drop experience",
        "Listing duties without numbers (drops per day, delivery windows, KPIs)",
        "Ignoring safety and vehicle checks",
        "Writing long paragraphs instead of short, practical bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a delivery driver CV?",
          a: "Include multi-drop delivery, safe driving, route planning, proof-of-delivery systems, customer service, time management, and vehicle safety checks.",
        },
        {
          q: "Do I need a clean driving record for delivery jobs in the UK?",
          a: "Many employers prefer a clean or low-point licence. If your record is clean, state it clearly. Always mention your licence category (usually Category B for vans).",
        },
        {
          q: "How long should a delivery driver CV be?",
          a: "1 page is ideal for most candidates. Two pages is acceptable if you have extensive driving experience or specialist licences.",
        },
        {
          q: "Should I include number of drops per day on my CV?",
          a: "Yes. Including drops per day, on-time rates, or customer ratings strengthens your CV and shows performance.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV Example (UK)" },
        { href: "/cv-examples/construction-labourer-cv-example-uk", label: "Construction Labourer CV Example (UK)" },
        { href: "/cv-examples/security-guard-cv-example-uk", label: "Security Guard CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Delivery Driver CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly delivery driver CV in minutes. Pick a clean template, add your experience and skills, and download as a polished PDF."
      ctaButton="Build Your Delivery Driver CV Now"
      ctaHref="/cv"
    />
  );
}