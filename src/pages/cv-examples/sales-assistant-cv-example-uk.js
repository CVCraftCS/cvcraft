import CvExamplePage from "../../components/CvExamplePage";

export default function SalesAssistantCvExampleUk() {
  const title =
    "Sales Assistant CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional sales assistant CV example for the UK. Includes key skills, personal statement example, sales-focused job description bullets, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/sales-assistant-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Sales Assistant CV Example (UK 2026 Guide)"
      intro="A strong UK sales assistant CV should highlight customer service, confidence on the shop floor, and the ability to support sales targets. Employers look for someone who can engage customers, recommend products, process payments accurately, and maintain high store standards."
      profileTitle="Example Personal Statement for a Sales Assistant CV"
      profileText="Friendly and motivated Sales Assistant with 3+ years’ experience in fast-paced retail environments. Skilled in customer engagement, upselling, till operation, and stock management. Consistently supports team sales targets while maintaining excellent store presentation and delivering positive customer experiences."
      skillsTitle="Key Skills for a Sales Assistant CV (UK)"
      skills={[
        "Customer service and product knowledge",
        "Till operation and accurate cash handling",
        "Upselling and cross-selling techniques",
        "Working to sales targets and KPIs",
        "Stock replenishment and merchandising",
        "Handling deliveries and back-of-house tasks",
        "Maintaining store presentation standards",
        "Teamwork and shift coordination",
      ]}
      jobTitle="Sales Assistant — HighStreet Retail"
      jobMeta="London | 2022 – Present"
      bullets={[
        "Served customers confidently, offered product recommendations, and supported a positive in-store experience",
        "Processed cash and card payments accurately while following refund and exchange procedures",
        "Supported weekly sales targets through upselling and promoting seasonal offers",
        "Replenished stock, rotated products, and maintained clean, well-presented displays",
        "Assisted with deliveries and ensured back-of-house areas remained organised and compliant with safety standards",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Customer service experience (essential)",
        "Confidence with basic maths and cash handling",
        "Retail or sales training (optional)",
        "GCSEs including English & Maths (helpful but not always required)",
      ]}
      tipsTitle="How to Make Your Sales Assistant CV Stand Out"
      tips={[
        "Include measurable results if possible (sales targets, upsell rates, customer feedback)",
        "Mention busy periods you handled successfully (weekends, promotions, Christmas)",
        "Show trust and responsibility (opening/closing duties, keyholder support)",
        "Highlight product knowledge and confidence speaking with customers",
        "Keep bullet points focused on outcomes and customer impact",
      ]}
      ctaTitle="Create Your Own Sales Assistant CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly sales assistant CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Sales Assistant CV Now"
      ctaHref="/cv"
    />
  );
}
