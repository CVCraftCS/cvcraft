import CvExamplePage from "../../components/CvExamplePage";

export default function CareAssistantCvExampleUk() {
  const title =
    "Care Assistant CV Example UK (2026 Guide) | Free Template & Skills | CVCraft Classroom";

  const description =
    "See a professional Care Assistant CV example for the UK. Includes key skills, a personal statement example, responsibilities, formatting tips and a free CV builder to create your own.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/care-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Care Assistant CV Example (UK 2026 Guide)"
      intro="A strong care assistant CV shows compassion, reliability and safeguarding awareness. UK employers want someone who can provide respectful personal care, keep accurate notes, work as part of a team and maintain dignity at all times. Below is a complete example you can copy and adapt."
      profileTitle="Example Personal Statement for a Care Assistant CV"
      profileText="Compassionate and reliable Care Assistant with 3+ years’ experience supporting elderly residents in residential care settings. Skilled in personal care, mobility support, medication assistance (under supervision), safeguarding and accurate care documentation. Known for building trust with residents and families while maintaining dignity, safety and wellbeing."
      skillsTitle="Key Skills to Include on a Care Assistant CV (UK)"
      skills={[
        "Personal care and hygiene support",
        "Medication support (as trained / supervised)",
        "Safeguarding awareness",
        "Manual handling and mobility support",
        "Dementia and memory-care awareness",
        "Care plans and daily notes (record keeping)",
        "Communication with families and colleagues",
        "Teamwork, patience and reliability",
      ]}
      jobTitle="Care Assistant — Sunrise Residential Home"
      jobMeta="Manchester | 2022 – Present"
      bullets={[
        "Provided daily personal care support to residents with dignity and respect",
        "Supported mobility and assisted with safe manual handling techniques",
        "Assisted with medication routines in line with training and supervision",
        "Maintained accurate care notes and reported changes to senior staff",
        "Built positive relationships with residents and supported emotional wellbeing",
      ]}
      qualificationsTitle="Qualifications & Training (Helpful in the UK)"
      qualifications={[
        "Level 2 Diploma in Health and Social Care (helpful, not always required)",
        "First Aid certification (if applicable)",
        "Manual handling training (commonly expected)",
        "Safeguarding training (commonly expected)",
      ]}
      tipsTitle="How to Make Your Care Assistant CV Stand Out"
      tips={[
        "Mention the type of care setting (care home, dementia unit, domiciliary, etc.)",
        "Use clear, respectful language that shows dignity and compassion",
        "Highlight safeguarding awareness and accurate record keeping",
        "Show reliability: shift work, teamwork, and calm handling of difficult situations",
        "Keep it easy to scan: short bullets, no long paragraphs",
      ]}
      ctaTitle="Create Your Own Care Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-ready care assistant CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Care Assistant CV Now"
      ctaHref="/cv"
    />
  );
}
