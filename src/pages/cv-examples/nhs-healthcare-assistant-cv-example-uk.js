import CvExamplePage from "../../components/CvExamplePage";

export default function NhsHealthcareAssistantCvExampleUk() {
  const title =
    "NHS Healthcare Assistant CV Example UK (2026) | HCA Skills, Duties & Template | CVCraft Classroom";

  const description =
    "Write a strong NHS Healthcare Assistant (HCA) CV for UK roles. Includes a personal statement, key HCA skills, NHS-style job duties, mistakes to avoid, FAQs, and a free CV template.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/nhs-healthcare-assistant-cv-example-uk";

  const relatedLinks = [
    {
      href: "/cv-examples/care-assistant-cv-example-uk",
      label: "Care Assistant CV Example (UK)",
    },
    {
      href: "/cv-examples/support-worker-cv-example-uk",
      label: "Support Worker CV Example (UK)",
    },
    {
      href: "/cv-examples/customer-service-cv-example-uk",
      label: "Customer Service CV Example (UK)",
    },
    {
      href: "/cv-examples/cleaner-cv-example-uk",
      label: "Cleaner CV Example (UK)",
    },
    {
      href: "/cv-examples/no-experience-cv-example-uk",
      label: "No Experience CV Example (UK)",
    },
  ];

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="NHS Healthcare Assistant CV Example (UK 2026) + HCA CV Template"
      intro="A strong NHS Healthcare Assistant (HCA) CV shows compassion, patient safety, and reliability. NHS employers look for people who can support nurses, follow care plans, maintain dignity and privacy, and keep accurate notes.\n\nHCA CV template (UK): contact details, short personal statement, key skills (personal care, observations, infection control), experience with bullet points, training (Care Certificate, moving & handling, basic life support), and DBS status."

      profileTitle="Example Personal Statement for an NHS Healthcare Assistant CV"
      profileText="Compassionate and dependable Healthcare Assistant with 3+ years’ experience supporting patients on busy ward and community settings. Skilled in personal care, infection prevention, assisting with mobility, and taking basic observations (where trained). Known for maintaining dignity and confidentiality, following care plans accurately, and communicating clearly with nurses, patients and families."

      skillsTitle="Key Skills for an NHS Healthcare Assistant CV (UK)"
      skills={[
        "Personal care (washing, dressing, toileting) with dignity and privacy",
        "Supporting mobility, repositioning and safe transfers (moving & handling)",
        "Basic observations (BP, pulse, temperature) where trained",
        "Infection prevention and control (IPC) and hygiene standards",
        "Accurate record keeping and clear handovers",
        "Safeguarding awareness and escalation procedures",
        "Calm communication with patients, families and staff",
        "Teamwork on shift (supporting nurses and multidisciplinary teams)",
        "Understanding of confidentiality and professional boundaries",
        "Time management in fast-paced care environments",
      ]}

      jobTitle="Healthcare Assistant — NHS Ward Support"
      jobMeta="Leicester | 2022 – Present"
      bullets={[
        "Supported patients with personal care needs while maintaining dignity, privacy and respect",
        "Assisted with mobility, repositioning and safe transfers in line with moving & handling procedures",
        "Completed routine observations where trained and escalated concerns promptly to nursing staff",
        "Maintained infection control standards including hand hygiene, PPE use and cleaning protocols",
        "Recorded care notes accurately and contributed to clear, structured handovers between shifts",
        "Supported meal times, hydration prompts and patient comfort checks during busy periods",
      ]}

      qualificationsTitle="Qualifications & Training (Helpful for NHS/UK Roles)"
      qualifications={[
        "Care Certificate (highly valuable if completed)",
        "Moving & Handling training",
        "Infection Prevention & Control (IPC) training",
        "Basic Life Support (BLS) / First Aid (helpful)",
        "Safeguarding Adults/Children training (as applicable)",
        "Enhanced DBS check (required for most roles)",
      ]}

      tipsTitle="How to Make Your NHS HCA CV Stand Out"
      tips={[
        "Mention settings you’ve worked in (wards, dementia care, community, GP, supported living)",
        "Show patient safety language: dignity, confidentiality, infection control, escalation",
        "Include training clearly (Care Certificate, moving & handling, safeguarding, BLS)",
        "Use outcome-led bullets: comfort, wellbeing, safety, accurate documentation",
        "Keep it calm and professional — NHS hiring loves clear, structured wording",
        "If you’ve supported observations, state ‘where trained’ to stay accurate",
      ]}

      mistakesTitle="Common NHS Healthcare Assistant CV Mistakes to Avoid"
      mistakes={[
        "Not mentioning infection control (IPC) or hygiene standards",
        "Missing safeguarding language (critical in care roles)",
        "Writing only duties without showing patient safety/outcomes",
        "Not listing training clearly (Care Certificate, moving & handling, DBS)",
        "Using vague wording like “helped patients” without specifics (mobility, personal care, notes)",
      ]}

      faqItems={[
        {
          q: "What should I put on an NHS Healthcare Assistant CV?",
          a: "Include personal care support, moving & handling, infection control, record keeping, handovers, communication skills, and any training (Care Certificate, safeguarding, BLS). If you have DBS, list it clearly.",
        },
        {
          q: "How long should an NHS HCA CV be in the UK?",
          a: "Usually 1–2 pages. Keep it structured with a short profile, skills list, and bullet-point experience. Make training easy to find.",
        },
        {
          q: "Do I need the Care Certificate on my CV?",
          a: "If you have it, yes — list it clearly under Qualifications/Training. If you don’t, you can still apply, but mention willingness to complete training and highlight relevant care experience.",
        },
        {
          q: "How do I write an HCA CV with no experience?",
          a: "Focus on transferable skills: empathy, patience, reliability, communication, and following procedures. Use examples from retail/customer service, volunteering, caring responsibilities, or school/work placements, and emphasise professionalism and willingness to learn.",
        },
      ]}

      relatedLinksTitle="Related CV Examples"
      relatedLinks={relatedLinks}

      ctaTitle="Create Your Own NHS Healthcare Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly HCA CV in minutes. Choose a clean template, add your experience and training, and download a polished PDF."
      ctaButton="Build Your HCA CV Now"
      ctaHref="/cv"
    />
  );
}