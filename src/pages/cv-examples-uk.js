// src/pages/cv-examples-uk.js
import Head from "next/head";
import Link from "next/link";

export default function CvExamplesUk() {
  const title =
    "CV Examples UK (2026) | UK CV Templates & Job-Specific Samples | CVCraft Classroom";

  const description =
    "Browse real UK CV examples for warehouse, retail, customer service, care, cleaning, admin and more. See job-specific CV samples, then build a recruiter-ready CV — plus generate a free cover letter in minutes.";

  const canonical = "https://www.cvcraftclassroom.com/cv-examples-uk";
  const ogImage = "https://www.cvcraftclassroom.com/og/og-default.png";

  const faqItems = [
    {
      question: "What is the best CV format in the UK?",
      answer:
        "Most UK CVs follow a clear structure: contact details, personal statement, employment history, education/qualifications, skills, and optional references. Keep formatting clean and tailored to the role.",
    },
    {
      question: "How long should a UK CV be?",
      answer:
        "One page is ideal for entry-level roles. Two pages is acceptable for experienced professionals. Keep content relevant and focused.",
    },
    {
      question: "Do employers prefer a CV or a résumé in the UK?",
      answer:
        "In the UK, employers use the term CV. The structure is similar to a résumé but typically includes more detail on education and job history.",
    },
    {
      question: "Should I include a photo on a UK CV?",
      answer:
        "No. UK CVs typically do not include a photo. Focus on skills and experience instead.",
    },
    {
      question: "Can I use a CV example and copy the structure?",
      answer:
        "Yes. Copy the structure, then rewrite the content so it reflects your real experience and matches the job description.",
    },
    {
      question: "Can I use a CV template in the UK?",
      answer:
        "Yes — a simple CV template is common in the UK. The key is to keep it readable, ATS-friendly, and tailored to the job with relevant skills and keywords.",
    },
    {
      question: "What’s the best CV layout for UK jobs?",
      answer:
        "A clean, single-column layout works best: short profile, skills, experience with bullet points, then qualifications. Avoid heavy graphics that can confuse ATS systems.",
    },
    {
      question: "Should I include certificates like CSCS, DBS, or SIA on my CV?",
      answer:
        "Yes. If a role requires a certificate, list it clearly under Qualifications or Training so employers can confirm you meet the requirements quickly.",
    },
    {
      question: "How do I write a CV for a kitchen assistant job with no experience?",
      answer:
        "Focus on reliability, hygiene awareness, teamwork, and working at pace. Include transferable skills from school, volunteering, or other roles, and keep the layout simple and easy to scan.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const tocGroups = [
    {
      title: "Logistics & Physical Roles",
      items: [
        {
          href: "#warehouse",
          label: "Warehouse CV Example",
          blurb: "Productivity, safety, order volumes",
          pageHref: "/cv-examples/warehouse-cv-example-uk",
        },
        {
          href: "#night-shift-warehouse",
          label: "Night Shift Warehouse Operative CV Example",
          blurb: "Night shift reliability, accuracy, pace",
          pageHref: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        },
        {
          href: "#picker-packer",
          label: "Picker Packer CV Example",
          blurb: "Picking accuracy, scan guns, targets",
          pageHref: "/cv-examples/picker-packer-cv-example-uk",
        },
        {
          href: "#delivery-driver",
          label: "Delivery Driver CV Example",
          blurb: "Reliability, route planning, customer delivery",
          pageHref: "/cv-examples/delivery-driver-cv-example-uk",
        },
        {
          href: "#labourer",
          label: "Labourer CV Example",
          blurb: "Manual work, site support, reliability",
          pageHref: "/cv-examples/labourer-cv-example-uk",
        },
        {
          href: "#construction",
          label: "Construction Labourer CV Example",
          blurb: "Site safety, manual handling, teamwork",
          pageHref: "/cv-examples/construction-labourer-cv-example-uk",
        },
        {
          href: "#groundworker",
          label: "Groundworker CV Example",
          blurb: "Groundworks, CSCS, drainage, site prep",
          pageHref: "/cv-examples/groundworker-cv-example-uk",
        },
        {
          href: "#factory-operative",
          label: "Factory Operative CV Example",
          blurb: "Quality checks, pace, shift reliability",
          pageHref: "/cv-examples/factory-operative-cv-example-uk",
        },
        {
          href: "#production-operative",
          label: "Production Operative CV Example",
          blurb: "Line work, targets, quality, safety",
          pageHref: "/cv-examples/production-operative-cv-example-uk",
        },
        {
          href: "#cleaner",
          label: "Cleaner CV Example",
          blurb: "Checklists, hygiene, reliability",
          pageHref: "/cv-examples/cleaner-cv-example-uk",
        },
        {
          href: "#housekeeper",
          label: "Housekeeper CV Example",
          blurb: "Cleanliness, room standards, detail",
          pageHref: "/cv-examples/housekeeper-cv-example-uk",
        },
        {
          href: "#hotel-housekeeper",
          label: "Hotel Housekeeper CV Example",
          blurb: "Room standards, speed, attention to detail",
          pageHref: "/cv-examples/hotel-housekeeper-cv-example-uk",
        },
      ],
    },
    {
      title: "Retail & Customer-Facing Roles",
      items: [
        {
          href: "#retail",
          label: "Retail CV Example",
          blurb: "Customer service, targets, tills",
          pageHref: "/cv-examples/retail-cv-example-uk",
        },
        {
          href: "#sales-assistant",
          label: "Sales Assistant CV Example",
          blurb: "Customer service, tills, targets",
          pageHref: "/cv-examples/sales-assistant-cv-example-uk",
        },
        {
          href: "#customer-service",
          label: "Customer Service CV Example",
          blurb: "KPIs, resolution, communication",
          pageHref: "/cv-examples/customer-service-cv-example-uk",
        },
        {
          href: "#call-centre",
          label: "Call Centre CV Example",
          blurb: "Inbound/outbound, CRM, KPIs",
          pageHref: "/cv-examples/call-centre-cv-example-uk",
        },
        {
          href: "#barista",
          label: "Barista CV Example",
          blurb: "Fast service, POS, coffee skills",
          pageHref: "/cv-examples/barista-cv-example-uk",
        },
        {
          href: "#kitchen-assistant",
          label: "Kitchen Assistant CV Example",
          blurb: "Prep, hygiene, pace, teamwork",
          pageHref: "/cv-examples/kitchen-assistant-cv-example-uk",
        },
        {
          href: "#receptionist",
          label: "Receptionist CV Example",
          blurb: "Calls, diaries, professionalism",
          pageHref: "/cv-examples/receptionist-cv-example-uk",
        },
      ],
    },
    {
      title: "Care, Support & Education",
      items: [
        {
          href: "#care-assistant",
          label: "Care Assistant CV Example",
          blurb: "Compassion, safeguarding, care records",
          pageHref: "/cv-examples/care-assistant-cv-example-uk",
        },
        {
          href: "#nhs-healthcare-assistant",
          label: "NHS Healthcare Assistant CV Example",
          blurb: "NHS wards, patient care, observations",
          pageHref: "/cv-examples/nhs-healthcare-assistant-cv-example-uk",
        },
        {
          href: "#support-worker",
          label: "Support Worker CV Example",
          blurb: "Person-centred care, handovers",
          pageHref: "/cv-examples/support-worker-cv-example-uk",
        },
        {
          href: "#teaching-assistant",
          label: "Teaching Assistant CV Example",
          blurb: "Classroom support, safeguarding",
          pageHref: "/cv-examples/teaching-assistant-cv-example-uk",
        },
        {
          href: "#security",
          label: "Security Guard CV Example",
          blurb: "Vigilance, reporting, de-escalation",
          pageHref: "/cv-examples/security-guard-cv-example-uk",
        },
      ],
    },
    {
      title: "Office & Admin",
      items: [
        {
          href: "#admin",
          label: "Admin Assistant CV Example",
          blurb: "Accuracy, inboxes, spreadsheets",
          pageHref: "/cv-examples/admin-assistant-cv-example-uk",
        },
      ],
    },
    {
      title: "First Job & Entry Level",
      items: [
        {
          href: "#no-experience",
          label: "No Experience CV",
          blurb: "Transferable skills, education",
          pageHref: "/cv-examples/no-experience-cv-example-uk",
        },
        {
          href: "#age-16",
          label: "CV for 16 Year Old",
          blurb: "First CV, school achievements, reliability",
          pageHref: "/cv-examples/cv-for-16-year-old-uk",
        },
      ],
    },
  ];

  const RELATED = {
    warehouse: [
      {
        href: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        label: "Night Shift Warehouse Operative CV",
      },
      {
        href: "/cv-examples/picker-packer-cv-example-uk",
        label: "Picker Packer CV",
      },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/delivery-driver-cv-example-uk",
        label: "Delivery Driver CV",
      },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/labourer-cv-example-uk",
        label: "Labourer CV",
      },
      {
        href: "/cv-examples/construction-labourer-cv-example-uk",
        label: "Construction Labourer CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "night-shift-warehouse": [
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/picker-packer-cv-example-uk",
        label: "Picker Packer CV",
      },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/delivery-driver-cv-example-uk",
        label: "Delivery Driver CV",
      },
      {
        href: "/cv-examples/security-guard-cv-example-uk",
        label: "Security Guard CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "picker-packer": [
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        label: "Night Shift Warehouse Operative CV",
      },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/delivery-driver-cv-example-uk",
        label: "Delivery Driver CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "delivery-driver": [
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        label: "Night Shift Warehouse Operative CV",
      },
      {
        href: "/cv-examples/picker-packer-cv-example-uk",
        label: "Picker Packer CV",
      },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/construction-labourer-cv-example-uk",
        label: "Construction Labourer CV",
      },
      {
        href: "/cv-examples/security-guard-cv-example-uk",
        label: "Security Guard CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    labourer: [
      {
        href: "/cv-examples/construction-labourer-cv-example-uk",
        label: "Construction Labourer CV",
      },
      {
        href: "/cv-examples/groundworker-cv-example-uk",
        label: "Groundworker CV",
      },
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    construction: [
      { href: "/cv-examples/labourer-cv-example-uk", label: "Labourer CV" },
      {
        href: "/cv-examples/groundworker-cv-example-uk",
        label: "Groundworker CV",
      },
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/delivery-driver-cv-example-uk",
        label: "Delivery Driver CV",
      },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/security-guard-cv-example-uk",
        label: "Security Guard CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    groundworker: [
      { href: "/cv-examples/labourer-cv-example-uk", label: "Labourer CV" },
      {
        href: "/cv-examples/construction-labourer-cv-example-uk",
        label: "Construction Labourer CV",
      },
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/factory-operative-cv-example-uk",
        label: "Factory Operative CV",
      },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "factory-operative": [
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/production-operative-cv-example-uk",
        label: "Production Operative CV",
      },
      {
        href: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        label: "Night Shift Warehouse Operative CV",
      },
      {
        href: "/cv-examples/picker-packer-cv-example-uk",
        label: "Picker Packer CV",
      },
      {
        href: "/cv-examples/construction-labourer-cv-example-uk",
        label: "Construction Labourer CV",
      },
      {
        href: "/cv-examples/delivery-driver-cv-example-uk",
        label: "Delivery Driver CV",
      },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "production-operative": [
      { href: "/cv-examples/factory-operative-cv-example-uk", label: "Factory Operative CV" },
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/picker-packer-cv-example-uk",
        label: "Picker Packer CV",
      },
      {
        href: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        label: "Night Shift Warehouse Operative CV",
      },
      {
        href: "/cv-examples/labourer-cv-example-uk",
        label: "Labourer CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    cleaner: [
      {
        href: "/cv-examples/housekeeper-cv-example-uk",
        label: "Housekeeper CV",
      },
      {
        href: "/cv-examples/hotel-housekeeper-cv-example-uk",
        label: "Hotel Housekeeper CV",
      },
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      {
        href: "/cv-examples/care-assistant-cv-example-uk",
        label: "Care Assistant CV",
      },
      {
        href: "/cv-examples/support-worker-cv-example-uk",
        label: "Support Worker CV",
      },
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    housekeeper: [
      { href: "/cv-examples/hotel-housekeeper-cv-example-uk", label: "Hotel Housekeeper CV" },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "hotel-housekeeper": [
      { href: "/cv-examples/housekeeper-cv-example-uk", label: "Housekeeper CV" },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    retail: [
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/call-centre-cv-example-uk",
        label: "Call Centre CV",
      },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV" },
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "sales-assistant": [
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/call-centre-cv-example-uk",
        label: "Call Centre CV",
      },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV" },
      {
        href: "/cv-examples/cv-for-16-year-old-uk",
        label: "CV for 16 Year Old",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "customer-service": [
      {
        href: "/cv-examples/call-centre-cv-example-uk",
        label: "Call Centre CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "call-centre": [
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    barista: [
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      {
        href: "/cv-examples/cv-for-16-year-old-uk",
        label: "CV for 16 Year Old",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "kitchen-assistant": [
      { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV" },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/housekeeper-cv-example-uk",
        label: "Housekeeper CV",
      },
      {
        href: "/cv-examples/hotel-housekeeper-cv-example-uk",
        label: "Hotel Housekeeper CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    receptionist: [
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/call-centre-cv-example-uk",
        label: "Call Centre CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "care-assistant": [
      {
        href: "/cv-examples/nhs-healthcare-assistant-cv-example-uk",
        label: "NHS Healthcare Assistant CV",
      },
      {
        href: "/cv-examples/support-worker-cv-example-uk",
        label: "Support Worker CV",
      },
      {
        href: "/cv-examples/teaching-assistant-cv-example-uk",
        label: "Teaching Assistant CV",
      },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/security-guard-cv-example-uk",
        label: "Security Guard CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "nhs-healthcare-assistant": [
      {
        href: "/cv-examples/care-assistant-cv-example-uk",
        label: "Care Assistant CV",
      },
      {
        href: "/cv-examples/support-worker-cv-example-uk",
        label: "Support Worker CV",
      },
      {
        href: "/cv-examples/teaching-assistant-cv-example-uk",
        label: "Teaching Assistant CV",
      },
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "support-worker": [
      {
        href: "/cv-examples/nhs-healthcare-assistant-cv-example-uk",
        label: "NHS Healthcare Assistant CV",
      },
      {
        href: "/cv-examples/care-assistant-cv-example-uk",
        label: "Care Assistant CV",
      },
      {
        href: "/cv-examples/teaching-assistant-cv-example-uk",
        label: "Teaching Assistant CV",
      },
      { href: "/cv-examples/cleaner-cv-example-uk", label: "Cleaner CV" },
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "teaching-assistant": [
      {
        href: "/cv-examples/support-worker-cv-example-uk",
        label: "Support Worker CV",
      },
      {
        href: "/cv-examples/care-assistant-cv-example-uk",
        label: "Care Assistant CV",
      },
      {
        href: "/cv-examples/nhs-healthcare-assistant-cv-example-uk",
        label: "NHS Healthcare Assistant CV",
      },
      {
        href: "/cv-examples/admin-assistant-cv-example-uk",
        label: "Admin Assistant CV",
      },
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    security: [
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/night-shift-warehouse-operative-cv-example-uk",
        label: "Night Shift Warehouse Operative CV",
      },
      {
        href: "/cv-examples/delivery-driver-cv-example-uk",
        label: "Delivery Driver CV",
      },
      {
        href: "/cv-examples/support-worker-cv-example-uk",
        label: "Support Worker CV",
      },
      {
        href: "/cv-examples/care-assistant-cv-example-uk",
        label: "Care Assistant CV",
      },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    admin: [
      {
        href: "/cv-examples/receptionist-cv-example-uk",
        label: "Receptionist CV",
      },
      {
        href: "/cv-examples/call-centre-cv-example-uk",
        label: "Call Centre CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "no-experience": [
      {
        href: "/cv-examples/cv-for-16-year-old-uk",
        label: "CV for 16 Year Old",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      {
        href: "/cv-examples/call-centre-cv-example-uk",
        label: "Call Centre CV",
      },
      { href: "/cv-examples/warehouse-cv-example-uk", label: "Warehouse CV" },
      {
        href: "/cv-examples/picker-packer-cv-example-uk",
        label: "Picker Packer CV",
      },
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
    "age-16": [
      {
        href: "/cv-examples/no-experience-cv-example-uk",
        label: "No Experience CV",
      },
      { href: "/cv-examples/retail-cv-example-uk", label: "Retail CV" },
      { href: "/cv-examples/barista-cv-example-uk", label: "Barista CV" },
      {
        href: "/cv-examples/kitchen-assistant-cv-example-uk",
        label: "Kitchen Assistant CV",
      },
      {
        href: "/cv-examples/sales-assistant-cv-example-uk",
        label: "Sales Assistant CV",
      },
      {
        href: "/cv-examples/customer-service-cv-example-uk",
        label: "Customer Service CV",
      },
      { href: "/cv-template-uk", label: "UK CV Template" },
    ],
  };

  function RelatedExamples({ anchorKey }) {
    const items = RELATED[anchorKey] || [];
    if (!items.length) return null;

    return (
      <div className="mt-5 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-slate-100">
          Related CV examples
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={`${anchorKey}-${it.href}`}
              href={it.href}
              className="rounded-xl bg-black/20 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10 transition hover:bg-black/30"
            >
              {it.label} →
            </Link>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/cv"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Build your CV →
          </Link>
          <Link
            href="/cover-letter"
            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-2.5 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            Free cover letter →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <main className="min-h-screen bg-slate-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="text-sm text-slate-400">
            <Link
              href="/"
              className="underline underline-offset-4 hover:text-white"
            >
              Home
            </Link>{" "}
            <span className="mx-2">→</span>
            <span className="text-slate-200">CV Examples UK</span>
          </nav>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            UK CV Examples (2026 Guide)
          </h1>

          <section className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
            <p>
              Looking for real UK CV examples you can actually use? This page
              contains job-specific CV examples for the UK, including warehouse,
              labourer, groundworker, production operative, retail, customer
              service, care assistant, delivery driver, admin, cleaning, and
              more.
            </p>

            <p>
              Each example follows the correct UK CV format and shows you how to
              structure your personal statement, employment history, skills, and
              qualifications clearly. Whether you&apos;re applying for your
              first job or updating your CV for a new role, these examples help
              you write a professional, recruiter-friendly CV.
            </p>

            <p>
              If you&apos;d prefer to generate your CV automatically using a
              clean, modern template, you can use our{" "}
              <Link
                href="/cv"
                className="underline underline-offset-4 hover:text-white"
              >
                UK CV builder
              </Link>{" "}
              or try our{" "}
              <Link
                href="/cover-letter"
                className="underline underline-offset-4 hover:text-white"
              >
                free cover letter generator
              </Link>{" "}
              to complete your application.
            </p>
          </section>

          <section className="mt-10 rounded-3xl bg-black/20 p-6 ring-1 ring-white/10">
            <h2 className="text-xl font-bold">Most Popular CV Examples</h2>
            <p className="mt-2 text-slate-300">
              Quick links to high-intent UK roles and formats.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                className="rounded-xl bg-black/20 px-4 py-3 ring-1 ring-white/10 transition hover:bg-black/30"
                href="/cv-examples/kitchen-assistant-cv-example-uk"
              >
                Kitchen Assistant CV →
              </Link>
              <Link
                className="rounded-xl bg-black/20 px-4 py-3 ring-1 ring-white/10 transition hover:bg-black/30"
                href="/cv-examples/labourer-cv-example-uk"
              >
                Labourer CV →
              </Link>
              <Link
                className="rounded-xl bg-black/20 px-4 py-3 ring-1 ring-white/10 transition hover:bg-black/30"
                href="/cv-examples/groundworker-cv-example-uk"
              >
                Groundworker CV →
              </Link>
              <Link
                className="rounded-xl bg-black/20 px-4 py-3 ring-1 ring-white/10 transition hover:bg-black/30"
                href="/cv-examples/production-operative-cv-example-uk"
              >
                Production Operative CV →
              </Link>
            </div>
          </section>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cv"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Build your CV now →
            </Link>

            <Link
              href="/cover-letter"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-6 py-3 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              Free cover letter →
            </Link>

            <Link
              href="/cv-template-uk"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-6 py-3 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              UK CV template →
            </Link>
          </div>

          <section className="mt-10 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-bold">Jump to a CV example</h2>
                <p className="mt-2 text-slate-300">
                  Grouped by job type so it&apos;s easy to find what you need.
                </p>
              </div>

              <a
                href="#examples"
                className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                Skip to full examples ↓
              </a>
            </div>

            <div className="mt-6 space-y-6">
              {tocGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl bg-black/20 p-5 ring-1 ring-white/10"
                >
                  <h3 className="text-base font-semibold text-slate-100">
                    {group.title}
                  </h3>

                  <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <div className="rounded-xl bg-black/20 p-4 ring-1 ring-white/10 transition hover:bg-black/30">
                          <a href={item.href} className="block">
                            <span className="font-semibold">{item.label}</span>
                            <span className="mt-1 block text-slate-300">
                              {item.blurb}
                            </span>
                          </a>

                          {item.pageHref ? (
                            <Link
                              href={item.pageHref}
                              className="mt-3 inline-block text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                            >
                              View guide →
                            </Link>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">How to Use These UK CV Examples</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              The best way to use a CV example is to copy the structure, then
              rewrite the wording so it matches your real experience. Aim for:
              clear headings, short bullet points, and proof you can do the job.
              If you&apos;re stuck on layout and wording, you can generate a
              clean CV quickly with the{" "}
              <Link
                href="/cv"
                className="underline underline-offset-4 hover:text-white"
              >
                CVCraft builder
              </Link>
              .
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">What Makes a Good UK CV?</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              A strong UK CV should be clear, structured, and easy to scan. Most
              recruiters spend less than 30 seconds reviewing a CV. That means
              formatting and clarity matter just as much as content.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>Keep it to 1–2 pages maximum</li>
              <li>Use clear section headings</li>
              <li>Include measurable achievements where possible</li>
              <li>Tailor it to the job role</li>
              <li>Use UK spelling and formatting</li>
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">Common UK CV Mistakes to Avoid</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>
                Using a messy layout that&apos;s hard to scan instead of clear
                headings
              </li>
              <li>Writing long paragraphs instead of short bullet points</li>
              <li>Not tailoring the personal statement to the role</li>
              <li>Missing key keywords from the job description</li>
              <li>Forgetting certificates or tickets like CSCS, DBS, SIA, or first aid</li>
            </ul>
          </section>

          <section className="mt-14" id="examples">
            <h2 className="text-2xl font-bold">UK CV Example Types</h2>

            <div className="mt-6 space-y-12">
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-bold">
                  Logistics &amp; Physical Roles
                </h3>
                <p className="mt-2 text-slate-300">
                  Roles focused on reliability, pace, safety, and practical work.
                  Use numbers where possible, such as drops per day, orders per
                  shift, or sites worked.
                </p>

                <div className="mt-6 space-y-8">
                  <div id="warehouse">
                    <h4 className="text-xl font-semibold">
                      Warehouse CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on productivity, order accuracy, safety awareness,
                      and teamwork. Mention daily order volumes, stock control
                      systems, and physical workload.
                    </p>
                    <Link
                      href="/cv-examples/warehouse-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View warehouse CV guide →
                    </Link>

                    <RelatedExamples anchorKey="warehouse" />
                  </div>

                  <div id="night-shift-warehouse">
                    <h4 className="text-xl font-semibold">
                      Night Shift Warehouse Operative CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Emphasise night shift reliability, accuracy under pressure,
                      and the ability to hit targets with minimal supervision.
                      Mention picking, packing, scanning, loading, and safety
                      checks if relevant.
                    </p>
                    <Link
                      href="/cv-examples/night-shift-warehouse-operative-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View night shift warehouse operative CV guide →
                    </Link>

                    <RelatedExamples anchorKey="night-shift-warehouse" />
                  </div>

                  <div id="picker-packer">
                    <h4 className="text-xl font-semibold">
                      Picker Packer CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on picking accuracy, speed, scanning systems, meeting
                      KPIs or targets, and keeping quality high. Mention any
                      experience with returns, dispatch, or stock rotation.
                    </p>
                    <Link
                      href="/cv-examples/picker-packer-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View picker packer CV guide →
                    </Link>

                    <RelatedExamples anchorKey="picker-packer" />
                  </div>

                  <div id="delivery-driver">
                    <h4 className="text-xl font-semibold">
                      Delivery Driver CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight safe driving, timekeeping, route planning, proof
                      of delivery, and good customer service. Mention licence
                      type, van experience, and any multi-drop work.
                    </p>
                    <Link
                      href="/cv-examples/delivery-driver-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View delivery driver CV guide →
                    </Link>

                    <RelatedExamples anchorKey="delivery-driver" />
                  </div>

                  <div id="labourer">
                    <h4 className="text-xl font-semibold">
                      Labourer CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight physical reliability, manual handling, teamwork,
                      following instructions, and keeping work areas safe and
                      organised. Mention site support, loading, unloading, and
                      any tickets if you have them.
                    </p>
                    <Link
                      href="/cv-examples/labourer-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View labourer CV guide →
                    </Link>

                    <RelatedExamples anchorKey="labourer" />
                  </div>

                  <div id="construction">
                    <h4 className="text-xl font-semibold">
                      Construction Labourer CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on site safety, manual handling, assisting trades,
                      and reliability. Mention CSCS if you have it.
                    </p>
                    <Link
                      href="/cv-examples/construction-labourer-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View construction labourer CV guide →
                    </Link>

                    <RelatedExamples anchorKey="construction" />
                  </div>

                  <div id="groundworker">
                    <h4 className="text-xl font-semibold">
                      Groundworker CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight groundwork tasks such as drainage, trenching,
                      kerbing, concreting, site preparation, and working safely
                      around plant and utilities. Mention CSCS and any plant or
                      streetworks tickets if relevant.
                    </p>
                    <Link
                      href="/cv-examples/groundworker-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View groundworker CV guide →
                    </Link>

                    <RelatedExamples anchorKey="groundworker" />
                  </div>

                  <div id="factory-operative">
                    <h4 className="text-xl font-semibold">
                      Factory Operative CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight pace, accuracy, quality checks, and safe working.
                      Mention shift reliability, line work, targets, and any
                      basic machine operation you&apos;ve done.
                    </p>
                    <Link
                      href="/cv-examples/factory-operative-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View factory operative CV guide →
                    </Link>

                    <RelatedExamples anchorKey="factory-operative" />
                  </div>

                  <div id="production-operative">
                    <h4 className="text-xl font-semibold">
                      Production Operative CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Emphasise production line work, hitting targets, quality
                      control, hygiene or safety procedures, and reliable shift
                      attendance. Mention packaging, machine feeding, or end-of-line
                      checks if relevant.
                    </p>
                    <Link
                      href="/cv-examples/production-operative-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View production operative CV guide →
                    </Link>

                    <RelatedExamples anchorKey="production-operative" />
                  </div>

                  <div id="cleaner">
                    <h4 className="text-xl font-semibold">
                      Cleaner CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight reliability, attention to detail, hygiene
                      standards, and the ability to follow checklists and
                      routines.
                    </p>
                    <Link
                      href="/cv-examples/cleaner-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View cleaner CV guide →
                    </Link>

                    <RelatedExamples anchorKey="cleaner" />
                  </div>

                  <div id="housekeeper">
                    <h4 className="text-xl font-semibold">
                      Housekeeper CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight cleanliness standards, attention to detail, room
                      presentation, and working efficiently to checklists. Mention
                      laundry, restocking, or guest-facing duties where relevant.
                    </p>
                    <Link
                      href="/cv-examples/housekeeper-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View housekeeper CV guide →
                    </Link>

                    <RelatedExamples anchorKey="housekeeper" />
                  </div>

                  <div id="hotel-housekeeper">
                    <h4 className="text-xl font-semibold">
                      Hotel Housekeeper CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight high standards, speed, and attention to detail.
                      Mention room turnaround, checklists, handling guest
                      requests, linen routines, and working to brand standards.
                    </p>
                    <Link
                      href="/cv-examples/hotel-housekeeper-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View hotel housekeeper CV guide →
                    </Link>

                    <RelatedExamples anchorKey="hotel-housekeeper" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-bold">
                  Retail &amp; Customer-Facing Roles
                </h3>
                <p className="mt-2 text-slate-300">
                  Emphasise customer service, speed, accuracy, and hitting
                  targets. Use metrics where possible.
                </p>

                <div className="mt-6 space-y-8">
                  <div id="retail">
                    <h4 className="text-xl font-semibold">
                      Retail CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight customer service, sales targets, cash handling,
                      and teamwork. Quantify performance where possible.
                    </p>
                    <Link
                      href="/cv-examples/retail-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View retail CV guide →
                    </Link>

                    <RelatedExamples anchorKey="retail" />
                  </div>

                  <div id="sales-assistant">
                    <h4 className="text-xl font-semibold">
                      Sales Assistant CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on customer service, till confidence, store
                      standards, and working to targets or KPIs where relevant.
                    </p>
                    <Link
                      href="/cv-examples/sales-assistant-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View sales assistant CV guide →
                    </Link>

                    <RelatedExamples anchorKey="sales-assistant" />
                  </div>

                  <div id="customer-service">
                    <h4 className="text-xl font-semibold">
                      Customer Service CV Example
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Demonstrate communication skills, conflict resolution, and
                      problem solving. Mention KPIs or satisfaction scores.
                    </p>
                    <Link
                      href="/cv-examples/customer-service-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View customer service CV guide →
                    </Link>

                    <RelatedExamples anchorKey="customer-service" />
                  </div>

                  <div id="call-centre">
                    <h4 className="text-xl font-semibold">
                      Call Centre CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Show calm communication, fast systems use, and working to
                      KPIs. Mention CRM tools, note taking, and complaint
                      handling if relevant.
                    </p>
                    <Link
                      href="/cv-examples/call-centre-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View call centre CV guide →
                    </Link>

                    <RelatedExamples anchorKey="call-centre" />
                  </div>

                  <div id="barista">
                    <h4 className="text-xl font-semibold">
                      Barista CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Show speed during rush periods, consistency, customer
                      service, POS confidence, and clean station habits.
                    </p>
                    <Link
                      href="/cv-examples/barista-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View barista CV guide →
                    </Link>

                    <RelatedExamples anchorKey="barista" />
                  </div>

                  <div id="kitchen-assistant">
                    <h4 className="text-xl font-semibold">
                      Kitchen Assistant CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight hygiene, prep work, speed, teamwork, and staying
                      organised during busy service. Mention food safety
                      awareness and keeping stations clean. This is also a strong
                      option for entry-level applicants with no direct experience.
                    </p>
                    <Link
                      href="/cv-examples/kitchen-assistant-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View kitchen assistant CV guide →
                    </Link>

                    <RelatedExamples anchorKey="kitchen-assistant" />
                  </div>

                  <div id="receptionist">
                    <h4 className="text-xl font-semibold">
                      Receptionist CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Show professionalism, call handling, diary management, and
                      confidentiality, plus strong organisation.
                    </p>
                    <Link
                      href="/cv-examples/receptionist-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View receptionist CV guide →
                    </Link>

                    <RelatedExamples anchorKey="receptionist" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-bold">
                  Care, Support &amp; Education
                </h3>
                <p className="mt-2 text-slate-300">
                  Prioritise safeguarding, empathy, accurate records, and clear
                  communication. Mention DBS or training if applicable.
                </p>

                <div className="mt-6 space-y-8">
                  <div id="care-assistant">
                    <h4 className="text-xl font-semibold">
                      Care Assistant CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on compassion, safeguarding awareness, personal
                      care, clear documentation, and supporting vulnerable
                      individuals.
                    </p>
                    <Link
                      href="/cv-examples/care-assistant-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View care assistant CV guide →
                    </Link>

                    <RelatedExamples anchorKey="care-assistant" />
                  </div>

                  <div id="nhs-healthcare-assistant">
                    <h4 className="text-xl font-semibold">
                      NHS Healthcare Assistant CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Emphasise patient-centred care, NHS ward routines,
                      supporting nurses, basic observations if trained,
                      infection control, and clear communication with patients
                      and families.
                    </p>
                    <Link
                      href="/cv-examples/nhs-healthcare-assistant-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View NHS healthcare assistant CV guide →
                    </Link>

                    <RelatedExamples anchorKey="nhs-healthcare-assistant" />
                  </div>

                  <div id="support-worker">
                    <h4 className="text-xl font-semibold">
                      Support Worker CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on person-centred care, accurate record keeping,
                      safe handovers, and promoting independence.
                    </p>
                    <Link
                      href="/cv-examples/support-worker-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View support worker CV guide →
                    </Link>

                    <RelatedExamples anchorKey="support-worker" />
                  </div>

                  <div id="teaching-assistant">
                    <h4 className="text-xl font-semibold">
                      Teaching Assistant CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Emphasise classroom support, behaviour support strategies,
                      and strong safeguarding awareness. DBS is typically
                      required.
                    </p>
                    <Link
                      href="/cv-examples/teaching-assistant-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View teaching assistant CV guide →
                    </Link>

                    <RelatedExamples anchorKey="teaching-assistant" />
                  </div>

                  <div id="security">
                    <h4 className="text-xl font-semibold">
                      Security Guard CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight vigilance, incident reporting, access control,
                      and calm conflict management. Mention SIA if applicable.
                    </p>
                    <Link
                      href="/cv-examples/security-guard-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View security guard CV guide →
                    </Link>

                    <RelatedExamples anchorKey="security" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-bold">Office &amp; Admin</h3>
                <p className="mt-2 text-slate-300">
                  Highlight organisation, accuracy, communication, and
                  confidence with systems such as email, calendars, and
                  spreadsheets.
                </p>

                <div className="mt-6 space-y-8">
                  <div id="admin">
                    <h4 className="text-xl font-semibold">
                      Admin Assistant CV Example (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Highlight accuracy, email management, spreadsheets,
                      document control, and strong organisation under deadlines.
                    </p>
                    <Link
                      href="/cv-examples/admin-assistant-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View admin assistant CV guide →
                    </Link>

                    <RelatedExamples anchorKey="admin" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-bold">First Job &amp; Entry Level</h3>
                <p className="mt-2 text-slate-300">
                  Perfect if you&apos;re starting out. Focus on reliability,
                  transferable skills, and achievements from school, hobbies,
                  volunteering, or part-time work.
                </p>

                <div className="mt-6 space-y-8">
                  <div id="no-experience">
                    <h4 className="text-xl font-semibold">
                      CV With No Experience (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Emphasise transferable skills, volunteering, education,
                      and personal strengths. This is ideal for first jobs and
                      entry-level applications.
                    </p>
                    <Link
                      href="/cv-examples/no-experience-cv-example-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View no experience CV guide →
                    </Link>

                    <RelatedExamples anchorKey="no-experience" />
                  </div>

                  <div id="age-16">
                    <h4 className="text-xl font-semibold">
                      CV for 16 Year Old (UK)
                    </h4>
                    <p className="mt-2 text-slate-300">
                      Focus on school achievements, teamwork, reliability, and
                      a clear personal statement. Perfect for weekend jobs and
                      apprenticeships.
                    </p>
                    <Link
                      href="/cv-examples/cv-for-16-year-old-uk"
                      className="text-sm text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                    >
                      View 16 year old CV guide →
                    </Link>

                    <RelatedExamples anchorKey="age-16" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">Correct UK CV Format</h2>
            <p className="mt-3 leading-relaxed text-slate-300">
              Standard UK CV structure:
            </p>

            <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-300">
              <li>Full Name &amp; Contact Details</li>
              <li>Personal Statement</li>
              <li>Employment History</li>
              <li>Qualifications &amp; Certifications</li>
              <li>Skills</li>
              <li>References (optional)</li>
            </ol>

            <p className="mt-4 leading-relaxed text-slate-300">
              If you want a deeper breakdown of length, layout, and what to
              include, see{" "}
              <Link
                href="/cv-format-uk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                Best CV format (UK)
              </Link>
              .
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold">FAQ</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                >
                  <summary className="cursor-pointer font-semibold text-slate-100">
                    {item.question}
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl bg-white/5 p-8 text-center ring-1 ring-white/10">
            <h2 className="text-2xl font-bold">Ready to Build Your UK CV?</h2>
            <p className="mt-3 text-slate-300">
              Use a structured, recruiter-ready template and generate your CV in
              under 20 minutes.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/cv"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Build CV →
              </Link>

              <Link
                href="/cover-letter"
                className="rounded-xl bg-white/5 px-6 py-3 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Free cover letter →
              </Link>

              <Link
                href="/cv-writing-help"
                className="rounded-xl bg-white/5 px-6 py-3 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                CV Writing Help →
              </Link>
            </div>

            <div className="mt-6 text-sm text-slate-300">
              Also useful:{" "}
              <Link
                href="/cv-template-uk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                UK CV template
              </Link>{" "}
              ·{" "}
              <Link
                href="/cv"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                CV builder
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}