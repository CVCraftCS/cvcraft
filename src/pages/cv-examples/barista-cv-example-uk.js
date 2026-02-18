import CvExamplePage from "../../components/CvExamplePage";

export default function BaristaCvExampleUk() {
  const title =
    "Barista CV Example UK (2026 Guide) | Free Template & Skills | CVCraft Classroom";

  const description =
    "See a professional Barista CV example for the UK. Includes key skills, a personal statement example, responsibilities, formatting tips and a free CV builder to create your own.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/barista-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}

      /* =========================
         PAGE HEADER
      ========================== */
      h1="Barista CV Example (UK 2026 Guide)"

      intro="A strong barista CV shows customer service, speed, cleanliness and consistency. UK employers want someone who can handle busy rushes, take accurate orders, keep standards high, and support the team during peak periods. Below is a complete example you can copy and adapt."

      /* =========================
         PROFILE SECTION
      ========================== */
      profileTitle="Example Personal Statement for a Barista CV"

      profileText="Friendly and energetic Barista with 2+ years’ experience in high-footfall cafés. Skilled in espresso-based drinks, milk texturing, POS systems and maintaining excellent hygiene standards. Known for fast service during peak hours, accurate order handling and creating a welcoming customer experience."

      /* =========================
         SKILLS SECTION
      ========================== */
      skillsTitle="Key Skills to Include on a Barista CV (UK)"

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

      /* =========================
         EXPERIENCE SECTION
      ========================== */
      jobTitle="Barista — Riverside Coffee House"

      jobMeta="Bristol | 2023 – Present"

      bullets={[
        "Prepared espresso drinks to consistent quality during peak rush periods",
        "Handled orders using POS system and processed cash/card payments accurately",
        "Maintained clean coffee station and followed food hygiene routines",
        "Supported stock checks, deliveries and end-of-shift close-down tasks",
        "Helped reduce order errors by double-checking custom requests and allergens",
      ]}

      /* =========================
         QUALIFICATIONS SECTION
      ========================== */
      qualificationsTitle="Qualifications & Training (Helpful in the UK)"

      qualifications={[
        "Level 2 Food Safety / Hygiene (if applicable)",
        "Allergen awareness training (if applicable)",
        "Coffee training or latte art (optional)",
        "Basic maths and confident communication (always valuable)",
      ]}

      /* =========================
         EXTRA VALUE SECTION
      ========================== */
      tipsTitle="How to Make Your Barista CV Stand Out"

      tips={[
        "Mention speed and accuracy during peak rush times",
        "Show hygiene and cleaning habits clearly (this matters a lot in food/drink roles)",
        "Include upselling or customer service wins if you have them",
        "Keep your CV to 1 page if you have under 3–4 years’ experience",
        "Use bullet points and avoid long paragraphs",
      ]}

      /* =========================
         CALL TO ACTION
      ========================== */
      ctaTitle="Create Your Own Barista CV"

      ctaBody="Use our UK CV builder to create a recruiter-ready barista CV in minutes. Choose a clean template, customise your sections, and download a polished PDF instantly."

      ctaButton="Build Your Barista CV Now"

      ctaHref="/cv"
    />
  );
}
