// src/pages/warehouse-cv-example-uk.js
import CvExamplePage from "../../components/CvExamplePage";

export default function WarehouseCvExampleUk() {
  const title =
    "Warehouse CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional warehouse CV example for the UK. Includes a personal statement example, key warehouse skills, job description bullets, and tips to help you write your CV quickly.";
  const canonical = "https://www.cvcraftclassroom.com/warehouse-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Warehouse CV Example (UK 2026 Guide)"
      intro="A strong UK warehouse CV should be clear, practical, and focused on output and safety. Employers want evidence of productivity, accuracy, reliable attendance, and experience with picking/packing, scanning, and dispatch deadlines."
      profileTitle="Example Personal Statement for a Warehouse CV"
      profileText="Reliable and physically fit Warehouse Operative with 4+ years’ experience in high-volume order picking, packing, and stock replenishment. Consistently maintained 99% order accuracy while processing up to 1,000 units per shift. Strong health & safety awareness and confident using handheld scanners, pallet trucks, and basic warehouse management systems (WMS)."
      skillsTitle="Key Skills for a Warehouse CV (UK)"
      skills={[
        "Order picking and packing",
        "Handheld scanners / RF scanning",
        "Stock replenishment and put-away",
        "Dispatch deadlines and workload planning",
        "Manual handling and safe lifting",
        "Health & safety compliance (PPE, housekeeping)",
        "Teamwork and shift reliability",
        "Basic warehouse management systems (WMS)",
      ]}
      jobTitle="Warehouse Operative — Distribution Centre"
      jobMeta="Manchester | 2021 – Present"
      bullets={[
        "Picked and packed up to 1,000 items per shift using handheld scanners and pick lists",
        "Maintained 99% order accuracy by checking locations, labels, and quantities before dispatch",
        "Worked to strict dispatch deadlines and supported peak periods with overtime when required",
        "Operated pallet trucks safely and followed manual handling guidance at all times",
        "Assisted with stock counts, replenishment, and keeping pick locations organised",
        "Kept work areas clean and safe, reporting hazards and following PPE procedures",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "Basic Health & Safety and manual handling training (often provided onsite)",
        "Forklift/MHE licences (optional — include if you have them)",
        "Experience with scanners/WMS systems (valuable)",
        "Good timekeeping and flexible shift availability (often required)",
      ]}
      tipsTitle="How to Make Your Warehouse CV Stand Out"
      tips={[
        "Add numbers: units per shift, accuracy %, deadlines met, peak volume handled",
        "Mention specific tasks: picking, packing, goods-in, dispatch, replenishment, stock counts",
        "Include equipment and systems: RF scanners, WMS, pallet truck, LLOP/MHE (if relevant)",
        "Show safety habits: PPE, housekeeping, reporting hazards/near misses, safe lifting",
        "Keep bullets practical and outcome-focused (speed, accuracy, reliability, safety)",
      ]}
      ctaTitle="Create Your Own Warehouse CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly warehouse CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Warehouse CV Now"
      ctaHref="/cv"
    />
  );
}
