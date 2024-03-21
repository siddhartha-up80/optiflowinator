import Hero from "@/components/Hero";
import CodeEditor from "@/components/CodeEditor";
import AIEditor from "@/components/AIEditor";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className="flex flex-col gap-20 p-4">
        <Hero />

        <Card className="max-w-4xl mx-auto mt-20 flex justify-center w-full flex-col gap-8 md:px-0 hover:shadow-xl hover:shadow-lime-400">
          <CardHeader>
            <CardTitle>
              <span className="text-xl justify-center flex items-center">
                Step 1
              </span>
              <CardDescription className="justify-center items-center flex">
                <span className="text-2xl font-semibold">
                  Insert your code!
                </span>
              </CardDescription>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CodeEditor showcopy={true} />
          </CardContent>
        </Card>

        <Card id="code" className="hover:shadow-xl hover:shadow-lime-400">
          <CardHeader className="flex flex-col">
            <CardTitle className="text-center gap-2 flex flex-col">
              <span className="text-xl">Step 2</span>
            </CardTitle>
            <CardDescription className="flex justify-center items-center">
              <span className="text-2xl font-semibold text-center">
                Get your code explained or optimised by AI
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 md:px-6 md:pb-7 pb-0">
            <AIEditor />
          </CardContent>
        </Card>
      </main>
    </>
  );
}
