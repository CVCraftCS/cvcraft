import CvExamplePage from "../../components/CvExamplePage";

export default function ReceptionistCvExampleUk() {
  const title =
    "Receptionist CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional receptionist CV example for the UK (2026). Includes a personal statement example, key receptionist skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/receptionist-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Receptionist CV Example (UK 2026) + Free Receptionist CV Template"
      intro="A strong receptionist CV shows communication, organisation, and professionalism. UK employers look for someone who can manage calls, greet visitors, handle bookings, and keep admin tasks running smoothly.\n\nReceptionist CV template (UK format): keep it simple — contact details, a short personal statement, key skills, bullet-point experience, and qualifications. If you’ve used booking systems, switchboards, Outlook/Google Workspace, or CRM tools, mention them clearly."
      profileTitle="Example Personal Statement for a Receptionist CV"
      profileText="Professional and approachable Receptionist with 3+ years’ experience in busy front-desk roles. Skilled in call handling, diary management, visitor check-in, and supporting general administration. Known for staying calm under pressure, maintaining confidentiality, and delivering a friendly, efficient customer experience."
      skillsTitle="Key Skills for a Receptionist CV (UK)"
      skills={[
        "Front-desk customer service and visitor management",
        "Call handling, message taking and call transfers",
        "Diary and appointment booking",
        "Email inbox management and admin support",
        "Visitor sign-in and access procedures",
        "Organisation and prioritising tasks",
        "Confidentiality, GDPR awareness and professionalism",
        "Microsoft Office / Google Workspace",
        "Accurate data entry and record updates",
        "Handling complaints and de-escalation (calm communication)",
      ]}
      jobTitle="Receptionist — Parkview Medical Centre"
      jobMeta="Birmingham | 2022 – Present"
      bullets={[
        "Managed a busy reception desk, greeting visitors and handling high call volumes professionally",
        "Booked appointments accurately, updated records, and supported smooth daily schedules",
        "Handled admin tasks including email replies, filing, and data entry with strong attention to detail",
        "De-escalated difficult situations calmly and directed queries to the correct team member",
        "Maintained confidentiality and followed privacy procedures when handling sensitive information",
        "Supported team coordination by prioritising urgent queries and keeping stakeholders informed",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "GCSEs including English & Maths (helpful for admin roles)",
        "Customer service training (optional)",
        "Admin / reception experience (often most important)",
        "DBS check (if required by employer, e.g. schools/medical settings)",
      ]}
      tipsTitle="How to Make Your Receptionist CV Stand Out"
      tips={[
        "Mention systems you’ve used (booking systems, switchboard, Outlook, CRM) if relevant",
        "Add numbers where possible: calls per day, visitors checked in, appointments booked",
        "Show reliability: punctuality, shift cover, handling busy periods",
        "Highlight calm communication and confidentiality (especially GP / medical / school roles)",
        "Keep bullets focused on outcomes: speed, accuracy, customer experience",
        "Include ‘GDPR/confidentiality’ if you worked with sensitive information",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES (ranking fuel)
      ========================== */
      mistakesTitle="Common Receptionist CV Mistakes to Avoid"
      mistakes={[
        "Not mentioning call handling, switchboard, or booking/diary systems (these are core to the role)",
        "Using generic statements like “good communication” without examples (add outcomes and numbers)",
        "Forgetting confidentiality/GDPR language (especially in medical, schools, or legal settings)",
        "Writing long paragraphs instead of scannable bullet points",
        "Leaving gaps unexplained — keep dates clear and simple",
      ]}

      /* =========================
         ✅ NEW: FAQ (covers long-tail intent)
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a receptionist CV?",
          a: "Include call handling, diary/appointment booking, customer service, email management, organisation, data entry, and confidence using Office/Google Workspace. Add confidentiality/GDPR awareness if you handled sensitive information.",
        },
        {
          q: "How long should a receptionist CV be in the UK?",
          a: "Aim for 1 page if you’re entry-level or have under 3–4 years’ experience. Two pages is fine if you have strong experience, but keep it easy to scan with short bullets.",
        },
        {
          q: "How do I write a receptionist CV with no experience?",
          a: "Focus on transferable skills: communication, organisation, reliability, customer service, and confidence on the phone. Use examples from retail, hospitality, volunteering, or school/college responsibilities that show you can handle people and admin tasks.",
        },
        {
          q: "Should I mention systems like Outlook or booking software?",
          a: "Yes. If you’ve used Outlook, Google Calendar, switchboards, CRM tools, or booking/appointment systems, list them clearly — it helps employers match you to the role quickly.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS CLUSTER
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/admin-assistant-cv-example-uk", label: "Admin Assistant CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/sales-assistant-cv-example-uk", label: "Sales Assistant CV Example (UK)" },
        { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Receptionist CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly receptionist CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Receptionist CV Now"
      ctaHref="/cv"
    />
  );
}