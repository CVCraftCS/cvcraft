import CvExamplePage from "../../components/CvExamplePage";

export default function TeachingAssistantCvExampleUk() {
  const title =
    "Teaching Assistant CV Template UK (2026) | CV Example, Skills & Tips | CVCraft Classroom";

  const description =
    "Need a strong Teaching Assistant CV in the UK? Use this teaching assistant CV example (2026) with a proven personal statement, key TA skills, job bullet points, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/teaching-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Teaching Assistant CV Example (UK 2026) + Teaching Assistant CV Template"
      intro="Looking for a strong Teaching Assistant CV in the UK? This example shows patience, classroom support skills, and safeguarding awareness. Schools look for someone reliable who can support learning, behaviour, and pupil wellbeing — while working calmly as part of a team.\n\nTeaching Assistant CV Template (UK format): keep it clear and easy to scan — personal details, a short personal statement, key skills, work history with bullet points, qualifications/training (DBS, safeguarding, first aid), and references (or “available on request”)."
      profileTitle="Example Personal Statement for a Teaching Assistant CV"
      profileText="Supportive and organised Teaching Assistant with 3+ years’ experience working in primary classrooms. Skilled in 1:1 and small-group support, classroom preparation, phonics and reading practice, and behaviour management strategies. Strong safeguarding awareness and clear communication with teachers, pupils, and parents."
      skillsTitle="Key Skills for a Teaching Assistant CV (UK)"
      skills={[
        "1:1 and small-group learning support",
        "Phonics, reading, and basic numeracy support",
        "Classroom preparation and learning resources",
        "Behaviour support and positive reinforcement",
        "Safeguarding awareness and reporting procedures",
        "Supporting SEN pupils (where applicable)",
        "Playground supervision and wellbeing support",
        "Organisation, teamwork, and reliability",
      ]}
      jobTitle="Teaching Assistant — Oakwood Primary School"
      jobMeta="Manchester | 2022 – Present"
      bullets={[
        "Supported pupils with reading, writing, and maths through 1:1 and small-group activities",
        "Assisted the teacher with classroom setup, learning resources, and daily routines",
        "Helped manage behaviour using positive reinforcement and clear classroom expectations",
        "Supported SEN pupils where needed and followed individual support plans",
        "Maintained safeguarding standards and reported concerns in line with school procedures",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Level 2/3 Teaching Assistant qualification (helpful but not always required)",
        "Safeguarding training (often provided by the school)",
        "Paediatric First Aid (useful in primary settings)",
        "Enhanced DBS check (required)",
      ]}
      tipsTitle="How to Make Your Teaching Assistant CV Stand Out"
      tips={[
        "Mention the key stage you’ve supported (EYFS, KS1, KS2) and the classroom environment",
        "Include SEN experience if relevant (autism, ADHD, speech & language, SEMH)",
        "Show safeguarding awareness clearly — it’s a must for school roles",
        "Use calm, practical bullet points focused on support outcomes and routines",
        "Add any interventions you’ve helped with (phonics groups, reading recovery, numeracy)",
      ]}
      faqItems={[
        {
          q: "What skills should a teaching assistant put on a CV?",
          a: "Include 1:1 and small-group support, phonics/reading help, classroom preparation, behaviour support, communication, and organisation. In the UK, safeguarding awareness is essential — mention that you follow reporting procedures and work to school policies.",
        },
        {
          q: "Do you need qualifications to be a teaching assistant in the UK?",
          a: "Not always. Many schools value experience and attitude, but a Level 2/3 Teaching Assistant qualification can help. An enhanced DBS check is required, and safeguarding training is commonly provided. First aid is a useful extra for primary settings.",
        },
      ]}
      ctaTitle="Create Your Own Teaching Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly teaching assistant CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Teaching Assistant CV Now"
      ctaHref="/cv"
    />
  );
}
