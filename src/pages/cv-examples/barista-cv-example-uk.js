import CvExamplePage from "../../components/CvExamplePage";

export default function BaristaCvExampleUk() {
  const title =
    "Barista CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional barista CV example for the UK. Includes key skills, profile summary, employment history tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/barista-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Barista CV Example (UK)"
      intro="A strong barista CV shows customer service, speed, cleanliness, and consistency. Employers want someone who can handle busy rushes, take accurate orders, and keep standards high."
      profileText="Friendly and energetic Barista with 2+ years’ experience in high-footfall cafés. Skilled in espresso-based drinks, milk texturing, POS systems, and maintaining excellent hygiene standards. Known for fast service during peak hours, accurate order handling, and a welcoming customer experience."
      skillsTitle="Key Skills for a Barista CV"
      skills={[
        "Espresso-based coffee preparation",
        "Milk steaming and drink consistency",
        "Customer service and upselling",
        "POS / till systems and cash handling",
        "Food hygiene and cleaning routines",
        "Working in fast-paced environments",
        "Teamwork and shift coordination",
        "Stock checks and basic prep tasks",
      ]}
      jobTitle="Barista — Riverside Coffee House"
      jobMeta="Bristol | 2023 – Present"
      bullets={[
        "Prepared espresso drinks to consistent quality during peak rush periods",
        "Handled orders using POS system and processed cash/card payments accurately",
        "Maintained clean coffee station and followed food hygiene routines",
        "Supported stock checks, deliveries, and end-of-shift close-down tasks",
      ]}
      qualifications={[
        "Level 2 Food Safety / Hygiene (if applicable)",
        "Allergen awareness training (if applicable)",
        "Coffee training/latte art (optional)",
      ]}
      ctaTitle="Create Your Own Barista CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly barista CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Barista CV Now"
      ctaHref="/cv"
    />
  );
}
