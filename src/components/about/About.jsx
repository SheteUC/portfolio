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
            {/* <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
              O
            </span> */}
            Over the past few years, I&apos;ve worked on a mix of projects, from building websites to creating automation systems, which helped me learn how to solve tough problems. I&apos;ve held roles like Senior Venture Analyst and Controls Engineering Co-op, where I worked with teams to tackle real-world challenges and deliver results.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-zinc-300">
            Outside of work, I enjoy organizing events like the RevolutionUC Hackathon and mentoring others. These experiences have taught me a lot about teamwork and leadership while giving me a chance to give back to my community.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed text-zinc-300">
            I&apos;m now looking for Spring/Summer 2025 co-op opportunities to keep learning and making a difference. If you&apos;re looking for someone who loves solving problems and bringing new ideas to life, let&apos;s connect!
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
