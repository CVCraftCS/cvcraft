import CvExamplePage from "../../components/CvExamplePage";

export default function AdminAssistantCvExampleUk() {
  const title =
    "Admin Assistant CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional admin assistant CV example for the UK. Includes key skills, profile summary, experience tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/admin-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Admin Assistant CV Example (UK)"
      intro="A strong admin CV shows organisation, accuracy, and communication. Employers want someone who can manage tasks, keep records tidy, and support the wider team."
      profileText="Organised and detail-focused Admin Assistant with 3+ years’ experience supporting office operations. Skilled in data entry, document control, inbox management, and scheduling. Known for accuracy, reliability, and keeping tasks on track in a fast-paced environment."
      skillsTitle="Key Skills for an Admin Assistant CV"
      skills={[
        "Data entry and attention to detail",
        "Document filing and organisation",
        "Email and inbox management",
        "Scheduling and diary support",
        "Customer service and phone calls",
        "Microsoft Office / Google Workspace",
        "Basic spreadsheet skills",
        "Prioritising tasks and deadlines",
      ]}
      jobTitle="Admin Assistant — Westgate Services"
      jobMeta="Glasgow | 2022 – Present"
      bullets={[
        "Processed data entry and maintained accurate records across systems",
        "Managed shared inbox and escalated urgent queries appropriately",
        "Supported scheduling, meeting notes, and document preparation",
        "Handled customer calls professionally and resolved basic enquiries",
      ]}
      qualifications={[
        "GCSEs including English & Maths (common requirement)",
        "Business Admin certificate (optional)",
        "Strong Microsoft Office skills (valuable)",
      ]}
      ctaTitle="Create Your Own Admin Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly admin CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Admin CV Now"
      ctaHref="/cv"
    />
  );
}
