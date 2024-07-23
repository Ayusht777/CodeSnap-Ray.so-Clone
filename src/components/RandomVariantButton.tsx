import { useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TokensIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { themes } from "@/data/Option";
import { useStore } from "@/Store/Store";
import { useHotkeys } from "react-hotkeys-hook";

const RandomVariantButton = () => {
  const [randomThemes, setRandomThemes] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const generateUniqueRandomPairs = (count: number) => {
    const themeKeys = Object.keys(themes);
    const pairs = new Set<string>();

    while (pairs.size < count) {
      const randomTheme =
        themeKeys[Math.floor(Math.random() * themeKeys.length)];
      pairs.add(randomTheme);
    }

    return Array.from(pairs);
  };
  const handleOpenDialog = useCallback(() => {
    if (!isOpen) {
      setRandomThemes(generateUniqueRandomPairs(4));
      setIsOpen(true);
    }
  }, [isOpen]);

  useHotkeys("r", handleOpenDialog, { preventDefault: true });

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Random
      </label>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className={cn("bg-transparent")}
            onClick={handleOpenDialog}
          >
            <TokensIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="dark box-border max-w-md bg-neutral-900/90 text-gray-400">
          <div className={cn("m-2 grid grid-cols-2 gap-2 md:grid-cols-4")}>
            {randomThemes.map((theme) => (
              <DialogClose asChild key={theme}>
                <Button
                  variant="outline"
                  className={cn(
                    "aspect-square h-full w-full",
                    themes[theme].background,
                  )}
                  onClick={() => {
                    useStore.setState({ currentTheme: theme });
                  }}
                />
              </DialogClose>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RandomVariantButton;
