import Navbar from "@/components/Navbar/Navbar";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import { useStore } from "@/Store/Store";
import { themes, fonts } from "@/Option";
import { cn } from "./lib/utils";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
function App() {
  const EditorWrapperRef = useRef<HTMLDivElement | null>(null);
  const { currentTheme, padding, fontStyle, showBackground } = useStore(
    (state) => state,
  );
  return (
    <div className="dark relative flex min-h-dvh w-full flex-col items-center justify-start bg-neutral-950 text-white">
      <header className="w-full">
        <Navbar targetRef={EditorWrapperRef} />
      </header>
      <main className="flex h-full w-full items-center justify-center">
        <link
          rel="stylesheet"
          href={themes?.[currentTheme].theme}
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href={fonts[fontStyle]?.src}
          crossOrigin="anonymous"
        />
        <div
          className={cn(
            "mb-2 overflow-hidden transition-all ease-out",
            showBackground
              ? themes[currentTheme].background
              : "ring ring-neutral-950/50",
          )}
          style={{
            padding: padding,
          }}
          ref={EditorWrapperRef}
        >
          <CodeEditor />
        </div>
        <Card className="fixed bottom-16 mx-6 bg-neutral-900/90 px-8 py-6 backdrop-blur"></Card>
      </main>
    </div>
  );
}

export default App;
