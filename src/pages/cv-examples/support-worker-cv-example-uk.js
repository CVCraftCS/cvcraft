import CvExamplePage from "../../components/CvExamplePage";

export default function SupportWorkerCvExampleUk() {
  const title =
    "Support Worker CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional support worker CV example for the UK. Includes key skills, profile summary, experience tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/support-worker-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Support Worker CV Example (UK)"
      intro="A strong support worker CV shows empathy, safeguarding awareness, and the ability to support people with daily living. Employers look for reliability, clear documentation, and calm problem-solving."
      profileText="Compassionate and dependable Support Worker with 3+ years’ experience supporting adults with learning disabilities and complex needs. Skilled in person-centred care, daily living support, record keeping, and safeguarding procedures. Known for building trust, promoting independence, and working calmly under pressure."
      skillsTitle="Key Skills for a Support Worker CV"
      skills={[
        "Person-centred care and support plans",
        "Daily living support (meals, hygiene, routines)",
        "Safeguarding awareness and reporting",
        "Medication support (where trained)",
        "Accurate record keeping and handovers",
        "De-escalation and calm communication",
        "Encouraging independence and life skills",
        "Teamwork across shifts",
      ]}
      jobTitle="Support Worker — BrightPath Supported Living"
      jobMeta="Liverpool | 2022 – Present"
      bullets={[
        "Supported service users with daily routines while promoting independence",
        "Recorded notes accurately and completed clear shift handovers",
        "Followed safeguarding procedures and reported concerns appropriately",
        "Worked collaboratively across shifts to maintain consistent support",
      ]}
      qualifications={[
        "Care Certificate (if applicable)",
        "Level 2/3 Health & Social Care (optional)",
        "First Aid / medication training (optional)",
      ]}
      ctaTitle="Create Your Own Support Worker CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly support worker CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Support Worker CV Now"
      ctaHref="/cv"
    />
  );
}
