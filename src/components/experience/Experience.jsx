import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Senior Venture Analyst",
    company: "UC Center for Entrepreneurship",
    time: "Fall 2023 - Present",
    location: "Cincinnati, OH",
    description:
      "Collaborated with startups and entrepreneurs to analyze market trends, assess business models, and provide strategic recommendations. Developed automation tools to streamline data collection and reporting processes, improving efficiency by 30%.",
    tech: [
      "Python",
      "Excel (Advanced)",
      "Pitchbook",
      "Data Visualization",
      "Automation Scripts",
    ],
  },
  {
    title: "Controls Engineering Co-op",
    company: "TREW LLC",
    time: "Fall 2023",
    location: "Cincinnati, OH",
    description:
      "Worked on designing and implementing control systems for industrial automation processes. Developed scripts to automate testing procedures and troubleshoot system issues. Gained hands-on experience with hardware integration and PLC programming.",
    tech: [
      "PLC Allen Bradley",
      "Rockwell Studio 5000",
      "Automation Systems",
      "Control Systems",
      "Excel (Advanced)",
      "Documentation",
    ],
  },
  {
    title: "Web Development Co-op",
    company: "UC Digital Scholarship Center",
    time: "Spring 2023",
    location: "Cincinnati, OH",
    description:
      "Built and maintained web applications to support internal business operations. Developed responsive front-end interfaces using React.js and integrated back-end services with Node.js. Improved application performance by optimizing database queries and implementing efficient API endpoints.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "d3.js",
      "Django",
      "Git",
    ],
  },
];

