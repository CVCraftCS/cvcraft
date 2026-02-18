import CvExamplePage from "../../components/CvExamplePage";

export default function CustomerServiceCvExampleUk() {
  const title =
    "Customer Service CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional customer service CV example for the UK. Includes a personal statement example, key skills, job description bullets, and tips you can copy into your CV.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/customer-service-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Customer Service CV Example (UK 2026 Guide)"
      intro="A strong customer service CV shows calm communication, problem solving, and reliability. UK employers want proof you can handle customers professionally, resolve issues efficiently, and work to targets or KPIs."
      profileTitle="Example Personal Statement for a Customer Service CV"
      profileText="Professional and approachable Customer Service Advisor with 4+ years’ experience in retail and contact centre environments. Skilled in handling complaints calmly, resolving issues quickly, and maintaining high customer satisfaction. Confident using CRM systems, documenting outcomes accurately, and working towards daily performance targets."
      skillsTitle="Key Skills for a Customer Service CV (UK)"
      skills={[
        "Communication and active listening",
        "Complaint handling and de-escalation",
        "Problem solving and resolution focus",
        "Empathy, patience and professionalism",
        "Working to KPIs (CSAT, AHT, FCR)",
        "Accurate admin and note taking",
        "CRM systems and ticketing tools",
        "Teamwork and reliability under pressure",
      ]}
      jobTitle="Customer Service Advisor — CityConnect Support"
      jobMeta="Birmingham | 2021 – Present"
      bullets={[
        "Handled 60+ inbound customer calls per day across billing, delivery and account queries",
        "Maintained customer satisfaction (CSAT) above 95% through clear, calm communication",
        "Resolved complaints and processed refunds efficiently, escalating complex cases when required",
        "Updated CRM records accurately after each interaction (notes, outcomes, next steps)",
        "Worked to daily and weekly targets for quality, resolution and call handling performance",
      ]}
      qualificationsTitle="Qualifications & Training (Helpful for UK Roles)"
      qualifications={[
        "GCSEs including English & Maths (common requirement)",
        "Customer service training / induction (if applicable)",
        "CRM system experience (valuable — name it if you can)",
        "Any regulated training (finance/energy/telecoms) if relevant",
      ]}
      tipsTitle="How to Make Your Customer Service CV Stand Out"
      tips={[
        "Add numbers if you can: calls per day, CSAT %, first contact resolution, complaint turnaround time",
        "Show the environment: call centre, retail, reception/front desk, online support, live chat",
        "Include systems/tools: CRM, ticketing tools, knowledge base, Microsoft Office/Google Workspace",
        "Use calm, positive wording that shows professionalism under pressure",
        "Keep bullets outcome-led (resolved, improved, reduced, maintained) instead of duties-only",
      ]}
      ctaTitle="Create Your Own Customer Service CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly customer service CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Customer Service CV Now"
      ctaHref="/cv"
    />
  );
}
