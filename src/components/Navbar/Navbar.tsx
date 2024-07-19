
import logo from "@/assets/favicon.png";
import ExportButton from "@/components/Controller/ExportButton";
import { ExportButtonProps } from "@/components/Controller/ExportButton";

import AboutUsButton from "@/components/About/AboutUsButton";

const Navbar = ({ targetRef }: ExportButtonProps) => {
  return (
    <nav className="flex w-full items-center justify-end bg-neutral-900 py-2 pl-4 pr-5">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex w-full items-center justify-end gap-x-2">
        <AboutUsButton />
        
        <ExportButton targetRef={targetRef} />
      </div>
    </nav>
  );
};

export default Navbar;
