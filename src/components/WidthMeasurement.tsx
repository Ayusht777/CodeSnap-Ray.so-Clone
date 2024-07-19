import { cn } from "@/lib/utils";

type WidthMeasurementProps = {
  showWidth: boolean;
  width: number | "auto";
};

const WidthMeasurement = ({ showWidth, width }: WidthMeasurementProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 text-white transition-opacity mt-1",
        showWidth ? "opacity-100 visible" : "opacity-0 invisible",
      )}
    >
      <div className="flex flex-1 items-center">
        <div className="h-4 w-0.5 bg-white/20" />
        <div className="h-px w-full bg-white/20" />
      </div>
      <span className="text-sm text-neutral-500">{width} px</span>
      <div className="flex flex-1 items-center">
        <div className="h-px w-full bg-white/20" />
        <div className="h-4 w-0.5 bg-white/20" />
      </div>
    </div>
  );
};

export default WidthMeasurement;
