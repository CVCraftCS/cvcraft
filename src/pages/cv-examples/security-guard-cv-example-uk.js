import CvExamplePage from "../../components/CvExamplePage";

export default function SecurityGuardCvExampleUk() {
  const title =
    "Security Guard CV Example UK (2026) | Free Template, SIA Skills & Tips | CVCraft Classroom";

  const description =
    "See a professional Security Guard CV example for the UK (2026). Includes a personal statement, key skills, job bullet points, common mistakes, FAQs, internal links, and a free CV builder.";

  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/security-guard-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Security Guard CV Example (UK 2026) + Free Security CV Template"
      intro="A strong UK security guard CV should show vigilance, professionalism, and calm incident handling. Employers look for someone who can follow procedures, communicate clearly, write accurate reports, and keep people and property safe.\n\nSecurity Guard CV template (UK format): include contact details, a short personal statement, key skills, bullet-point experience, and licences/training (SIA, First Aid, conflict management). Make your SIA licence clear and visible near the top of your CV."
      profileTitle="Example Personal Statement for a Security Guard CV"
      profileText="Professional and alert Security Guard with 3+ years’ experience providing front-line security for retail and commercial sites. Skilled in access control, patrols, incident reporting, and customer interaction. Known for staying calm under pressure, following site procedures, and resolving issues safely and professionally."
      skillsTitle="Key Skills for a Security Guard CV (UK)"
      skills={[
        "Access control and visitor management",
        "Patrols and perimeter/site checks",
        "Incident reporting and accurate documentation",
        "Conflict management and de-escalation",
        "CCTV monitoring (if applicable)",
        "Radio communication and team coordination",
        "Customer service and professionalism",
        "Following site procedures, H&S, and emergency protocols",
        "Emergency response and evacuation support",
        "Observation skills and attention to detail",
      ]}
      jobTitle="Security Officer — SecureGuard UK"
      jobMeta="Nottingham | 2022 – Present"
      bullets={[
        "Completed regular patrols and security checks to reduce risk and maintain site safety standards",
        "Controlled access, checked IDs, managed visitor sign-in, and maintained clear visitor logs",
        "Responded to incidents calmly, de-escalated situations where possible, and produced accurate written reports",
        "Monitored entry points and supported staff and customers with clear directions and professional communication",
        "Worked closely with site management and emergency services when required, following agreed procedures",
        "Escalated security breaches in line with company policy and maintained detailed incident records",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "SIA Door Supervisor Licence or SIA Security Guarding Licence (include badge number if appropriate)",
        "First Aid at Work (optional but valuable)",
        "Conflict Management / De-escalation training (optional)",
        "Clean DBS check (if required by the site)",
      ]}
      tipsTitle="How to Make Your Security Guard CV Stand Out"
      tips={[
        "Mention the type of sites you’ve worked on (retail, corporate, events, logistics, construction)",
        "Add measurable details where possible (patrol frequency, shift length, incidents handled)",
        "Highlight report writing and professionalism — employers value clear documentation",
        "Show you understand procedures: access control, emergency protocols, and H&S",
        "If you have an SIA licence, make it visible and clear near the top of your CV",
        "Mention CCTV or control room experience if relevant",
      ]}

      /* =========================
         ✅ NEW: COMMON MISTAKES
      ========================== */
      mistakesTitle="Common Security Guard CV Mistakes to Avoid"
      mistakes={[
        "Not clearly stating SIA licence status",
        "Being vague about responsibilities (specify patrols, access control, incident reports)",
        "Ignoring report writing skills — documentation is essential",
        "Not mentioning conflict management or de-escalation experience",
        "Using long paragraphs instead of short, practical bullet points",
      ]}

      /* =========================
         ✅ NEW: FAQ SECTION
      ========================== */
      faqItems={[
        {
          q: "What skills should I put on a security guard CV?",
          a: "Include access control, patrols, incident reporting, conflict management, CCTV monitoring (if applicable), customer service, and knowledge of site procedures and emergency protocols.",
        },
        {
          q: "Do I need an SIA licence for a security guard job in the UK?",
          a: "Yes, most security roles require a valid SIA licence (Door Supervisor or Security Guarding). Make sure it is clearly listed on your CV.",
        },
        {
          q: "How long should a security CV be in the UK?",
          a: "1 page is ideal for most candidates. Two pages is acceptable if you have extensive site experience, multiple licences, or supervisory responsibility.",
        },
        {
          q: "Should I include incident reporting experience on my CV?",
          a: "Yes. Employers value accurate documentation and clear communication. Mention report writing and examples of following procedures.",
        },
      ]}

      /* =========================
         ✅ NEW: INTERNAL LINKS
      ========================== */
      relatedLinksTitle="Related CV Examples"
      relatedLinks={[
        { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV Example (UK)" },
        { href: "/cv-examples/delivery-driver-cv-example-uk", label: "Delivery Driver CV Example (UK)" },
        { href: "/cv-examples/support-worker-cv-example-uk", label: "Support Worker CV Example (UK)" },
        { href: "/cv-examples/care-assistant-cv-example-uk", label: "Care Assistant CV Example (UK)" },
        { href: "/cv-examples/no-experience-cv-example-uk", label: "No Experience CV Example (UK)" },
      ]}

      ctaTitle="Create Your Own Security Guard CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly security CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Security CV Now"
      ctaHref="/cv"
    />
  );
}