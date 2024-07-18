import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import logo from "@/assets/favicon.png";
import ExportButton from "@/components/Controller/ExportButton";
import { ExportButtonProps } from "@/components/Controller/ExportButton";
const Navbar = ({ targetRef }: ExportButtonProps) => {
  return (
    <nav className="flex w-full items-center justify-end bg-neutral-900 pl-4 pr-5 py-2">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex w-full items-center justify-end gap-x-2">
        <Button
          className="hover:bg-neutral-700/63 flex items-center space-x-2"
          variant={"default"}
        >
          <InfoCircledIcon className="size-4" />
          <span>About</span>
        </Button>
        <ExportButton targetRef={targetRef} />
      </div>
    </nav>
  );
};

export default Navbar;
