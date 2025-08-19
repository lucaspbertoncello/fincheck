import { ChevronDownIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/lib/cn";
import { DropdownMenu } from "./DropdownMenu";
import { ColorIcon } from "./icons/ColorIcon";
import { useState } from "react";

interface IColorsDropdownInput {
  error?: string;
  className?: string;
}

interface IColor {
  color: string;
  bg: string;
}

const colors: IColor[] = [
  { color: "#868E96", bg: "#F8F9FA" },
  { color: "#FA5252", bg: "#FFF5F5" },
  { color: "#E64980", bg: "#FFF0F6" },
  { color: "#BE4BDB", bg: "#F8F0FC" },
  { color: "#7950F2", bg: "#F3F0FF" },
  { color: "#4C6EF5", bg: "#EDF2FF" },
  { color: "#228BE6", bg: "#E7F5FF" },
  { color: "#15AABF", bg: "#E3FAFC" },
  { color: "#12B886", bg: "#E6FCF5" },
  { color: "#40C057", bg: "#EBFBEE" },
  { color: "#82C91E", bg: "#F4FCE3" },
  { color: "#FAB005", bg: "#FFF9DB" },
  { color: "#FD7E14", bg: "#FFF4E6" },
  { color: "#212529", bg: "#F8F9FA" },
] as const;

export function ColorsDropdownInput({
  error,
  className,
}: IColorsDropdownInput) {
  const [selectedColor, setSelectedColor] = useState<IColor | null>(null);

  function handleSelectColor(color: IColor) {
    setSelectedColor(color);
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={cn(
              "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-gray-700 transition-all outline-none placeholder:text-gray-700 focus:border-gray-800",
              error && "!border-red-900",
              className,
            )}
          >
            Cor
            {selectedColor && (
              <span className="absolute top-1/2 right-3 -translate-y-1/2">
                <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
              </span>
            )}
            {!selectedColor && (
              <div>
                <ChevronDownIcon className="absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2 text-gray-800" />
              </div>
            )}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="grid grid-cols-4">
          {colors.map((color) => (
            <DropdownMenu.Item
              onSelect={() => handleSelectColor(color)}
              key={color.color}
            >
              <ColorIcon bg={color.bg} color={color.color} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-xs text-red-900">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
