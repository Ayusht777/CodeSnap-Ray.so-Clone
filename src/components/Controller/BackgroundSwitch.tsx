import { Switch } from "@/components/ui/switch";
import { useStore } from "@/Store/Store";
const BackgroundSwitch = () => {
  const showBackground = useStore((state) => state.showBackground);
  return (
    <div>
      <label htmlFor="Background-Switch" className="mb-2 block text-xs font-medium text-neutral-400">
        Background
      </label>
      <Switch
        checked={showBackground}
        onCheckedChange={(checked) => {
          useStore.setState({ showBackground: checked });
        }}
        className="my-1.5  data-[state=checked]:bg-blue-300 [&>span]:data-[state=checked]:bg-white "
      ></Switch>
    </div>
  );
};

export default BackgroundSwitch;
