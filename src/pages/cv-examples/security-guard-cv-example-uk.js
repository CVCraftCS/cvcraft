import CvExamplePage from "../../components/CvExamplePage";

export default function SecurityGuardCvExampleUk() {
  const title =
    "Security Guard CV Example UK (2026 Guide) | Free Template & Tips | CVCraft Classroom";
  const description =
    "See a professional security guard CV example for the UK. Includes key skills, profile summary, employment history tips, and a free CV builder to create your own in minutes.";
  const canonical =
    "https://www.cvcraftclassroom.com/cv-examples/security-guard-cv-example-uk";

  return (
    <CvExamplePage
      title={title}
      description={description}
      canonical={canonical}
      h1="Security Guard CV Example (UK)"
      intro="A strong security CV shows vigilance, professionalism, and incident handling. Employers look for calm decision-making, clear communication, and the ability to follow procedures."
      profileText="Professional and alert Security Guard with 3+ years’ experience providing front-line security for retail and commercial sites. Skilled in access control, patrols, incident reporting, and customer interaction. Known for staying calm under pressure and resolving issues safely and professionally."
      skillsTitle="Key Skills for a Security Guard CV"
      skills={[
        "Access control and visitor management",
        "Patrols and site checks",
        "Incident reporting and documentation",
        "Conflict management and de-escalation",
        "CCTV monitoring (if applicable)",
        "Radio communication and teamwork",
        "Customer service and professionalism",
        "Following site procedures and H&S",
      ]}
      jobTitle="Security Officer — SecureGuard UK"
      jobMeta="Nottingham | 2022 – Present"
      bullets={[
        "Completed regular patrols and security checks to reduce risk on site",
        "Controlled access, checked IDs, and maintained visitor logs",
        "Responded to incidents calmly and produced accurate written reports",
        "Worked closely with site management and emergency services when needed",
      ]}
      qualifications={[
        "SIA Door Supervisor / Security Guard Licence (if applicable)",
        "First Aid at Work (optional)",
        "Conflict Management training (optional)",
      ]}
      ctaTitle="Create Your Own Security Guard CV"
      ctaBody="Use our UK CV builder to create a recruiter-friendly security CV in minutes. Choose a clean template, add your experience, and download a polished PDF."
      ctaButton="Build Your Security CV Now"
      ctaHref="/cv"
    />
  );
}
