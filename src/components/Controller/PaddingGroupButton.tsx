import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useStore } from "@/Store/Store";
import { useHotkeys } from "react-hotkeys-hook";
import { useCallback, useMemo } from "react";

const PaddingSelector = () => {
  const padding = useStore((state) => state.padding);
  const paddingOptions = useMemo(() => [16, 32, 64, 128], []);
  const setPadding = useCallback(
    (value: number) => useStore.setState({ padding: value }),
    [],
  );
  const traversePadding = useCallback(() => {
    const currentIndex = paddingOptions.indexOf(padding);
    const nextIndex = (currentIndex + 1) % paddingOptions.length;
    setPadding(paddingOptions[nextIndex]);
  }, [padding, setPadding, paddingOptions]);

  useHotkeys("p", traversePadding, { preventDefault: true });

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-xs font-medium text-neutral-400">
        Padding Size
      </label>
      <ToggleGroup
        type="single"
        value={padding.toString()}
        onValueChange={(value) => setPadding(Number(value))}
      >
        {paddingOptions.map((size) => (
          <ToggleGroupItem key={size} value={size.toString()}>
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default PaddingSelector;
