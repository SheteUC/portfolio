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
    title: "Wardline",
    imgSrc: "project-imgs/wardline-screenshot.png",
    code: "https://github.com/SheteUC/Wardline",
    projectLink: "#",
    tech: ["Python", "Twilio Voice API", "LLM Agents", "PostgreSQL"],
    description:
      "HIPAA-compliant patient intake system with stateful call flows automating scheduling for high-volume medical offices, reducing manual administrative triage by 40%.",
  },
  {
    title: "MarketGap",
    imgSrc: "placeholder",
    code: "https://github.com/SheteUC/market-gap",
    projectLink: "#",
    tech: ["Python", "Letta (MemGPT)", "React", "TypeScript", "REST APIs"],
    description:
      "Scalable multi-agent research engine automating market data scraping from 10+ concurrent sources with stateful architecture and RESTful API endpoints.",
  },
  {
    title: "RegImpact AI",
    imgSrc: "project-imgs/regimpactai-screenshot.png",
    code: "https://github.com/SheteUC/RegImpact-AI",
    projectLink: "https://regimpact-ai.vercel.app/",
    tech: ["Python", "Perplexity API", "Vector Embeddings", "React"],
    description:
      "RAG-powered healthcare regulatory intelligence tool processing complex federal regulations into actionable JSON insights for small medical practices.",
  },
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
    imgSrc: "placeholder",
    code: "https://github.com/Jayko001/market-report",
    projectLink: "#",
    tech: ["Python", "Pandas", "Scrapy", "Excel"],
    description:
      "Competitor analysis system generating investor-ready documentation from raw financial data.",
  },
  {
    title: "MedicAi Platform",
    imgSrc: "placeholder",
    code: "https://github.com/SheteUC/medicai",
    projectLink: "#",
    tech: ["React", "Django", "PubMed API", "PostgreSQL"],
    description:
      "Clinical decision support system analyzing patient histories to surface relevant medical research.",
  },
];
