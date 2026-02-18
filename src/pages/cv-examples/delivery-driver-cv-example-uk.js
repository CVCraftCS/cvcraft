import CvExamplePage from "../../components/CvExamplePage";

export default function DeliveryDriverCvExampleUk() {
  const title =
    "Delivery Driver CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";

  const description =
    "See a professional delivery driver CV example for the UK. Includes a personal statement example, key skills, job description bullets, and tips to help you write your CV quickly.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/delivery-driver-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Delivery Driver CV Example (UK 2026 Guide)"
      intro="A strong delivery driver CV shows reliability, safe driving habits, route efficiency, and customer service. UK employers want proof you can complete multi-drop routes on time, handle parcels carefully, and represent the company professionally."
      profileTitle="Example Personal Statement for a Delivery Driver CV"
      profileText="Reliable and safety-focused Delivery Driver with 3+ years’ experience completing multi-drop routes across urban and residential areas. Strong knowledge of route planning, proof-of-delivery systems, and customer service. Consistently meets delivery targets while maintaining excellent safety standards, daily vehicle checks, and professional conduct."
      skillsTitle="Key Skills for a Delivery Driver CV (UK)"
      skills={[
        "Multi-drop delivery and route planning",
        "Safe driving and vehicle safety checks",
        "Time management and meeting delivery windows",
        "Proof of delivery (POD) apps / handheld scanners",
        "Customer service and professional communication",
        "Loading, unloading and safe parcel handling",
        "Basic vehicle maintenance checks",
        "Problem solving (missed addresses / re-delivery)",
        "Knowledge of UK road regulations and DVLA compliance",
      ]}
      jobTitle="Delivery Driver — Rapid Logistics"
      jobMeta="Birmingham | 2022 – Present"
      bullets={[
        "Completed 60–90 drops per day while meeting strict delivery windows and KPIs",
        "Used POD app to capture signatures/photos and update delivery status in real time",
        "Performed daily vehicle checks (tyres, fluids, lights) and reported faults promptly",
        "Maintained excellent customer feedback through polite, professional doorstep service",
        "Managed route changes and traffic delays using sat-nav and local route knowledge",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Full UK Driving Licence (Category B)",
        "Clean driving record (if applicable)",
        "Basic Health & Safety / Manual Handling training",
        "Van driving experience (if applicable)",
      ]}
      tipsTitle="How to Make Your Delivery Driver CV Stand Out"
      tips={[
        "Add numbers: drops per day, on-time delivery rate, customer rating if available",
        "Mention vehicle types driven (small van, LWB, refrigerated, etc.)",
        "Highlight safety: daily checks, accident-free record, compliance",
        "Show reliability: early starts, weekend shifts, flexible routes",
        "Keep bullets focused on performance and outcomes, not just duties",
      ]}
      ctaTitle="Create Your Own Delivery Driver CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly delivery driver CV in minutes. Pick a clean template, add your experience and skills, and download as a polished PDF."
      ctaButton="Build Your Delivery Driver CV Now"
      ctaHref="/cv"
    />
  );
}
