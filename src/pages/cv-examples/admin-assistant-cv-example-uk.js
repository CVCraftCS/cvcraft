import CvExamplePage from "../../components/CvExamplePage";

export default function AdminAssistantCvExampleUk() {
  const title =
    "Admin Assistant CV Example UK (2026 Guide) | Free Template & Skills | CVCraft Classroom";

  const description =
    "See a professional Admin Assistant CV example for the UK. Includes skills, profile example, responsibilities, formatting tips and a free CV builder to create your own.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/admin-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}

      /* =========================
         PAGE HEADER
      ========================== */
      h1="Admin Assistant CV Example (UK 2026 Guide)"

      intro="Writing an admin assistant CV in the UK requires clarity, organisation, and strong attention to detail. Employers want someone reliable who can manage records, support teams, and keep operations running smoothly. Below is a full example with structure, skills and formatting guidance."

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
        "Mention measurable improvements where possible",
        "Use bullet points instead of long paragraphs",
        "Keep your CV to 1–2 pages maximum",
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
