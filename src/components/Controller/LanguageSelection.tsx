import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { languages } from "@/Option";
import { useStore } from "@/Store/Store";
import { MagicWandIcon } from "@radix-ui/react-icons";

const LanguageSelection = () => {
  const language = useStore((state) => state.Language);
  const autoDetectLanguage = useStore((state) => state.autoDetectLanguage);

  const handleChange = (selectedLanguage:string) => {
    selectedLanguage === "auto-detect"
      ? useStore.setState({ autoDetectLanguage: true, Language: "plaintext" })
      : useStore.setState({
          autoDetectLanguage: false,
          Language: selectedLanguage,
        });
  };

  console.log(language, autoDetectLanguage);
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Language
      </label>
      <Select value={language} onValueChange={handleChange}>
        <SelectTrigger className="flex w-36 items-center justify-between">
          <SelectValue>
            <div className="flex items-center gap-x-2">
              {autoDetectLanguage && <MagicWandIcon />}
              <span className="-mt-0.5 flex items-center capitalize">
                {autoDetectLanguage ? `${language} (auto) ` : language}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>

        <SelectContent className={cn("dark bg-neutral-900/90")}>
          <SelectItem value="auto-detect">Auto Detect</SelectItem>
          {Object.entries(languages).map(([name, lang]) => (
            <SelectItem key={lang} value={lang} className="capitalize">
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelection;
