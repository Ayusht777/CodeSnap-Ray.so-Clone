import { Switch } from "@/components/ui/switch";
import { useStore } from "@/Store/Store";
import { useHotkeys } from "react-hotkeys-hook";
import { useCallback } from "react";

const BackgroundSwitch = () => {
  const showBackground = useStore((state) => state.showBackground);

  const toggleBackground = useCallback(() => {
    useStore.setState((state) => ({ showBackground: !state.showBackground }));
  }, []);

  useHotkeys("b", toggleBackground, { preventDefault: true });

  return (
    <div className="flex flex-col">
      <label
        htmlFor="background-switch"
        className="mb-2 text-xs font-medium text-neutral-400"
      >
        Background
      </label>
      <Switch
        id="background-switch"
        checked={showBackground}
        onCheckedChange={toggleBackground}
        className="my-1.5 data-[state=checked]:bg-blue-300 [&>span]:data-[state=checked]:bg-white"
        aria-label="Toggle background"
        aria-checked={showBackground}
        role="switch"
      />
    </div>
  );
};

export default BackgroundSwitch;
