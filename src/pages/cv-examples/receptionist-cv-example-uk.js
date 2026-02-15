import CvExamplePage from "../../components/CvExamplePage";

export default function ReceptionistCvExampleUk() {
  const title =
    "Receptionist CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional receptionist CV example for the UK. Includes key skills, profile summary, experience tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/receptionist-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Receptionist CV Example (UK)"
      intro="A strong receptionist CV shows communication, organisation, and professionalism. Employers look for someone who can manage calls, greet visitors, and keep admin tasks running smoothly."
      profileText="Professional and approachable Receptionist with 3+ years’ experience in busy front-desk roles. Skilled in call handling, diary management, visitor check-in, and supporting general administration. Known for staying calm under pressure, maintaining confidentiality, and providing excellent customer service."
      skillsTitle="Key Skills for a Receptionist CV"
      skills={[
        "Front-desk customer service",
        "Call handling and message taking",
        "Diary and appointment management",
        "Email management and admin support",
        "Visitor sign-in and access procedures",
        "Organisation and prioritising tasks",
        "Confidentiality and professionalism",
        "Microsoft Office / Google Workspace",
      ]}
      jobTitle="Receptionist — Parkview Medical Centre"
      jobMeta="Birmingham | 2022 – Present"
      bullets={[
        "Managed a busy reception desk, greeting visitors and answering high call volumes",
        "Booked appointments accurately and updated records where required",
        "Handled admin tasks including emails, filing, and basic data entry",
        "Maintained confidentiality and professionalism at all times",
      ]}
      qualifications={[
        "Customer service training (optional)",
        "Admin / reception experience (most important)",
        "DBS check (if required by employer)",
      ]}
      ctaTitle="Create Your Own Receptionist CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly receptionist CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Receptionist CV Now"
      ctaHref="/cv"
    />
  );
}
