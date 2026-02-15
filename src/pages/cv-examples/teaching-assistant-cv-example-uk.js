import CvExamplePage from "../../components/CvExamplePage";

export default function TeachingAssistantCvExampleUk() {
  const title =
    "Teaching Assistant CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional teaching assistant CV example for the UK. Includes key skills, profile summary, experience tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/teaching-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Teaching Assistant CV Example (UK)"
      intro="A strong teaching assistant CV shows patience, classroom support skills, and safeguarding awareness. Schools look for someone reliable who can support learning, behaviour, and pupil wellbeing."
      profileText="Supportive and organised Teaching Assistant with 3+ years’ experience working in primary classrooms. Skilled in 1:1 and small-group support, classroom preparation, and behaviour management strategies. Strong safeguarding awareness and excellent communication with staff, pupils, and parents."
      skillsTitle="Key Skills for a Teaching Assistant CV"
      skills={[
        "1:1 and small-group learning support",
        "Classroom preparation and resources",
        "Behaviour support and positive reinforcement",
        "Safeguarding awareness",
        "Supporting SEN pupils (if applicable)",
        "Communication with teachers and parents",
        "Playground supervision and wellbeing support",
        "Organisation and reliability",
      ]}
      jobTitle="Teaching Assistant — Oakwood Primary School"
      jobMeta="Manchester | 2022 – Present"
      bullets={[
        "Supported pupils with reading, writing, and maths in small groups",
        "Assisted teacher with classroom setup, resources, and daily routines",
        "Helped manage behaviour using positive reinforcement strategies",
        "Maintained safeguarding standards and reported concerns correctly",
      ]}
      qualifications={[
        "Level 2/3 Teaching Assistant qualification (if applicable)",
        "Safeguarding training (often provided by school)",
        "DBS check (required)",
      ]}
      ctaTitle="Create Your Own Teaching Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly teaching assistant CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Teaching Assistant CV Now"
      ctaHref="/cv"
    />
  );
}
