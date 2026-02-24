import CvExamplePage from "../../components/CvExamplePage";

export default function BaristaCvExampleUk() {
  const title =
    "Barista CV Example UK (2026) | Free Template, Skills & No Experience Tips | CVCraft Classroom";

  const description =
    "See a professional Barista CV example for the UK (2026). Includes a personal statement, key skills, full CV sample, salary guidance, no experience tips, common mistakes, FAQs, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/barista-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}

      h1="Barista CV Example (UK 2026) + Free Barista CV Template"

      intro="A strong barista CV shows customer service, speed, cleanliness and consistency. UK employers want someone who can handle busy rushes, take accurate orders, keep standards high, and support the team during peak periods.

Use this barista CV example as a template: keep it simple — contact details, a short personal statement, key skills, bullet-point experience, and qualifications (food hygiene/allergen training if you have it)."

      profileTitle="Example Personal Statement for a Barista CV"
      profileText="Friendly and energetic Barista with 2+ years’ experience in high-footfall cafés. Skilled in espresso-based drinks, milk texturing, POS systems and maintaining excellent hygiene standards. Known for fast service during peak hours, accurate order handling and creating a welcoming customer experience."

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

      qualificationsTitle="Qualifications & Training (Helpful in the UK)"
      qualifications={[
        "Level 2 Food Safety / Hygiene (if applicable)",
        "Allergen awareness training (if applicable)",
        "Coffee training or latte art (optional)",
        "Basic maths and confident communication",
      ]}

      /* 🔥 FULL CV EXAMPLE BLOCK */

      fullExampleTitle="Full Barista CV Example (Copy & Adapt)"

      fullExampleText={`

Emily Carter  
Bristol  
07123 456789  
emilycarter@email.com  

Personal Statement  
Friendly and reliable Barista with 2 years’ experience in busy high-street cafés. Confident preparing espresso-based drinks, maintaining hygiene standards, and delivering fast, friendly customer service during peak hours.

Key Skills  
• Espresso and milk texturing  
• POS/till systems and cash handling  
• Customer service and upselling  
• Allergen awareness  
• Cleaning routines and hygiene compliance  
• Working efficiently under pressure  

Work Experience  
Barista — Riverside Coffee House  
Bristol | 2023 – Present  

• Prepared 150+ drinks per shift during busy weekend periods  
• Maintained consistent drink quality and presentation  
• Processed payments accurately and balanced tills at close  
• Followed strict food hygiene and allergen procedures  
• Supported stock checks and daily opening/closing routines  

Qualifications  
Level 2 Food Safety  
Allergen Awareness Training  

References available on request.
`}

      /* 🔥 SALARY SECTION */

      extraSectionTitle="Barista Salary in the UK (2026)"

      extraSectionText={`

Barista salaries in the UK typically range from £10.50–£12.50 per hour depending on location and experience.

• Entry-level baristas: £10.50–£11.50 per hour  
• Experienced baristas: £11.50–£12.50+ per hour  
• London and major cities may offer higher hourly rates  

Supervisory responsibilities or specialist coffee training (latte art, machine calibration) can increase earning potential.
`}

      /* 🔥 NO EXPERIENCE SECTION */

      secondExtraSectionTitle="How to Write a Barista CV With No Experience"

      secondExtraSectionText={`

If you have no barista experience, focus on transferable skills:

• Customer service and communication  
• Handling pressure during busy periods  
• Teamwork and reliability  
• Basic maths and cash handling  
• Hygiene awareness  

Mention retail, hospitality, volunteering, or school activities that show responsibility and teamwork. Employers often value attitude and work ethic as much as experience for entry-level café roles.
`}

      tipsTitle="How to Make Your Barista CV Stand Out"
      tips={[
        "Mention speed and accuracy during peak rush times",
        "Show hygiene and cleaning habits clearly",
        "Include upselling or customer service wins",
        "Keep your CV to 1 page if under 3–4 years’ experience",
        "Use bullet points instead of long paragraphs",
        "Highlight allergen awareness if applicable",
      ]}

      mistakesTitle="Common Barista CV Mistakes to Avoid"
      mistakes={[
        "Listing only duties instead of showing speed or consistency",
        "Not mentioning hygiene standards or food safety",
        "Forgetting POS/till experience",
        "Skipping allergen awareness",
        "Using long, hard-to-scan paragraphs",
      ]}

      faqItems={[
        {
          q: "What skills should I put on a barista CV?",
          a: "Include espresso preparation, milk steaming, POS/till use, hygiene routines, teamwork, speed under pressure, and customer service skills.",
        },
        {
          q: "How long should a barista CV be in the UK?",
          a: "One page is ideal for entry-level or junior baristas. Keep formatting clean and easy to scan.",
        },
        {
          q: "How do I write a barista CV with no experience?",
          a: "Focus on transferable skills like customer service, reliability, handling pressure, and hygiene awareness.",
        },
        {
          q: "Do I need food hygiene training on my CV?",
          a: "If you have it, list it clearly under qualifications. If not, mention hygiene awareness and cleaning routines.",
        },
      ]}

      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV Example (UK)" },
        { href: "/cv-examples/sales-assistant-cv-example-uk", label: "Sales Assistant CV Example (UK)" },
        { href: "/cv-examples/customer-service-cv-example-uk", label: "Customer Service CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
        { href: "/cv-examples/cv-for-16-year-old-uk", label: "CV for 16 Year Old (UK)" },
      ]}

      ctaTitle="Create Your Own Barista CV"
      ctaBody="Use our UK CV builder to create a recruiter-ready barista CV in minutes. Choose a clean template, customise your sections, and download a polished PDF instantly."
      ctaButton="Build Your Barista CV Now"
      ctaHref="/cv"
    />
  );
}