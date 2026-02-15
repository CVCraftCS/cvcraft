import CvExamplePage from "../../components/CvExamplePage";

export default function ConstructionLabourerCvExampleUk() {
  const title =
    "Construction Labourer CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional construction labourer CV example for the UK. Includes key skills, profile summary, employment history tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/construction-labourer-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Construction Labourer CV Example (UK)"
      intro="A strong labourer CV shows reliability, site safety awareness, and the ability to follow instructions. Employers want someone who turns up on time, works hard, and keeps the site tidy and safe."
      profileText="Hard-working Construction Labourer with 3+ years’ experience supporting groundworks and general site tasks. Strong focus on health & safety, manual handling, and working efficiently as part of a team. Trusted for punctuality, tool handling, and keeping work areas clean and organised."
      skillsTitle="Key Skills for a Construction Labourer CV"
      skills={[
        "General labouring and site support",
        "Manual handling and safe lifting",
        "Site clean-up and waste management",
        "Assisting trades (bricklayers, carpenters, groundworkers)",
        "Basic tool handling and equipment use",
        "Health & safety awareness",
        "Following RAMS / supervisor instructions",
        "Teamwork and reliability",
      ]}
      jobTitle="Construction Labourer — NorthBuild Contractors"
      jobMeta="Sheffield | 2022 – Present"
      bullets={[
        "Assisted trades with materials, preparation, and keeping work areas clear",
        "Followed site safety rules and wore PPE at all times",
        "Handled deliveries and moved materials using safe lifting techniques",
        "Maintained tidy site standards, segregating waste where required",
      ]}
      qualifications={[
        "CSCS Card (if applicable)",
        "Manual Handling training (if applicable)",
        "First Aid (optional)",
      ]}
      ctaTitle="Create Your Own Construction Labourer CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly labourer CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Labourer CV Now"
      ctaHref="/cv"
    />
  );
}
