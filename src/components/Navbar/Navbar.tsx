import { lazy, Suspense } from 'react';
import logo from "@/assets/favicon.png";
import ExportButton from "@/components/Controller/ExportButton";
import { ExportButtonProps } from "@/components/Controller/ExportButton";

const AboutUsButton = lazy(() => import("@/components/About/AboutUsButton"));

const Navbar = ({ targetRef }: ExportButtonProps) => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <nav className="flex w-full items-center justify-end bg-neutral-900 py-2 pl-4 pr-5">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex w-full items-center justify-end gap-x-2">
        {!isMobile && (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUsButton />
          </Suspense>
        )}
        <ExportButton targetRef={targetRef} />
      </div>
    </nav>
  );
};

export default Navbar;
