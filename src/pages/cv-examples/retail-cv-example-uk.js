// src/pages/retail-cv-example-uk.js
import CvExamplePage from "../components/CvExamplePage";

export default function RetailCvExampleUk() {
  const title =
    "Retail CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional retail CV example for the UK. Includes a personal statement example, key retail skills, job description bullets, and tips to help you write your CV quickly.";
  const canonical = "https://www.cvcraftclassroom.com/retail-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Retail CV Example (UK 2026 Guide)"
      intro="A strong UK retail CV should highlight customer service, reliability, teamwork, and (where possible) measurable results like sales targets, upsells, or positive feedback. Below is a practical example you can copy and adapt."
      profileTitle="Example Personal Statement for a Retail CV"
      profileText="Friendly and reliable Retail Assistant with 3+ years’ experience in fast-paced stores, delivering excellent customer service and supporting daily sales targets. Confident with tills, cash handling, stock replenishment and merchandising. Known for calm, professional communication and consistent shift attendance, including weekends and late shifts."
      skillsTitle="Key Skills for a Retail CV (UK)"
      skills={[
        "Customer service and communication",
        "Tills / POS systems and cash handling",
        "Stock replenishment and rotation",
        "Merchandising and display standards",
        "Queue management during busy periods",
        "Teamwork and shift coordination",
        "Problem solving and basic complaint handling",
        "Timekeeping, reliability, and flexibility",
      ]}
      jobTitle="Retail Assistant — High Street Store"
      jobMeta="Leeds | 2022 – Present"
      bullets={[
        "Served customers quickly and professionally during peak periods, maintaining a friendly experience",
        "Operated tills confidently, processed cash/card payments accurately, and followed cashing-up procedures",
        "Replenished stock and maintained tidy, well-presented displays to company standards",
        "Supported promotions and recommended add-on items when suitable to help hit daily targets",
        "Resolved basic complaints politely and escalated more complex issues when needed",
        "Helped reduce queue times by supporting busy tills and self-checkout during rush hours",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "GCSEs including English & Maths (helpful for many retail roles)",
        "Retail/customer service training (optional)",
        "Food hygiene training (optional, if supermarket/food retail)",
        "First Aid training (optional)",
      ]}
      tipsTitle="How to Make Your Retail CV Stand Out"
      tips={[
        "Add numbers if you can: customers served, tills covered, queue times reduced, targets hit",
        "Mention busy periods you handled well (Christmas, sales events, weekends)",
        "Show trust/responsibility: opening/closing duties, cash handling, keyholder support",
        "Include systems you’ve used (POS/tills, self-checkout support, stock systems)",
        "Keep bullets focused on outcomes: speed, accuracy, standards, customer experience",
      ]}
      ctaTitle="Create Your Own Retail CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly retail CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Retail CV Now"
      ctaHref="/cv"
    />
  );
}
