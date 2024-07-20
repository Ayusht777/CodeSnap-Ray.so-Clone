import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { themes } from "@/Option";
import { useStore } from "@/Store/Store";
import { useHotkeys } from "react-hotkeys-hook";
import { useCallback } from "react";

const ThemeSelection = () => {
  const currentTheme = useStore((state) => state.currentTheme);
  const themeNames = Object.keys(themes);
  const setCurrentTheme = useCallback(
    (theme: string) => useStore.setState({ currentTheme: theme }),
    [],
  );
  const traverseTheme = useCallback(() => {
    const currentIndex = themeNames.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setCurrentTheme(themeNames[nextIndex]);
  }, [currentTheme, setCurrentTheme, themeNames]);

  useHotkeys("t", traverseTheme, { preventDefault: true });

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Theme
      </label>
      <Select value={currentTheme} onValueChange={setCurrentTheme}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Select Theme"></SelectValue>
        </SelectTrigger>
        <SelectContent className={cn("dark bg-neutral-900/90")}>
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem key={name} value={name}>
              <div className="item-center flex gap-x-2">
                <span className="my-auto">
                  <div
                    className={cn("size-4 rounded-full", theme.background)}
                  ></div>
                </span>
                <span className="capitalize">{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelection;
