import { useCallback } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { fontSize } from "@/Option";
import { useStore } from "@/Store/Store";
import { useHotkeys } from "react-hotkeys-hook";

const FontSizeSelection = () => {
  const currentFontSize = useStore((state) => state.fontSize);

  const fontSizes = Object.values(fontSize);
  const currentIndex = fontSizes.indexOf(currentFontSize);

  const traverseFontSize = useCallback(() => {
    const newIndex = (currentIndex + 1) % fontSizes.length;
    useStore.setState({ fontSize: fontSizes[newIndex] });
  }, [currentIndex, fontSizes]);

  useHotkeys('s', traverseFontSize, { preventDefault: true });

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Font Size
      </label>
      <Select
        value={currentFontSize.toString()}
        onValueChange={(value) =>
          useStore.setState({ fontSize: parseInt(value) })
        }
      >
        <SelectTrigger className="flex w-36 items-center justify-between capitalize">
          <SelectValue placeholder="Select Font Size"></SelectValue>
        </SelectTrigger>

        <SelectContent className={cn("dark bg-neutral-900/90")}>
          {Object.entries(fontSize).map(([size, value]) => (
            <SelectItem
              key={size}
              value={value.toString()}
              className="capitalize"
            >
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FontSizeSelection;
