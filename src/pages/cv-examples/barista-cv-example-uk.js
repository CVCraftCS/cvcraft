import CvExamplePage from "../../components/CvExamplePage";

export default function BaristaCvExampleUk() {
  const title =
    "Barista CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Barista CV example for the UK (2026). Includes a personal statement, key skills, bullet-point responsibilities, common mistakes, FAQs, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/barista-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}

      /* =========================
         PAGE HEADER
      ========================== */
      h1="Barista CV Example (UK 2026) + Free Barista CV Template"

      intro="A strong barista CV shows customer service, speed, cleanliness and consistency. UK employers want someone who can handle busy rushes, take accurate orders, keep standards high, and support the team during peak periods.\n\nUse this barista CV example as a template: keep it simple — contact details, a short personal statement, key skills, bullet-point experience, and qualifications (food hygiene/allergen training if you have it)."

      /* =========================
         PROFILE SECTION
      ========================== */
      profileTitle="Example Personal Statement for a Barista CV"
      profileText="Friendly and energetic Barista with 2+ years’ experience in high-footfall cafés. Skilled in espresso-based drinks, milk texturing, POS systems and maintaining excellent hygiene standards. Known for fast service during peak hours, accurate order handling and creating a welcoming customer experience."

      /* =========================
         SKILLS SECTION
      ========================== */
      skillsTitle="Key Skills to Include on a Barista CV (UK)"
      skills={[
        "Espresso-based coffee preparation",
        "Milk steaming and drink consistency",
        "Customer service and upselling",
        "POS / till systems and cash handling",
        "Food hygiene and cleaning routines",
        "Working in fast-paced environments",
        "Teamwork and shift coordination",
        "Stock checks and basic prep tasks",
        "Allergen awareness and accurate order handling",
        "Clear communication during busy service",
      ]}

      /* =========================
         EXPERIENCE SECTION
      ========================== */
      jobTitle="Barista — Riverside Coffee House"
      jobMeta="Bristol | 2023 – Present"
      bullets={[
        "Prepared espresso drinks to consistent quality during peak rush periods",
        "Handled orders using POS system and processed cash/card payments accurately",
        "Maintained a clean coffee station and followed food hygiene routines throughout shifts",
        "Supported stock checks, deliveries and end-of-shift close-down tasks",
        "Helped reduce order errors by double-checking custom requests and allergens",
        "Provided friendly service, upsold add-ons where appropriate, and handled customer queries calmly",
      ]}

      /* =========================
         QUALIFICATIONS SECTION
      ========================== */
      qualificationsTitle="Qualifications & Training (Helpful in the UK)"
      qualifications={[
        "Level 2 Food Safety / Hygiene (if applicable)",
        "Allergen awareness training (if applicable)",
        "Coffee training or latte art (optional)",
        "Basic maths and confident communication (always valuable)",
      ]}

      /* =========================
         EXTRA VALUE SECTION
      ========================== */
      tipsTitle="How to Make Your Barista CV Stand Out"
      tips={[
        "Mention speed and accuracy during peak rush times (e.g., weekends, mornings)",
        "Show hygiene and cleaning habits clearly (this matters a lot in food/drink roles)",
        "Include upselling or customer service wins if you have them",
        "Keep your CV to 1 page if you have under 3–4 years’ experience",
        "Use bullet points and avoid long paragraphs",
        "If you’ve worked with allergens, say you understand safe procedures and accurate labelling",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES (ranking fuel)
      ========================== */
      mistakesTitle="Common Barista CV Mistakes to Avoid"
      mistakes={[
        "Listing only duties (“made coffees”) instead of showing pace/accuracy (rush periods, consistency, reduced errors)",
        "Not mentioning hygiene standards, cleaning routines, or food safety awareness",
        "Forgetting to include POS/till experience (it’s a big part of the job)",
        "Skipping allergen awareness (especially if you handled food or custom orders)",
        "Using long paragraphs instead of short, scannable bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ (more long-tail coverage)
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a barista CV?",
          a: "Include espresso-based drink preparation, milk steaming, customer service, POS/till use, hygiene/cleaning routines, teamwork, speed under pressure, and accurate order handling (including allergens). If you have food safety training, list it clearly.",
        },
        {
          q: "How long should a barista CV be in the UK?",
          a: "Aim for 1 page if you’re entry-level or have under 3–4 years’ experience. Use a short personal statement, a focused skills section, and bullet points for experience to keep it easy to scan.",
        },
        {
          q: "How do I write a barista CV with no experience?",
          a: "Focus on transferable skills: customer service, reliability, teamwork, handling pressure, and attention to detail. Use examples from retail, hospitality, volunteering, or school/work placements, and highlight willingness to learn and strong hygiene habits.",
        },
        {
          q: "Do I need food hygiene training on my barista CV?",
          a: "If you have it, yes — add it under Qualifications/Training. If you don’t, you can still mention hygiene awareness and cleaning routines in your experience or skills section.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS CLUSTER
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV Example (UK)" },
        { href: "/cv-examples/sales-assistant-cv-example-uk", label: "Sales Assistant CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
        { href: "/cv-examples/cv-for-16-year-old-uk", label: "CV for 16 Year Old (UK)" },
      ]}

      /* =========================
         CALL TO ACTION
      ========================== */
      ctaTitle="Create Your Own Barista CV"
      ctaBody="Use our UK CV builder to create a recruiter-ready barista CV in minutes. Choose a clean template, customise your sections, and download a polished PDF instantly."
      ctaButton="Build Your Barista CV Now"
      ctaHref="/cv"
    />
  );
}