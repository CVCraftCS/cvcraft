import CvExamplePage from "../../components/CvExamplePage";

export default function SupportWorkerCvExampleUk() {
  const title =
    "Support Worker CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional support worker CV example for the UK. Includes a personal statement example, key skills, job description bullets, and tips to help you write a strong support worker CV.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/support-worker-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Support Worker CV Example (UK 2026 Guide)"
      intro="A strong UK support worker CV should demonstrate empathy, safeguarding awareness, and the ability to support individuals with daily living. Employers look for reliability, accurate documentation, and calm problem-solving in challenging situations."
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
      ]}
      jobTitle="Support Worker — BrightPath Supported Living"
      jobMeta="Liverpool | 2022 – Present"
      bullets={[
        "Supported service users with daily routines while promoting independence and dignity",
        "Recorded detailed care notes and completed clear shift handovers",
        "Followed safeguarding procedures and reported concerns appropriately",
        "Assisted with medication support in line with training and company policies",
        "Worked collaboratively across shifts to ensure consistent, high-quality support",
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
        "Highlight the type of setting you’ve worked in (supported living, residential care, outreach)",
        "Mention specific responsibilities such as medication support or behaviour management",
        "Show safeguarding awareness clearly — this is critical in care roles",
        "Demonstrate empathy and professionalism through your wording",
        "Keep bullet points focused on outcomes: independence, wellbeing, safety, documentation",
      ]}
      ctaTitle="Create Your Own Support Worker CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly support worker CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Support Worker CV Now"
      ctaHref="/cv"
    />
  );
}
