import CvExamplePage from "../../components/CvExamplePage";

export default function ConstructionLabourerCvExampleUk() {
  const title =
    "Construction Labourer CV Example UK (2026) | Free Template, Skills & Tips | CVCraft Classroom";
  const description =
    "Use this construction labourer CV example for the UK to write a strong CV in 2026. Includes a proven personal statement, key labourer skills, job description bullets, and a free CV builder.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/construction-labourer-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Construction Labourer CV Example (UK)"
      intro="A strong construction labourer CV shows reliability, site safety awareness, and the ability to follow instructions. Employers want someone who turns up on time, works hard, works safely, and keeps the site tidy and organised."
      profileText="Hard-working Construction Labourer with 3+ years’ experience supporting groundworks and general site tasks on busy building sites. Strong focus on health & safety, manual handling, and completing work efficiently as part of a team. Known for punctuality, safe tool handling, and keeping work areas clean, secure, and well-organised."
      skillsTitle="Key Skills for a Construction Labourer CV"
      skills={[
        "General labouring and site support",
        "Manual handling and safe lifting",
        "Site clean-up and waste management",
        "Assisting trades (bricklayers, carpenters, groundworkers)",
        "Basic tool handling and equipment use",
        "Health & safety awareness and PPE compliance",
        "Following RAMS / supervisor instructions",
        "Loading/unloading deliveries and moving materials safely",
        "Teamwork, reliability, and strong work ethic",
      ]}
      jobTitle="Construction Labourer — NorthBuild Contractors"
      jobMeta="Sheffield | 2022 – Present"
      bullets={[
        "Assisted trades with materials, preparation, and keeping work areas clear and safe",
        "Followed site safety rules, completed toolbox talks, and wore PPE at all times",
        "Handled deliveries and moved materials using safe lifting techniques and good manual handling practice",
        "Maintained tidy site standards, segregating waste and supporting site housekeeping requirements",
        "Supported basic set-up tasks (clearing areas, moving barriers, tidying walkways) to keep work running smoothly",
      ]}
      qualifications={[
        "CSCS Card (recommended if applicable)",
        "Manual Handling training (if applicable)",
        "First Aid (optional)",
        "Asbestos Awareness (optional)",
      ]}
      ctaTitle="Create Your Own Construction Labourer CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly labourer CV in minutes. Pick a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Labourer CV Now"
      ctaHref="/cv"
    />
  );
}
