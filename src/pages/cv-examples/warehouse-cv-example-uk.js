// src/pages/warehouse-cv-example-uk.js
import CvExamplePage from "../../components/CvExamplePage";

export default function WarehouseCvExampleUk() {
  const title =
    "Warehouse CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional warehouse CV example for the UK (2026). Includes a personal statement, key warehouse skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/warehouse-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Warehouse CV Example (UK 2026) + Free Warehouse CV Template"
      intro="A strong UK warehouse CV should be clear, practical, and focused on output and safety. Employers want evidence of productivity, accuracy, reliable attendance, and experience with picking/packing, scanning, and dispatch deadlines.\n\nWarehouse CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and any licences or training (manual handling, forklift, MHE). Use numbers wherever possible — accuracy %, units per shift, deadlines met."
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
        "Goods-in and stock checks",
        "Working to KPIs and productivity targets",
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
        "If you’ve worked nights or rotating shifts, mention it",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Warehouse CV Mistakes to Avoid"
      mistakes={[
        "Not including numbers (accuracy %, units per shift, productivity targets)",
        "Listing only ‘warehouse duties’ without specifying picking/packing/goods-in/dispatch",
        "Forgetting to mention scanners, WMS, or equipment used",
        "Ignoring health & safety language (PPE, manual handling, reporting hazards)",
        "Using long paragraphs instead of short, clear bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a warehouse CV?",
          a: "Include picking and packing, RF scanning, stock replenishment, manual handling, health & safety awareness, teamwork, reliability, and working to productivity targets. Mention equipment and systems you’ve used.",
        },
        {
          q: "How long should a warehouse CV be in the UK?",
          a: "Aim for 1 page if you’re entry-level. Two pages is acceptable if you have strong experience, licences, or multiple warehouse roles. Keep it easy to scan with bullet points.",
        },
        {
          q: "How do I write a warehouse CV with no experience?",
          a: "Focus on reliability, physical stamina, teamwork, and safety awareness. Use examples from retail, labouring, delivery, or physically demanding roles. Show willingness to work shifts and follow procedures.",
        },
        {
          q: "Should I include forklift or MHE licences on my CV?",
          a: "Yes. If you have forklift, LLOP, PPT, or other MHE licences, list them clearly in your qualifications section — it can significantly improve your chances.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/delivery-driver-cv-example-uk", label: "Delivery Driver CV Example (UK)" },
        { href: "/cv-examples/construction-labourer-cv-example-uk", label: "Construction Labourer CV Example (UK)" },
        { href: "/cv-examples/security-guard-cv-example-uk", label: "Security Guard CV Example (UK)" },
        { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Warehouse CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly warehouse CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Warehouse CV Now"
      ctaHref="/cv"
    />
  );
}