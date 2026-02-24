import CvExamplePage from "../../components/CvExamplePage";

export default function AdminAssistantCvExampleUk() {
  const title =
    "Admin Assistant CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Admin Assistant CV example for the UK (2026). Includes a personal statement, key skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/admin-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}

      /* =========================
         PAGE HEADER
      ========================== */
      h1="Admin Assistant CV Example (UK 2026) + Free Admin CV Template"

      intro="Writing an admin assistant CV in the UK requires clarity, organisation, and strong attention to detail. Employers want someone reliable who can manage records, support teams, and keep operations running smoothly.\n\nAdmin Assistant CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and relevant qualifications. Use measurable improvements where possible (time saved, accuracy improved, inbox volumes handled)."

      /* =========================
         PROFILE SECTION
      ========================== */
      profileTitle="Example Personal Statement for an Admin Assistant CV"

      profileText="Organised and detail-focused Admin Assistant with over 3 years’ experience supporting office operations in fast-paced environments. Skilled in data entry, document control, inbox management, scheduling and customer communication. Known for accuracy, reliability and maintaining structured systems that improve team efficiency."

      /* =========================
         SKILLS SECTION
      ========================== */
      skillsTitle="Key Skills to Include on an Admin Assistant CV (UK)"

      skills={[
        "Accurate data entry and record management",
        "Document filing and digital organisation",
        "Email and inbox management",
        "Diary management and scheduling",
        "Professional phone handling",
        "Microsoft Office (Word, Excel, Outlook)",
        "Google Workspace familiarity",
        "Task prioritisation and deadline management",
        "Minute taking and meeting coordination",
        "Data protection and GDPR awareness",
      ]}

      /* =========================
         EXPERIENCE SECTION
      ========================== */
      jobTitle="Admin Assistant — Westgate Services"

      jobMeta="Glasgow | 2022 – Present"

      bullets={[
        "Maintained accurate client records across internal databases",
        "Managed shared inbox and responded to enquiries within SLA targets",
        "Prepared documents, reports and meeting minutes for senior staff",
        "Handled incoming calls and directed queries efficiently",
        "Improved filing systems which reduced document retrieval time by 20%",
        "Supported scheduling of meetings and maintained team calendars",
      ]}

      /* =========================
         QUALIFICATIONS SECTION
      ========================== */
      qualificationsTitle="Qualifications & Requirements (Typical UK Expectations)"

      qualifications={[
        "GCSEs including English and Maths",
        "Level 2 or Level 3 Business Administration (advantageous)",
        "Strong working knowledge of Microsoft Office",
        "Good written and verbal communication skills",
      ]}

      /* =========================
         EXTRA VALUE SECTION
      ========================== */
      tipsTitle="How to Make Your Admin CV Stand Out"

      tips={[
        "Keep formatting clean and structured — admin roles require organisation",
        "Highlight accuracy and attention to detail",
        "Mention measurable improvements where possible (time saved, errors reduced)",
        "Include systems you’ve used (CRM, spreadsheets, booking systems)",
        "Use bullet points instead of long paragraphs",
        "Keep your CV to 1–2 pages maximum",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Admin Assistant CV Mistakes to Avoid"

      mistakes={[
        "Being too vague about responsibilities (specify systems and tools used)",
        "Not showing measurable impact (time saved, accuracy improved)",
        "Forgetting to mention Microsoft Office or key software skills",
        "Writing long paragraphs instead of structured bullet points",
        "Poor formatting or inconsistent layout (important in admin roles)",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I include on an admin assistant CV?",
          a: "Include data entry, organisation, Microsoft Office, inbox management, scheduling, communication, accuracy, and task prioritisation.",
        },
        {
          q: "How long should an admin CV be in the UK?",
          a: "1 page is ideal for junior roles. Two pages is acceptable if you have several years of office experience.",
        },
        {
          q: "How do I write an admin CV with no experience?",
          a: "Focus on transferable skills such as organisation, time management, communication, IT skills, and any school, volunteering or part-time roles where you handled responsibility.",
        },
        {
          q: "Should I list Microsoft Office on my CV?",
          a: "Yes. Admin roles almost always require Microsoft Office or Google Workspace skills. Be specific (Word, Excel, Outlook).",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"

      relatedLinks={[
        { href: "/cv-examples/receptionist-cv-example-uk", label: "Receptionist CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/sales-assistant-cv-example-uk", label: "Sales Assistant CV Example (UK)" },
        { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      /* =========================
         CALL TO ACTION
      ========================== */
      ctaTitle="Create Your Own Admin Assistant CV"

      ctaBody="Use our UK CV builder to create a recruiter-ready admin CV in minutes. Choose a clean template, customise your sections, and download a polished PDF instantly."

      ctaButton="Build Your Admin Assistant CV Now"

      ctaHref="/cv"
    />
  );
}