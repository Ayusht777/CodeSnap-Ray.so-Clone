import { useState } from "react";
import { useStore } from "@/Store/Store";
import { toBlob, toPng, toCanvas } from "html-to-image";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  ImageIcon,
  DownloadIcon,
  ClipboardIcon,
  Link2Icon,
  SizeIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

export type ExportButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>;
};

const ExportButton = ({ targetRef }: ExportButtonProps) => {
  const title = useStore((state) => state.title);
  const [size, setSize] = useState<number>(2);

  const handleError = (action: string) => {
    toast.error(`Failed to ${action}`, { duration: 3000 });
  };

  const copyImage = async () => {
    try {
      const imgBlob = await toBlob(targetRef.current as HTMLElement, {
        pixelRatio: size,
      });
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": imgBlob as Blob }),
      ]);
      toast.success("Image copied to clipboard");
    } catch (error) {
      handleError("copy image");
    }
  };

  const copyLink = () => {
    try {
      const state = useStore.getState();
      const queryParams = new URLSearchParams(state as any).toString();
      navigator.clipboard.writeText(`${location.href}?${queryParams}`);
      toast.success("Link copied to clipboard", { duration: 3000 });
    } catch (error) {
      handleError("copy link");
    }
  };

  const saveImage = async (name: string, format: "PNG" | "SVG" | "WEBP") => {
    try {
      const options = { pixelRatio: size };
      let imageUrl: string;

      if (format === "WEBP") {
        const canvas = await toCanvas(
          targetRef.current as HTMLElement,
          options,
        );
        imageUrl = canvas.toDataURL("image/webp");
      } else {
        imageUrl = await toPng(targetRef.current as HTMLElement, options);
      }

      const fileName: string = `${name}_${size}x.${format.toLowerCase()}`;

      const a = document.createElement("a");
      a.href = imageUrl;
      a.download = fileName;
      a.click();
      toast.success(`Image saved as ${fileName}`, { duration: 3000 });
    } catch (error) {
      handleError("save image");
    }
  };

  const renderSizeMenuItem = (sizeOption: number) => (
    <DropdownMenuItem
      onClick={() => setSize(sizeOption)}
      className={cn(
        "relative flex items-center gap-x-1.5 py-1.5 pl-8 pr-2",
        size === sizeOption && `text-white`,
      )}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {size === sizeOption && <DotFilledIcon />}
      </span>
      {sizeOption}x
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <div>
        <Button
          size="sm"
          className={cn(
            "box-border gap-x-1.5 rounded-l-md rounded-r-none border-[1px] border-red-900/70 bg-red-900/35 font-semibold text-red-500 hover:bg-red-900/63",
          )}
          variant="secondary"
          onClick={() => saveImage(title, "PNG")}
        >
          <DownloadIcon />
          <span>Export</span>
          <span className="hidden md:block">Image</span>
        </Button>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            className={cn(
              "box-border gap-x-1.5 rounded-l-none border-b-[1px] border-r-[1px] border-t-[1px] border-red-900/63 bg-red-900/35 text-red-500 hover:bg-red-900/63",
            )}
            variant="secondary"
          >
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent className={cn("dark mr-4 text-gray-400")}>
        {["PNG", "SVG", "WEBP"].map((format) => (
          <DropdownMenuItem
            key={format}
            className="gap-x-2"
            onClick={() => saveImage(title, format as "PNG" | "SVG" | "WEBP")}
          >
            <ImageIcon />
            Save {format}
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem className="gap-x-2" onClick={copyImage}>
          <ClipboardIcon />
          Copy Image
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2" onClick={copyLink}>
          <Link2Icon />
          Copy URL
        </DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2">
              <SizeIcon className="mt-0.5" />
              <span>Size</span>
              <span>{`${size}x`}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className={cn("dark mr-2 text-gray-400")}>
                {[2, 4, 6].map(renderSizeMenuItem)}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportButton;
