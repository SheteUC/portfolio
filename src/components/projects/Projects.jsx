import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Dr. Shailaja's Website",
    imgSrc: "project-imgs/drshailajashete-com-screenshot.png",
    code: "https://www.github.com",
    projectLink: "https://www.drshailajashete.com/",
    tech: ["Astro", "React", "Bootstrap", "Whatsapp API"],
    description:
      "Professional healthcare website built to showcase medical expertise and patient resources.",
  },
  {
    title: "Model of Models.io",
    imgSrc: "project-imgs/modelofmodels-io-screenshot.png",
    code: "https://github.com/ucdscenter/learning_machines_app",
    projectLink: "https://modelofmodels.io",
    tech: ["React", "d3.js", "Bootstrap", "Django", "PostgreSQL"],
    description:
      "AI/ML deployment platform enabling modular integration of predictive models into business workflows.",
  },
  {
    title: "Market Report Automation",
    imgSrc: "project-imgs/market-report-screenshot.png",
    code: "https://github.com/Jayko001/market-report",
    projectLink: "javascript:void(0)",
    tech: ["Python", "Pandas", "Scrapy", "Excel"],
    description:
      "Competitor analysis system generating investor-ready documentation from raw financial data.",
  },
  {
    title: "MedicAi Platform",
    imgSrc: "project-imgs/medicai-screenshot.png",
    code: "https://github.com/SheteUC/medicai",
    projectLink: "javascript:void(0)",
    tech: ["React", "Django", "PubMed API", "PostgreSQL"],
    description:
      "Clinical decision support system analyzing patient histories to surface relevant medical research.",
  },
];
