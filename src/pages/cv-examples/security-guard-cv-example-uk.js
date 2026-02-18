import CvExamplePage from "../../components/CvExamplePage";

export default function SecurityGuardCvExampleUk() {
  const title =
    "Security Guard CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional security guard CV example for the UK. Includes key skills, personal statement example, security job description bullets, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/security-guard-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Security Guard CV Example (UK 2026 Guide)"
      intro="A strong UK security guard CV should show vigilance, professionalism, and calm incident handling. Employers look for someone who can follow procedures, communicate clearly, write accurate reports, and keep people and property safe."
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
      ]}
      jobTitle="Security Officer — SecureGuard UK"
      jobMeta="Nottingham | 2022 – Present"
      bullets={[
        "Completed regular patrols and security checks to reduce risk and maintain site safety standards",
        "Controlled access, checked IDs, managed visitor sign-in, and maintained clear visitor logs",
        "Responded to incidents calmly, de-escalated situations where possible, and produced accurate written reports",
        "Monitored entry points and supported staff and customers with clear directions and professional communication",
        "Worked closely with site management and emergency services when required, following agreed procedures",
      ]}
      qualificationsTitle="Qualifications & Requirements (UK)"
      qualifications={[
        "SIA Door Supervisor Licence or SIA Security Guarding Licence (if applicable)",
        "First Aid at Work (optional but valuable)",
        "Conflict Management / De-escalation training (optional)",
        "Clean DBS check (if required by the site)",
      ]}
      tipsTitle="How to Make Your Security Guard CV Stand Out"
      tips={[
        "Mention the type of sites you’ve worked on (retail, corporate, events, logistics) to show fit",
        "Add measurable details where possible (shift size, patrol frequency, incident reports, access checks)",
        "Highlight report writing and professionalism — employers value clear documentation",
        "Show you understand procedures: access control, emergency protocols, and H&S",
        "If you have an SIA licence, make it visible and clear near the top of your CV",
      ]}
      ctaTitle="Create Your Own Security Guard CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly security CV in minutes. Choose a clean template, add your experience and skills, and download a polished PDF."
      ctaButton="Build Your Security CV Now"
      ctaHref="/cv"
    />
  );
}
