import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "@radix-ui/react-icons";
const SwipeIndicator = () => {
  return (
    <div className="absolute top-[calc(100%-9rem)] z-30 w-full text-center md:hidden">
      <Badge className="rounded-full" variant={"secondary"}>
        <span>Swipe right to see more options</span>
        <ArrowRightIcon className="animate-slideRight  mt-0.5" />
      </Badge>
    </div>
  );
};

export default SwipeIndicator;
