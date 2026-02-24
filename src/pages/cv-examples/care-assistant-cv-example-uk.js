import CvExamplePage from "../../components/CvExamplePage";

export default function CareAssistantCvExampleUk() {
  const title =
    "Care Assistant CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Care Assistant CV example for the UK (2026). Includes a personal statement, key skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/care-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Care Assistant CV Example (UK 2026) + Free Care Assistant CV Template"
      intro="A strong care assistant CV shows compassion, reliability and safeguarding awareness. UK employers want someone who can provide respectful personal care, keep accurate notes, work as part of a team and maintain dignity at all times.\n\nCare Assistant CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and qualifications/training (manual handling, safeguarding, first aid). Clearly mention the type of care setting you’ve worked in (care home, dementia unit, domiciliary care, supported living)."
      profileTitle="Example Personal Statement for a Care Assistant CV"
      profileText="Compassionate and reliable Care Assistant with 3+ years’ experience supporting elderly residents in residential care settings. Skilled in personal care, mobility support, medication assistance (under supervision), safeguarding and accurate care documentation. Known for building trust with residents and families while maintaining dignity, safety and wellbeing."
      skillsTitle="Key Skills to Include on a Care Assistant CV (UK)"
      skills={[
        "Personal care and hygiene support",
        "Medication support (as trained / supervised)",
        "Safeguarding awareness and reporting procedures",
        "Manual handling and mobility support",
        "Dementia and memory-care awareness",
        "Care plans and daily notes (record keeping)",
        "Communication with families and colleagues",
        "Teamwork, patience and reliability",
        "Supporting emotional wellbeing and independence",
        "Working flexible shifts (including nights/weekends if applicable)",
      ]}
      jobTitle="Care Assistant — Sunrise Residential Home"
      jobMeta="Manchester | 2022 – Present"
      bullets={[
        "Provided daily personal care support to residents with dignity and respect",
        "Supported mobility and assisted with safe manual handling techniques",
        "Assisted with medication routines in line with training and supervision",
        "Maintained accurate care notes and reported changes to senior staff",
        "Built positive relationships with residents and supported emotional wellbeing",
        "Worked closely with nurses and senior carers to ensure person-centred care plans were followed",
      ]}
      qualificationsTitle="Qualifications & Training (Helpful in the UK)"
      qualifications={[
        "Level 2 Diploma in Health and Social Care (helpful, not always required)",
        "First Aid certification (if applicable)",
        "Manual handling training (commonly expected)",
        "Safeguarding training (commonly expected)",
        "Enhanced DBS check (required for most roles)",
      ]}
      tipsTitle="How to Make Your Care Assistant CV Stand Out"
      tips={[
        "Mention the type of care setting (care home, dementia unit, domiciliary, supported living)",
        "Use clear, respectful language that shows dignity and compassion",
        "Highlight safeguarding awareness and accurate record keeping",
        "Show reliability: shift work, teamwork, and calm handling of difficult situations",
        "Include any specialist areas (dementia care, palliative care, learning disabilities)",
        "Keep it easy to scan: short bullets, no long paragraphs",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Care Assistant CV Mistakes to Avoid"
      mistakes={[
        "Not mentioning safeguarding at all (it’s essential in UK care roles)",
        "Being vague about care tasks — clearly state personal care, mobility, medication support if accurate",
        "Forgetting to include manual handling or relevant training",
        "Using informal language instead of respectful, professional wording",
        "Listing duties only without showing reliability, teamwork, or person-centred care",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a care assistant CV?",
          a: "Include personal care, safeguarding awareness, manual handling, medication support (if trained), communication, teamwork, and accurate record keeping. Mention the care setting you’ve worked in and any specialist experience such as dementia care.",
        },
        {
          q: "Do you need qualifications to be a care assistant in the UK?",
          a: "Not always. Many employers provide training. However, a Level 2 Health and Social Care qualification can help. An enhanced DBS check and safeguarding training are typically required.",
        },
        {
          q: "How do I write a care assistant CV with no experience?",
          a: "Focus on transferable skills such as compassion, reliability, patience, and communication. Include volunteering, caring for family members, customer service, or teamwork examples. Show willingness to complete training and obtain a DBS check.",
        },
        {
          q: "Should I mention an Enhanced DBS on my CV?",
          a: "Yes. If you have an Enhanced DBS (or it is in progress), clearly state it in your qualifications section. It reassures employers and speeds up recruitment decisions.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/support-worker-cv-example-uk", label: "Support Worker CV Example (UK)" },
        { href: "/cv-examples/teaching-assistant-cv-example-uk", label: "Teaching Assistant CV Example (UK)" },
        { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV Example (UK)" },
        { href: "/cv-examples/security-guard-cv-example-uk", label: "Security Guard CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Care Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-ready care assistant CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Care Assistant CV Now"
      ctaHref="/cv"
    />
  );
}