import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useStore } from "@/Store/Store";

const PaddingGroupButton = () => {
  const padding = useStore((state) => state.padding);
  const setPadding = (value: number) => useStore.setState({ padding: value });

  const paddingSizes = [16, 32, 64, 128];

  return (
    <div className="">
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Padding Size
      </label>
      <ToggleGroup type="single" value={padding.toString()} onValueChange={(value) => setPadding(parseInt(value))}>
        {paddingSizes.map((size) => (
          <ToggleGroupItem key={size} value={size.toString()} aria-label={`Set padding to ${size}`}>
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default PaddingGroupButton;
