import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { fonts } from "@/Option";
import { useStore } from "@/Store/Store";
import { useHotkeys } from "react-hotkeys-hook";
import { useCallback } from "react";

const FontSelection = () => {
  const fontStyle = useStore((state) => state.fontStyle);
  const fontNames = Object.keys(fonts);

  const setFontStyle = useCallback(
    (fontStyle: string) => useStore.setState({ fontStyle }),
    [],
  );

  const traverseFont = useCallback(() => {
    const currentIndex = fontNames.indexOf(fontStyle);
    const nextIndex = (currentIndex + 1) % fontNames.length;
    setFontStyle(fontNames[nextIndex]);
  }, [fontStyle, setFontStyle, fontNames]);

  useHotkeys("f", traverseFont, { preventDefault: true });

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Font
      </label>
      <Select value={fontStyle} onValueChange={setFontStyle}>
        <SelectTrigger className="flex w-36 items-center justify-between capitalize">
          <SelectValue placeholder="Select Font"></SelectValue>
        </SelectTrigger>

        <SelectContent className={cn("dark bg-neutral-900/90")}>
          {fontNames.map((fontName) => (
            <SelectItem key={fontName} value={fontName} className="capitalize">
              {fontName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSelection;
