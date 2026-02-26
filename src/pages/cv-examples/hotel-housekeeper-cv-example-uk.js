import CvExamplePage from "../../components/CvExamplePage";

export default function HotelHousekeeperCvExampleUk() {

  const title =
    "Hotel Housekeeper CV Example UK (2026) | Cleaning Skills, Duties & Template | CVCraft Classroom";

  const description =
    "Create a strong Hotel Housekeeper CV for UK jobs. Includes a personal statement, housekeeping skills, duties, mistakes to avoid and a professional CV template.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/hotel-housekeeper-cv-example-uk";

  const relatedLinks = [
    {
      href: "/cv-examples/cleaner-cv-example-uk",
      label: "Cleaner CV Example (UK)",
    },
    {
      href: "/cv-examples/kitchen-assistant-cv-example-uk",
      label: "Kitchen Assistant CV Example (UK)",
    },
    {
      href: "/cv-examples/care-assistant-cv-example-uk",
      label: "Care Assistant CV Example (UK)",
    },
    {
      href: "/cv-examples/factory-operative-cv-example-uk",
      label: "Factory Operative CV Example (UK)",
    },
    {
      href: "/cv-examples/no-experience-cv-example-uk",
      label: "No Experience CV Example (UK)",
    },
  ];

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}

      h1="Hotel Housekeeper CV Example (UK 2026) + CV Template"

      intro="A strong Hotel Housekeeper CV shows reliability, attention to detail and the ability to maintain high cleaning standards. UK employers look for candidates who can clean rooms efficiently, follow checklists and maintain hygiene standards while working to deadlines.\n\nA typical UK Housekeeping CV should include: contact details, a short personal statement, key housekeeping skills, work experience with bullet points, and any relevant training."

      profileTitle="Example Personal Statement for a Hotel Housekeeper CV"

      profileText="Reliable and hard-working Hotel Housekeeper with experience maintaining high cleaning standards in busy environments. Skilled in room preparation, linen changes, and maintaining hygiene standards. Known for attention to detail, punctuality and the ability to complete tasks efficiently while following cleaning procedures and safety guidelines."

      skillsTitle="Key Skills to Include on a Hotel Housekeeper CV (UK)"

      skills={[
        "Cleaning hotel rooms to high standards",
        "Changing bed linen and preparing rooms",
        "Bathroom cleaning and sanitation",
        "Following cleaning checklists and procedures",
        "Safe use of cleaning products",
        "Time management and efficiency",
        "Attention to detail",
        "Working independently and in teams",
        "Reporting maintenance issues",
        "Maintaining guest satisfaction standards"
      ]}

      jobTitle="Hotel Housekeeper — Riverside Hotel"

      jobMeta="Leeds | 2023 – Present"

      bullets={[
        "Cleaned and prepared guest rooms to hotel standards within allocated time targets",
        "Changed bed linen and replenished towels and toiletries",
        "Cleaned bathrooms and sanitised surfaces following hygiene procedures",
        "Reported maintenance issues and damaged items to supervisors",
        "Followed daily cleaning checklists to ensure consistent room standards",
        "Maintained tidy storage areas and organised cleaning supplies"
      ]}

      qualificationsTitle="Qualifications & Training (Helpful in the UK)"

      qualifications={[
        "Basic Health & Safety awareness",
        "Manual handling training (helpful)",
        "Cleaning or housekeeping training (optional)",
        "Good communication and reliability"
      ]}

      tipsTitle="How to Make Your Hotel Housekeeper CV Stand Out"

      tips={[
        "Mention how many rooms you cleaned per shift if possible",
        "Show reliability and punctuality clearly",
        "Highlight attention to detail and hygiene standards",
        "Include experience following checklists or routines",
        "Keep the CV simple and easy to read",
        "Use short bullet points instead of long paragraphs"
      ]}

      mistakesTitle="Common Hotel Housekeeper CV Mistakes to Avoid"

      mistakes={[
        "Listing only duties without showing standards or speed",
        "Not mentioning hygiene or cleaning procedures",
        "Using long paragraphs instead of bullet points",
        "Leaving gaps in employment without explanation",
        "Not showing reliability or attendance"
      ]}

      faqItems={[
        {
          q: "What skills should a housekeeper include on a CV?",
          a: "Important housekeeping skills include cleaning standards, attention to detail, time management, changing linen, bathroom sanitation, and following cleaning procedures."
        },
        {
          q: "How long should a housekeeper CV be in the UK?",
          a: "Most housekeeping CVs should be one page long. Experienced candidates can use two pages if necessary."
        },
        {
          q: "What should I include on a housekeeping CV with no experience?",
          a: "Focus on transferable skills like reliability, cleaning, organisation, physical work and attention to detail. Include any practical experience from previous jobs or home responsibilities."
        },
        {
          q: "Do I need qualifications for housekeeping jobs?",
          a: "Most housekeeping jobs do not require qualifications, but showing reliability, cleaning ability and good work ethic is important."
        }
      ]}

      relatedLinksTitle="Related CV Examples"

      relatedLinks={relatedLinks}

      ctaTitle="Create Your Own Housekeeping CV"

      ctaBody="Use our UK CV builder to create a professional housekeeping CV in minutes. Choose a clean template, add your experience and download a polished PDF."

      ctaButton="Build Your CV Now"

      ctaHref="/cv"
    />
  );
}