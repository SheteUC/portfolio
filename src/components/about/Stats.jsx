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
            {/* Programming Languages */}
            <Chip>Python</Chip>
            <Chip>Java</Chip>
            <Chip>JavaScript</Chip>
            <Chip>Rust</Chip>
            <Chip>C/C++</Chip>
            <Chip>Java</Chip>


            {/* Back-End Development */}
            <Chip>Django</Chip>
            <Chip>SQL</Chip>

            {/* Tools & Platforms */}
            <Chip>Git</Chip>
            <Chip>GitHub Actions</Chip>
            <Chip>AWS (EC2, S3)</Chip>
            <Chip>Docker</Chip>

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

