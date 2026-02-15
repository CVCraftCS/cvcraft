import CvExamplePage from "../../components/CvExamplePage";

export default function DeliveryDriverCvExampleUk() {
  const title =
    "Delivery Driver CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional delivery driver CV example for the UK. Includes key skills, profile summary, employment history tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/delivery-driver-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Delivery Driver CV Example (UK)"
      intro="A strong delivery driver CV shows reliability, safe driving, timekeeping, and great customer service. Employers want proof you can hit routes on time, handle parcels carefully, and represent the company professionally."
      profileText="Reliable and safety-focused Delivery Driver with 3+ years’ experience completing multi-drop routes across urban and residential areas. Strong knowledge of route planning, proof-of-delivery systems, and customer service. Consistently meets delivery targets while maintaining excellent safety standards and vehicle checks."
      skillsTitle="Key Skills for a Delivery Driver CV"
      skills={[
        "Multi-drop delivery and route planning",
        "Safe driving and vehicle checks",
        "Time management and punctuality",
        "Proof of delivery (POD) apps / scanners",
        "Customer service and communication",
        "Loading, unloading, and parcel handling",
        "Basic vehicle maintenance checks",
        "Problem solving (missed addresses / re-delivery)",
      ]}
      jobTitle="Delivery Driver — Rapid Logistics"
      jobMeta="Birmingham | 2022 – Present"
      bullets={[
        "Completed 60–90 drops per day while meeting strict delivery windows",
        "Used POD app to capture signatures/photos and update delivery status in real time",
        "Performed daily vehicle checks (tyres, fluids, lights) and reported faults promptly",
        "Maintained excellent customer feedback through polite, professional service",
      ]}
      qualifications={[
        "Full UK Driving Licence (Category B)",
        "Basic Health & Safety / Manual Handling training",
        "Clean driving record (if applicable)",
      ]}
      ctaTitle="Create Your Own Delivery Driver CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly delivery driver CV in minutes. Pick a clean template, add your experience, and download as a polished PDF."
      ctaButton="Build Your Delivery Driver CV Now"
      ctaHref="/cv"
    />
  );
}
