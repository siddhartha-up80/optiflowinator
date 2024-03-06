import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/CodeEditor";
import AIEditor from "@/components/AIEditor";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />

      <section className="max-w-4xl mx-auto mt-20 flex justify-center w-full flex-col gap-8 px-4 md:px-0">
        <div className="text-center gap-2 flex flex-col">
          <span className="text-xl">Step 1</span>
          <span className="text-2xl font-semibold">Insert your code!</span>
        </div>
        <CodeEditor showcopy={true} />
      </section>

      <section id="code">
        <div className="flex flex-col gap-8">
          <div className="text-center gap-2 flex flex-col">
            <span className="text-xl">Step 2</span>
            <span className="text-2xl font-semibold">
              Get your code explained or optimised by AI
            </span>
          </div>
          <AIEditor />
        </div>
      </section>
    </main>
  );
}
