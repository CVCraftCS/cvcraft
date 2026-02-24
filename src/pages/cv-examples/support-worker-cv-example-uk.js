import CvExamplePage from "../../components/CvExamplePage";

export default function SupportWorkerCvExampleUk() {
  const title =
    "Support Worker CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Support Worker CV example for the UK (2026). Includes a personal statement, key skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/support-worker-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Support Worker CV Example (UK 2026) + Free Support Worker CV Template"
      intro="A strong UK support worker CV should demonstrate empathy, safeguarding awareness, and the ability to support individuals with daily living. Employers look for reliability, accurate documentation, calm communication, and a clear understanding of person-centred care.\n\nSupport Worker CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and relevant training (Care Certificate, safeguarding, medication, DBS). Clearly state the type of setting you’ve worked in (supported living, residential care, outreach, mental health, learning disabilities)."
      profileTitle="Example Personal Statement for a Support Worker CV"
      profileText="Compassionate and dependable Support Worker with 3+ years’ experience supporting adults with learning disabilities and complex needs. Skilled in person-centred care, daily living support, safeguarding procedures, and accurate record keeping. Known for building trust, promoting independence, and remaining calm under pressure."
      skillsTitle="Key Skills for a Support Worker CV (UK)"
      skills={[
        "Person-centred care and support planning",
        "Daily living support (meals, hygiene, routines)",
        "Safeguarding awareness and reporting procedures",
        "Medication support (where trained)",
        "Accurate record keeping and shift handovers",
        "De-escalation and calm communication",
        "Encouraging independence and life skills development",
        "Teamwork and multi-agency collaboration",
        "Behaviour support strategies (where applicable)",
        "Working flexible shifts (including nights/weekends if relevant)",
      ]}
      jobTitle="Support Worker — BrightPath Supported Living"
      jobMeta="Liverpool | 2022 – Present"
      bullets={[
        "Supported service users with daily routines while promoting independence and dignity",
        "Recorded detailed care notes and completed clear shift handovers",
        "Followed safeguarding procedures and reported concerns appropriately",
        "Assisted with medication support in line with training and company policies",
        "Worked collaboratively across shifts to ensure consistent, high-quality support",
        "Encouraged participation in community activities and life skills development",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Care Certificate (if applicable)",
        "Level 2/3 Health & Social Care (helpful for progression)",
        "First Aid training",
        "Medication administration training (if applicable)",
        "Enhanced DBS check (required for most roles)",
      ]}
      tipsTitle="How to Make Your Support Worker CV Stand Out"
      tips={[
        "Highlight the type of setting you’ve worked in (supported living, residential care, outreach, mental health)",
        "Mention specific responsibilities such as medication support or behaviour management",
        "Show safeguarding awareness clearly — this is critical in care roles",
        "Demonstrate empathy and professionalism through your wording",
        "Include shift patterns or flexibility if relevant (nights, weekends, bank work)",
        "Keep bullet points focused on outcomes: independence, wellbeing, safety, documentation",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Support Worker CV Mistakes to Avoid"
      mistakes={[
        "Not mentioning safeguarding at all (essential in UK care roles)",
        "Being vague about the care setting (specify supported living, residential, outreach, etc.)",
        "Listing duties without showing person-centred care or independence support",
        "Forgetting to include DBS status or key training",
        "Using long paragraphs instead of clear, scannable bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a support worker CV?",
          a: "Include person-centred care, safeguarding awareness, daily living support, medication assistance (if trained), communication, de-escalation, teamwork, and accurate record keeping.",
        },
        {
          q: "Do you need qualifications to be a support worker in the UK?",
          a: "Not always. Many employers provide training. However, the Care Certificate and a Level 2/3 Health & Social Care qualification can help with progression. An enhanced DBS check is typically required.",
        },
        {
          q: "How do I write a support worker CV with no experience?",
          a: "Focus on transferable skills such as empathy, patience, communication, and reliability. Include volunteering, caring for family members, or roles where you supported others. Show willingness to complete training and obtain a DBS check.",
        },
        {
          q: "Should I include DBS status on my support worker CV?",
          a: "Yes. If you have an Enhanced DBS (or it is in progress), clearly state it in your qualifications section. It reassures employers and speeds up hiring decisions.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/care-assistant-cv-example-uk", label: "Care Assistant CV Example (UK)" },
        { href: "/cv-examples/teaching-assistant-cv-example-uk", label: "Teaching Assistant CV Example (UK)" },
        { href: "/cv-examples/security-guard-cv-example-uk", label: "Security Guard CV Example (UK)" },
        { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Support Worker CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly support worker CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Support Worker CV Now"
      ctaHref="/cv"
    />
  );
}