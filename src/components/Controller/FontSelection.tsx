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

const FontSelection = () => {
  const fontStyle = useStore((state) => state.fontStyle);

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Font
      </label>
      <Select
        value={fontStyle}
        onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
      >
        <SelectTrigger className="flex w-36 items-center justify-between capitalize">
          <SelectValue placeholder="Select Font"></SelectValue>
        </SelectTrigger>

        <SelectContent className={cn("dark bg-neutral-900/90")}>
          {Object.entries(fonts).map(([fontName]) => (
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
