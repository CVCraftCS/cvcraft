import CvExamplePage from "../../components/CvExamplePage";

export default function CleanerCvExampleUk() {
  const title =
    "Cleaner CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional cleaner CV example for the UK. Includes key skills, profile summary, employment history tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/cleaner-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Cleaner CV Example (UK)"
      intro="A strong cleaner CV shows reliability, attention to detail, and safe use of cleaning products. Employers want proof you can follow checklists, maintain standards, and work efficiently with minimal supervision."
      profileText="Reliable and detail-focused Cleaner with 3+ years’ experience in offices and commercial sites. Confident using cleaning equipment and chemicals safely, following site checklists, and maintaining consistently high hygiene standards. Trusted for punctuality, discreet working, and completing tasks to deadline."
      skillsTitle="Key Skills for a Cleaner CV"
      skills={[
        "Commercial and office cleaning",
        "Deep cleaning and sanitising",
        "Safe chemical handling (COSHH awareness)",
        "Mopping, vacuuming, dusting, and polishing",
        "Cleaning checklists and quality standards",
        "Time management and working independently",
        "Waste disposal and recycling procedures",
        "Customer/site communication",
      ]}
      jobTitle="Cleaner — CityClean Services"
      jobMeta="Leeds | 2022 – Present"
      bullets={[
        "Cleaned office areas, toilets, and communal spaces to set standards each shift",
        "Followed checklists and reported any issues or low stock to supervisor",
        "Handled cleaning chemicals safely and stored equipment correctly",
        "Maintained high attendance and punctuality across early-morning shifts",
      ]}
      qualifications={[
        "Basic COSHH / chemical safety awareness (if applicable)",
        "Manual Handling training (if applicable)",
        "DBS check (if required for schools/healthcare sites)",
      ]}
      ctaTitle="Create Your Own Cleaner CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly cleaner CV in minutes. Pick a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Cleaner CV Now"
      ctaHref="/cv"
    />
  );
}
