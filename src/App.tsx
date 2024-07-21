import { lazy, Suspense, useRef, useState } from "react";
import { useStore } from "@/Store/Store";
import { themes, fonts } from "@/Option";
import { cn } from "./lib/utils";
import { Resizable } from "re-resizable";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import Navbar from "@/components/Navbar/Navbar";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WidthMeasurement from "@/components/WidthMeasurement";

import ThemeSelection from "@/components/Controller/ThemeSelection";
import LanguageSelection from "@/components/Controller/LanguageSelection";
import FontSelection from "@/components/Controller/FontSelection";
import FontSizeSelection from "@/components/Controller/FontSizeSelection";
import PaddingGroupButton from "@/components/Controller/PaddingGroupButton";
import BackgroundSwitch from "@/components/Controller/BackgroundSwitch";
import DarkModeSwitch from "@/components/Controller/DarkModeSwitch";

const RandomVariantButton = lazy(
  () => import("@/components/RandomVariantButton"),
);

function App() {
  const EditorWrapperRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | "auto">("auto");
  const [showWidth, setShowWidth] = useState<boolean>(false);
  const { currentTheme, padding, fontStyle, showBackground } = useStore(
    (state) => state,
  );

  return (
    <div className="dark flex min-h-dvh w-full flex-col items-center justify-start bg-neutral-950 text-white">
      <main className="flex h-full w-full flex-1 flex-col items-center">
        <header className="w-full">
          <Navbar targetRef={EditorWrapperRef} />
        </header>
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
        <div className="flex w-full flex-1 items-center justify-center overflow-hidden">
          <Resizable
            enable={{ left: true, right: true }}
            minWidth={padding * 2 + 380}
            maxWidth={1024}
            size={{ width: width === "auto" ? "380px" : width, height: "auto" }}
            onResize={(_event, _, elementRef) => {
              setWidth(elementRef.offsetWidth);
              setShowWidth(true);
            }}
            onResizeStop={() => {
              setTimeout(() => setShowWidth(false), 1000);
            }}
            handleComponent={{
              left: (
                <div className="absolute bottom-[calc(50%+5%)] left-0 size-2 cursor-col-resize rounded-full bg-white" />
              ),
              right: (
                <div className="absolute bottom-[calc(50%+5%)] right-0 size-2 cursor-col-resize rounded-full bg-white" />
              ),
            }}
          >
            <div
              className={cn(
                "relative overflow-hidden transition-all ease-out",

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

            <WidthMeasurement showWidth={showWidth} width={width} />
            <div
              className={cn(
                "mx-auto -mt-4 w-fit transition-opacity",
                showWidth || width === "auto"
                  ? "opacity-0 invisible"
                  : "opacity-100 visible",
              )}
            >
              <Button
                size="sm"
                onClick={() => {
                  setWidth("auto");
                  setShowWidth(false);
                }}
                variant={"outline"}
                className={cn("flex items-center gap-x-1")}
              >
                <CrossCircledIcon />
                Reset width
              </Button>
            </div>
          </Resizable>
        </div>

        <Card className="fixed bottom-0 z-10 w-full overflow-x-auto scroll-smooth rounded-none bg-neutral-900/90 px-2.5 py-4 backdrop-blur [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:w-auto md:rounded-xl md:rounded-b-none md:px-6 [&::-webkit-scrollbar]:hidden">
          <CardContent className="flex gap-6 py-0">
            <Suspense fallback={<div>Loading...</div>}>
              <RandomVariantButton />
            </Suspense>
            <ThemeSelection />
            <LanguageSelection />
            <FontSelection />
            <FontSizeSelection />
            <PaddingGroupButton />
            <BackgroundSwitch />
            <DarkModeSwitch />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default App;
