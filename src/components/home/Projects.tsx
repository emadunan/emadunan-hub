import React from "react";
import styles from "./Projects.module.css";
import MainContainer from "../layout/MainContainer";
import Project from "./Project";

const projects = [
  {
    number: "1",
    title: "Amen24.org Platform",
    links: [
      {
        href: "https://github.com/emadunan/amen24",
        label: "💻 GitHub Repository",
      },
      {
        href: "https://amen24.org",
        label: "🌐 Live Website",
      },
      {
        href: "https://play.google.com/store/apps/details?id=yeshua.emadunan.amen24",
        label: "📱 Android App on Google Play",
      },
    ],
    overview: `Amen24.org is a multilingual Christian platform that delivers searchable Bible content, a glossary of theological terms, and a curated digital library through a modern and accessible interface. Authenticated users can save reading progress, manage favorites, and customize their experience across devices. A dual-language display mode supports in-depth study and translation comparison. Built with scalability and internationalization in mind, the platform balances performance with ease of use. I serve as the sole developer and system architect, overseeing the entire technical stack, infrastructure, and ongoing development, while content is managed by a dedicated team of moderators.`,
    features: [
      "Multilingual Bible with intuitive chapter browsing.",
      "Powerful keyword-based Bible search engine.",
      "Glossary of biblical terms with admin CRUD access.",
      "Christian book library with Markdown-based content.",
      "Role-based admin moderation via the admin panel.",
    ],
    technologies: [
      "Next.js", "React", "Redux Toolkit", "NestJS", "TypeORM", "PostgreSQL",
      "Passport.js", "i18next", "React Native", "Expo",
      "SQLite", "OpenAI API", "Sharp", "Multer", "JWT Auth", "Ubuntu", "Nginx", "Github Actions"
    ],
  },
  {
    number: "2",
    title: "MOI.gov.eg – Egyptian Ministry of Interior Portal",
    links: [
      {
        href: "https://moi.gov.eg",
        label: "🌐 Live Website",
      },
    ],
    overview: `The official digital portal of the Egyptian Ministry of Interior, providing critical public access to ministry news, media content, e-services, and internal sector subsites. The platform serves millions of users across Egypt, offering real-time updates, public safety announcements, and secure citizen services such as traffic, ID, and passport applications. As the technical lead, I oversee a cross-functional team delivering a unified web and mobile experience, ensuring high availability, security compliance, and seamless coordination across multiple departments.`,
    features: [
      "Central portal for Ministry news and public announcements.",
      "Dynamic media center with videos and press content.",
      "Subsites for ministry sectors with modular content delivery.",
      "Mobile integration via Android and iOS with shared APIs.",
      "Public e-services for secure citizen interaction.",
    ],
    technologies: [
      "SQL Server", "SharePoint", ".NET", "IIS", "Javascript", "Typescript", "Angular", "Swift", "Java",
    ],
  },
  {
    number: "3",
    title: "Confidential Police Systems",
    links: [],
    overview: `Confidential internal systems developed for law enforcement agencies to manage secure operational and administrative processes. These platforms support mission-critical functions such as case handling, personnel workflows, and internal communications — all under strict national security protocols. While the technical details remain classified, my role included architecting and developing components within highly secure environments, adhering to government standards for data protection, access control, and system resilience.`,
    features: [
      "Secure law enforcement tools",
      "Critical internal infrastructure",
      "Multi-level access control",
      "Government IT compliance",
      "Classified development workflows",
    ],
    technologies: ["Python", "C++", "C#", ".NET", "SQL Server", "Angular", "React", "Redux Toolkit", "NestJS", "PostgreSQL", "TypeORM", "Prisma", "JWT Auth", "Ubuntu", "Nginx", "Docker", "Sqlite", "Kali", "OSINT tools"],
  },
];

const Projects: React.FC = () => {
  return (
    <MainContainer>
      <section className={styles.projects} id="projects">
        <h2 className={styles.title}>Projects</h2>

        {projects.map((project, index) => (
          <Project key={project.number} item={project} />
        ))}
      </section>
    </MainContainer>
  );
};

export default Projects;
