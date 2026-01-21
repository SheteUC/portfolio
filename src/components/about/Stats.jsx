import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Technical Expertise</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            {/* Languages */}
            <Chip>Python</Chip>
            <Chip>TypeScript</Chip>
            <Chip>SQL</Chip>
            <Chip>Java</Chip>
            <Chip>Rust</Chip>
            <Chip>C/C++</Chip>

            {/* Frontend Development */}
            <Chip>React</Chip>
            <Chip>Astro</Chip>
            <Chip>D3.js</Chip>
            <Chip>Bootstrap</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>Next.js</Chip>
            <Chip>Figma</Chip>
            <Chip>Vite</Chip>

            {/* Backend & Database */}
            <Chip>Django</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>RESTful APIs</Chip>
            <Chip>FastAPI</Chip>
            <Chip>Node.js</Chip>
            <Chip>Express.js</Chip>
            <Chip>GraphQL</Chip>
            <Chip>MongoDB</Chip>

            {/* AI, ML & Data Engineering */}
            <Chip>RAG</Chip>
            <Chip>LLM Agents</Chip>
            <Chip>Multi-Agent Systems</Chip>
            <Chip>Vector Embeddings</Chip>
            <Chip>Pandas</Chip>
            <Chip>Scrapy</Chip>

            {/* Cloud, Tools & APIs */}
            <Chip>Docker</Chip>
            <Chip>AWS</Chip>
            <Chip>Azure</Chip>
            <Chip>Postman</Chip>
            <Chip>CI/CD</Chip>
            <Chip>Linux / Bash</Chip>

            {/* Specialized Skills */}
            <Chip>PLC Allen Bradley</Chip>
            <Chip>Rockwell Studio 5000</Chip>
            <Chip>MATLAB</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

