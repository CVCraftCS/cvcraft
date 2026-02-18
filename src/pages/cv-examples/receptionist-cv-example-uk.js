import CvExamplePage from "../../components/CvExamplePage";

export default function ReceptionistCvExampleUk() {
  const title =
    "Receptionist CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional receptionist CV example for the UK. Includes a personal statement example, key receptionist skills, job description bullets, and tips to help you write your CV quickly.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/receptionist-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Receptionist CV Example (UK 2026 Guide)"
      intro="A strong receptionist CV shows communication, organisation, and professionalism. UK employers look for someone who can manage calls, greet visitors, handle bookings, and keep admin tasks running smoothly."
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
      ]}
      jobTitle="Receptionist — Parkview Medical Centre"
      jobMeta="Birmingham | 2022 – Present"
      bullets={[
        "Managed a busy reception desk, greeting visitors and handling high call volumes professionally",
        "Booked appointments accurately, updated records, and supported smooth daily schedules",
        "Handled admin tasks including email replies, filing, and data entry with strong attention to detail",
        "De-escalated difficult situations calmly and directed queries to the correct team member",
        "Maintained confidentiality and followed privacy procedures when handling sensitive information",
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
      ]}
      ctaTitle="Create Your Own Receptionist CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly receptionist CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Receptionist CV Now"
      ctaHref="/cv"
    />
  );
}
