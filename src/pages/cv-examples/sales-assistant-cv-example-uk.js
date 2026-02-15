import CvExamplePage from "../../components/CvExamplePage";

export default function SalesAssistantCvExampleUk() {
  const title =
    "Sales Assistant CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional sales assistant CV example for the UK. Includes key skills, profile summary, experience tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/sales-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Sales Assistant CV Example (UK)"
      intro="A strong sales assistant CV shows customer service, reliability, and confidence on the shop floor. Employers look for someone who can hit targets, keep standards high, and work well with the team."
      profileText="Friendly and motivated Sales Assistant with 3+ years’ experience in fast-paced retail environments. Skilled in customer service, till operation, stock replenishment, and upselling. Known for being approachable, reliable on shifts, and maintaining excellent store standards."
      skillsTitle="Key Skills for a Sales Assistant CV"
      skills={[
        "Customer service and communication",
        "Till operation and payments",
        "Upselling and product recommendations",
        "Stock replenishment and merchandising",
        "Maintaining store standards and cleanliness",
        "Handling deliveries and back-of-house tasks",
        "Working to targets and KPIs",
        "Teamwork and shift support",
      ]}
      jobTitle="Sales Assistant — HighStreet Retail"
      jobMeta="London | 2022 – Present"
      bullets={[
        "Served customers, offered product advice, and supported a positive store experience",
        "Processed payments accurately and handled returns according to policy",
        "Replenished stock and maintained merchandising standards on the shop floor",
        "Supported promotions and helped the team meet weekly sales targets",
      ]}
      qualifications={[
        "Customer service experience (most important)",
        "Basic maths/cash handling confidence",
        "Retail training (optional)",
      ]}
      ctaTitle="Create Your Own Sales Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly retail CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Sales Assistant CV Now"
      ctaHref="/cv"
    />
  );
}
