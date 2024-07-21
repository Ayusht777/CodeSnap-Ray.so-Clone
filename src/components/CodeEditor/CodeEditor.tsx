import { cn } from "@/lib/utils";
import { codeSnippets, fonts } from "@/Option";
import flourite from "flourite";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import { useStore } from "@/Store/Store";
import React, { useEffect } from "react";

const CodeEditor = () => {
  const {
    darkMode,
    title,
    code,
    Language,
    fontStyle,
    fontSize,
    autoDetectLanguage,
  } = useStore((state) => state);

  useEffect(() => {
    const randomCodeSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

    useStore.setState({
      code: randomCodeSnippet.code,
    });
  }, []);

  useEffect(() => {
    if (autoDetectLanguage) {
      const { language } = flourite(code, { noUnknown: true });
      const detectedLanguage = language.toLowerCase();
      useStore.setState({ Language: detectedLanguage || "plaintext" });
    }
  }, [autoDetectLanguage, code]);

  return (
    <div
      className={cn(
        "min-w-[380px] rounded-lg border-2 shadow-2xl",
        darkMode
          ? "border-gray-600/40 bg-black/75"
          : "border-gray-200/40 bg-white/75",
      )}
    >
      <header className="grid grid-cols-6 items-center gap-3 px-4 py-2.5">
        <div className="flex gap-x-1.5">
          <div className="size-3 rounded-full bg-red-500"></div>
          <div className="size-3 rounded-full bg-yellow-500"></div>
          <div className="size-3 rounded-full bg-green-500"></div>
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <input
            type="text"
            value={title}
            placeholder={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              useStore.setState({ title: e.target.value })
            }
            spellCheck={false}
            onClick={(e) => {
              if (e.target instanceof HTMLInputElement) {
                e.target.select();
              }
            }}
            className="bg-transparent text-center text-sm font-medium text-gray-400 focus:outline-none"
          />
        </div>
      </header>
      <div
        className={cn(
          "px-4 pb-4 transition-all duration-300 ease-in-out",
          darkMode
            ? "brightness-110"
            : "saturate-20 text-gray-800 brightness-50",
        )}
      >
        <Editor
          value={code}
          onValueChange={(code) => useStore.setState({ code })}
          highlight={(code) =>
            hljs.highlight(code, {
              language: Language.toLowerCase() || "plaintext",
            }).value
          }
          style={{
            fontFamily: fonts[fontStyle]?.name,
            fontSize: fontSize,
          }}
          textareaClassName="focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
