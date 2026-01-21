import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About Me" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
      <div className="space-y-4">
        <Reveal>
          <p className="leading-relaxed text-zinc-300">
            I specialize in building AI-powered healthcare solutions and intelligent automation systems. Recently, I&apos;ve been working on HIPAA-compliant patient intake platforms, multi-agent research engines, and RAG-based regulatory intelligence tools that transform how medical practices operate.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-zinc-300">
            My experience spans roles like Senior Venture Analyst and Controls Engineering Co-op, where I&apos;ve combined technical expertise with business insight to deliver scalable solutions. I like turning complex problems into practical applications.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-zinc-300">
            Beyond coding, I organize events like the RevolutionUC Hackathon and mentor aspiring developers. I&apos;m currently seeking full-time opportunities where I can leverage LLMs, multi-agent systems, and modern web technologies to build products that make a real impact.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-indigo-300">
              <span>My Links</span>
              <AiOutlineArrowRight />
            </div>
            <MyLinks />
          </div>
        </Reveal>
      </div>
        <Stats />
      </div>
    </section>
  );
};
