import CvExamplePage from "../../components/CvExamplePage";

export default function CleanerCvExampleUk() {
  const title =
    "Cleaner CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Cleaner CV example for the UK (2026). Includes a personal statement, key skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/cleaner-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Cleaner CV Example (UK 2026) + Free Cleaner CV Template"
      intro="A strong cleaner CV shows reliability, attention to detail and safe handling of cleaning products. UK employers want proof you can follow checklists, maintain hygiene standards and work efficiently with minimal supervision.\n\nCleaner CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and relevant training (COSHH, manual handling, health & safety, DBS if required). Keep it clear and easy to scan."
      profileTitle="Example Personal Statement for a Cleaner CV"
      profileText="Reliable and detail-focused Cleaner with 3+ years’ experience maintaining offices, commercial premises and communal areas. Confident using cleaning equipment and chemicals safely (COSHH awareness), following structured checklists and delivering consistently high hygiene standards. Trusted for punctuality, discretion and completing tasks independently to deadline."
      skillsTitle="Key Skills to Include on a Cleaner CV (UK)"
      skills={[
        "Commercial and office cleaning",
        "Deep cleaning and sanitising",
        "Safe chemical handling (COSHH awareness)",
        "Mopping, vacuuming, dusting and polishing",
        "Cleaning checklists and quality standards",
        "Time management and working independently",
        "Waste disposal and recycling procedures",
        "Reporting maintenance or safety issues",
        "Infection control procedures (if applicable)",
        "Working early mornings, evenings or split shifts",
      ]}
      jobTitle="Cleaner — CityClean Services"
      jobMeta="Leeds | 2022 – Present"
      bullets={[
        "Cleaned offices, toilets and communal areas to company standards each shift",
        "Followed structured cleaning checklists and reported stock shortages",
        "Handled cleaning chemicals safely and stored equipment correctly",
        "Maintained excellent attendance and punctuality across early-morning shifts",
        "Ensured high hygiene standards in line with health and safety policies",
        "Reported maintenance issues promptly to supervisors",
      ]}
      qualificationsTitle="Qualifications & Training (Helpful in the UK)"
      qualifications={[
        "COSHH / chemical safety awareness training",
        "Manual handling training",
        "Health & safety awareness",
        "DBS check (if working in schools or healthcare settings)",
      ]}
      tipsTitle="How to Make Your Cleaner CV Stand Out"
      tips={[
        "Mention the type of site you cleaned (offices, schools, healthcare, retail, industrial)",
        "Highlight reliability and consistent attendance",
        "Show awareness of health & safety and chemical handling",
        "Include infection control or deep cleaning experience if relevant",
        "Use short bullet points to make responsibilities easy to scan",
        "Demonstrate independence and ability to work without supervision",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Cleaner CV Mistakes to Avoid"
      mistakes={[
        "Not mentioning COSHH or chemical safety awareness",
        "Being vague about cleaning environments (specify office, school, healthcare, etc.)",
        "Listing duties without showing reliability or independence",
        "Forgetting to mention shift flexibility",
        "Using long paragraphs instead of short, practical bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I include on a cleaner CV?",
          a: "Include commercial cleaning, safe chemical handling (COSHH), attention to detail, time management, hygiene standards, and the ability to work independently.",
        },
        {
          q: "Do I need qualifications to be a cleaner in the UK?",
          a: "Formal qualifications are not always required, but COSHH, manual handling, and health & safety training are highly valued. A DBS may be required for schools or healthcare settings.",
        },
        {
          q: "How long should a cleaner CV be?",
          a: "1 page is ideal for most cleaner roles. Keep it clear, practical, and easy to scan.",
        },
        {
          q: "How do I write a cleaner CV with no experience?",
          a: "Focus on reliability, attention to detail, time management, and any relevant experience such as housekeeping, volunteering, or maintaining organised spaces.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV Example (UK)" },
        { href: "/cv-examples/construction-labourer-cv-example-uk", label: "Construction Labourer CV Example (UK)" },
        { href: "/cv-examples/care-assistant-cv-example-uk", label: "Care Assistant CV Example (UK)" },
        { href: "/cv-examples/support-worker-cv-example-uk", label: "Support Worker CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Cleaner CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly cleaner CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Cleaner CV Now"
      ctaHref="/cv"
    />
  );
}