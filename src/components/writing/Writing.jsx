import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import Reveal from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";

const writings = [
  {
    title:
      "From Statistical Pattern Matching to Deliberative Inference: A Critical Review of Reasoning and Faithfulness in Large Language Models",
    type: "Critical Review",
    topic: "LLM reasoning, faithfulness, and inference",
    description:
      "A research review examining the gap between fluent statistical generation and trustworthy reasoning, with a focus on how deliberative inference changes the conversation around model faithfulness.",
    pdfHref:
      "/papers/IntelligentAgentsReviewPaper.pdf",
    pdfDownloadAs:
      "IntelligentAgentsReviewPaper.pdf",
    pdfNote:
      "",
  },
];

export const Writing = () => {
  return (
    <section className="section-wrapper" id="writing">
      <SectionHeader title="Writing" dir="l" />

      <div className="space-y-6">
        {writings.map((writing) => (
          <Reveal key={writing.title} width="w-full">
            <article className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-indigo-500/10 p-3 text-indigo-300">
                  <HiOutlineDocumentText className="text-xl" />
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
                      {writing.type}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-zinc-100 md:text-2xl">
                      {writing.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-400">{writing.topic}</p>

                  <p className="leading-relaxed text-zinc-300">
                    {writing.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:gap-4">
                    <a
                      href={writing.pdfHref}
                      download={writing.pdfDownloadAs}
                      className="relative z-0 inline-flex w-fit items-center gap-2 overflow-hidden rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-1000 before:content-[''] hover:text-zinc-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95"
                    >
                      <AiOutlineDownload className="text-lg" />
                      Download PDF
                    </a>
                    <p className="max-w-xl text-xs leading-relaxed text-zinc-500">
                      {writing.pdfNote}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
