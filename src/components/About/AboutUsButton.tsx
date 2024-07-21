import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import fav from "@/assets/favicon.png";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

type KeyBindingProps = {
  description: string;
  keyChar: string;
};
const KeyBinding = ({ description, keyChar }: KeyBindingProps) => {
  return (
    <DialogDescription>
      <div className="flex justify-between">
        <div>{description}</div>
        <div className="flex size-7 items-center justify-center rounded-md bg-neutral-800">
          {keyChar}
        </div>
      </div>
    </DialogDescription>
  );
};

const AboutUsButton = () => {
  const keyBindingsData = [
    { description: "Open random themes", keyChar: "R" },
    { description: "Change themes", keyChar: "T" },
    { description: "Change font style", keyChar: "F" },
    { description: "Change font size", keyChar: "S" },
    { description: "Change padding", keyChar: "P" },
    { description: "Toggle background", keyChar: "B" },
    { description: "Toggle dark mode", keyChar: "D" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className={cn(
            "hidden items-center space-x-2 bg-transparent hover:bg-neutral-700/63 md:flex",
          )}
          variant={"secondary"}
        >
          <InfoCircledIcon className="size-4" />
          <span>About</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "dark flex max-w-3xl gap-8 bg-neutral-900/90 [&>button]:text-gray-400 [&>button]:hover:text-gray-400",
        )}
      >
        <div className="flex flex-1 flex-col gap-3 leading-relaxed [&>p]:text-[13px] [&>p]:text-white/70">
          <DialogHeader>
            <DialogTitle className="text-base text-gray-200">About</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Ray.so Clone is a Code to Image tool inspired by Raycast's (Ray.so),
            which allows you to create beautiful screenshots of your code.
          </DialogDescription>
          <DialogDescription>
            Pick a theme from a range of syntax colors and backgrounds, select
            the language of your code, choose between light or dark mode, and
            customize your font style for a personalized coding experience.
          </DialogDescription>
          <DialogDescription>
            Customize the padding and when you're ready, click export image in
            the top-right corner to save the image as a png, svg ,webp or share
            a link to your code.
          </DialogDescription>
          <DialogDescription>
            You can also change the image resolution in the export menu.
          </DialogDescription>
          <DialogHeader>
            <DialogTitle className="text-base text-gray-200">
              Inspired by Ray.so
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            This project is inspired by the original
            <a
              className="px-1 text-gray-200 underline"
              href="https://github.com/raycast/ray-so"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ray.so by Raycast
            </a>
            & Our implementation is open source and
            <a
              className="pl-1 text-gray-200 underline"
              href="https://github.com/Ayusht777/Ray.so-Clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              available on Github
            </a>
            .
          </DialogDescription>

          <div className="mt-32 pt-2">
            <span className="pointer-events-none relative -bottom-4 -left-7 opacity-30"></span>
            <div className="mt-2 flex items-center justify-between gap-2">
              <a href="/" className="group flex items-center gap-1.5">
                <img src={fav} alt="" className="size-4" />
                <span className="text-[13px] font-semibold text-gray-200">
                  Made by
                  <Badge
                    variant="default"
                    className={cn(
                      "ml-2 rounded-full bg-red-900/35 text-red-500 hover:bg-red-900/63",
                    )}
                  >
                    Ayush Talesara
                  </Badge>
                </span>
              </a>
              <div className="flex gap-3">
                <a
                  href=""
                  className="text-neutral-400 transition-colors hover:text-neutral-300"
                >
                  <GitHubLogoIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-talesara-898655242/"
                  className="text-neutral-400 transition-colors hover:text-neutral-300"
                >
                  <LinkedInLogoIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border-[1px] border-neutral-800"></div>

        <div className="flex flex-1 flex-col gap-3 text-[13px] leading-relaxed [&>p]:text-gray-400">
          <DialogHeader>
            <DialogTitle className="text-base text-gray-200">
              Shortcuts
            </DialogTitle>
          </DialogHeader>

          {keyBindingsData.map((binding, index) => (
            <KeyBinding
              key={index}
              description={binding.description}
              keyChar={binding.keyChar}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutUsButton;
