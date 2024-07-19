import { Switch } from "@/components/ui/switch";
import { useStore } from "@/Store/Store";

const DarkModeSwitch = () => {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <div className="flex flex-col items-start ">
      <label htmlFor="DarkMode-Switch" className="mb-2 block text-xs font-medium text-neutral-400 whitespace-nowrap">
        DarkMode
      </label>
      <Switch
        checked={darkMode}
        onCheckedChange={(checked) => {
          useStore.setState({ darkMode: checked });
        }}
        className="my-1.5 data-[state=checked]:bg-blue-300 [&>span]:data-[state=checked]:bg-white"
      />
    </div>
  );
};

export default DarkModeSwitch;
