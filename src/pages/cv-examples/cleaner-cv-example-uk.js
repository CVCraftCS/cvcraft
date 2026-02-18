import CvExamplePage from "../../components/CvExamplePage";

export default function CleanerCvExampleUk() {
  const title =
    "Cleaner CV Example UK (2026 Guide) | Free Template & Skills | CVCraft Classroom";

  const description =
    "See a professional Cleaner CV example for the UK. Includes key skills, personal statement example, responsibilities, formatting tips and a free CV builder to create your own.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/cleaner-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Cleaner CV Example (UK 2026 Guide)"
      intro="A strong cleaner CV shows reliability, attention to detail and safe handling of cleaning products. UK employers want proof you can follow checklists, maintain hygiene standards and work efficiently with minimal supervision. Below is a full example you can copy and adapt."
      profileTitle="Example Personal Statement for a Cleaner CV"
      profileText="Reliable and detail-focused Cleaner with 3+ years’ experience maintaining offices, commercial premises and communal areas. Confident using cleaning equipment and chemicals safely (COSHH awareness), following structured checklists and delivering consistently high hygiene standards. Trusted for punctuality, discretion and completing tasks independently to deadline."
      skillsTitle="Key Skills to Include on a Cleaner CV (UK)"
      skills={[
        "Commercial and office cleaning",
        "Deep cleaning and sanitising",
        "Safe chemical handling (COSHH awareness)",
        "Mopping, vacuuming, dusting and polishing",
        "Cleaning checklists and quality standards",
        "Time management and working independently",
        "Waste disposal and recycling procedures",
        "Reporting maintenance or safety issues",
      ]}
      jobTitle="Cleaner — CityClean Services"
      jobMeta="Leeds | 2022 – Present"
      bullets={[
        "Cleaned offices, toilets and communal areas to company standards each shift",
        "Followed structured cleaning checklists and reported stock shortages",
        "Handled cleaning chemicals safely and stored equipment correctly",
        "Maintained excellent attendance and punctuality across early-morning shifts",
        "Ensured high hygiene standards in line with health and safety policies",
      ]}
      qualificationsTitle="Qualifications & Training (Helpful in the UK)"
      qualifications={[
        "COSHH / chemical safety awareness training",
        "Manual handling training",
        "Health & safety awareness",
        "DBS check (if working in schools or healthcare settings)",
      ]}
      tipsTitle="How to Make Your Cleaner CV Stand Out"
      tips={[
        "Mention the type of site you cleaned (offices, schools, healthcare, retail)",
        "Highlight reliability and consistent attendance",
        "Show awareness of health & safety and chemical handling",
        "Use short bullet points to make responsibilities easy to scan",
        "Demonstrate independence and ability to work without supervision",
      ]}
      ctaTitle="Create Your Own Cleaner CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly cleaner CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Cleaner CV Now"
      ctaHref="/cv"
    />
  );
}
