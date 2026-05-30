export const data = {
  name: "Kunver Sudhanshu",
  title: ".NET Full-Stack Developer",
  tagline: "Building real-time industrial automation systems where data accuracy and uptime directly impact steel manufacturing output.",
  location: "Jamshedpur, Jharkhand",
  email: "kunversudhanshu333@gmail.com",
  phone: "+91 96518 61001",
  linkedin: "https://linkedin.com/in/kunver-sudhanshu",
  github: "https://github.com/kunver333",

  summary: ".NET Full-Stack Developer with 3+ years of experience building real-time industrial automation systems at Tata Steel. Specializing in ASP.NET Core APIs, React.js dashboards, and Oracle SQL — primarily in high-availability production environments where data accuracy and uptime directly impact steel manufacturing output.",

  experience: [
    {
      role: "Software Developer C2",
      company: "napaSoft",
      client: "Tata Steel Automation Division",
      period: "July 2025 – Present",
      location: "Jamshedpur, Jharkhand",
      current: true,
      bullets: [
        "Architected and implemented a centralized RESTful API for user authentication and role-based authorization, powering all Level 2 systems across the organization.",
        "Built supporting database structures (Users, Roles, Units, Permissions) in Oracle SQL, ensuring scalable, secure, and efficient access control.",
        "Improved authentication reliability by 40% and reduced onboarding/setup time for new systems by 30%.",
        "Participated in code reviews and contributed unit tests for key modules, supporting the team's code quality standards."
      ],
      metrics: [{ label: "Auth Reliability", value: "+40%" }, { label: "Onboarding Speed", value: "+30%" }]
    },
    {
      role: "Software Developer C1",
      company: "napaSoft",
      client: "Tata Steel Automation Division",
      period: "May 2023 – June 2025",
      location: "Jamshedpur, Jharkhand",
      current: false,
      bullets: [
        "Worked across multiple production sectors including BOF (Basic Oxygen Furnace), Conarc, and Caster, each having distinct data-handling and process-visualization requirements, while maintaining 99% uptime.",
        "Created dashboards using CanvasJS and Highcharts featuring multi-axis charts, live updating (Line/Column charts, Box-and-Whisker Charts, Range Bar Charts) to visualize parameters like HeatID, Materials, and Heat status.",
        "Reduced process monitoring time for operators by 40% through targeted dashboard improvements.",
        "Built reusable React.js components for complex UIs leveraging props to render multiple instances dynamically, resulting in a 50% reduction in duplicate code."
      ],
      metrics: [{ label: "Process Monitoring", value: "-40%" }, { label: "Code Duplication", value: "-50%" }, { label: "Uptime", value: "99%" }]
    }
  ],

  projects: [
    {
      name: "SMS Level-2 System",
      full: "Steel Melting Shop Level-2 System",
      description: "High-performance industrial reporting and monitoring system for large-scale steel manufacturing datasets with real-time dashboard capabilities.",
      bullets: [
        "Built high-performance reporting modules for large industrial datasets, leveraging Oracle stored procedures and indexing, supporting advanced filtering by date-time, Heat ID, and Converter/Shell No.",
        "Reduced dashboard memory consumption by more than 50% by destroying stale CanvasJS instances before each refresh and conditionally invoking render methods.",
        "Used C# Dictionary to identify and insert only updated fields into the database during update operations, enhancing performance and reducing redundancy by 30–50%.",
        "Optimized Oracle stored procedures with execution plans and composite indexes, bringing report generation time from 12s to under 2s on datasets exceeding 500K rows."
      ],
      metrics: [
        { label: "Report Generation", value: "12s → <2s" },
        { label: "Memory Usage", value: "-50%" },
        { label: "DB Redundancy", value: "-30–50%" },
        { label: "Dataset Size", value: "500K+ rows" }
      ],
      tech: ["C#", "ASP.NET Core", "Oracle SQL", "CanvasJS", "Highcharts", "React.js"]
    },
    {
      name: "L2 Auto Reporting",
      full: "Level-2 Automated Daily Reporting & OPC Monitoring System",
      description: "End-to-end automation system for shift-based reporting and real-time OPC data monitoring with alerting for operational stakeholders.",
      bullets: [
        "Developed an automation system to export Oracle database records to Excel and automatically email daily reports to stakeholders at each shift (A, B, C) end, ensuring consistent operational visibility.",
        "Used Job Schedulers to fetch data at the end of each shift using stored procedures.",
        "Built background monitoring to check OPC data every 5 minutes and trigger email alerts on anomalies."
      ],
      metrics: [
        { label: "Monitoring Interval", value: "5 min" },
        { label: "Shifts Covered", value: "A, B, C" }
      ],
      tech: ["C#", "ASP.NET Core", "Oracle SQL", "Job Scheduler", "OPC Monitoring", "Excel Export"]
    }
  ],

  skills: {
    "Languages": ["C#", "Python", "SQL", "JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["ASP.NET Core (MVC, WebAPI)", "Entity Framework", "ADO.NET", "React.js", "Bootstrap", "Tailwind CSS", "CanvasJS", "Highcharts", "AJAX", "jQuery"],
    "Databases & Tools": ["Oracle SQL", "SQL Server", "Git", "Azure DevOps (TFS)", "Postman"],
    "Principles": ["SOLID Principles", "RESTful API Design", "DSA", "Unit Testing", "Code Reviews"]
  },

  education: [
    {
      degree: "Master of Computer Applications",
      school: "Central University of Karnataka",
      period: "2020 – 2022"
    },
    {
      degree: "Bachelor of Science (Mathematics)",
      school: "KNIPSS",
      period: "2017 – 2020"
    }
  ],

  certifications: [
    "Udemy — The Complete Web Development Bootcamp",
    "Udemy — The Complete JavaScript Course"
  ],

  achievements: [
    "2-Star rating on CodeChef",
    "2-Star badge in Problem Solving on HackerRank",
    "4-Star badge in SQL on HackerRank"
  ]
};
