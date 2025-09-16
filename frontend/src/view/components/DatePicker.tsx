import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { capitalizeFirstLetter } from "../../app/utils/capitalizeFirstLetter";

interface IDatePickerProps {
  value: Date;
  onChange(date: Date): void;
}

export function DatePicker({ value, onChange }: IDatePickerProps) {
  return (
    <DayPicker
      animate
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={(date) => onChange(date ?? new Date())}
      classNames={{
        chevron: "!text-red-800",
        button: "!text-gray-700 cursor-pointer w-10 h-10 hover:bg-teal-100",
        today: "bg-gray-100 font-bold text-gray-900 rounded-full",
        selected: "!bg-teal-900 text-white font-medium rounded-full",
      }}
      formatters={{
        formatCaption: (date, options) => {
          return capitalizeFirstLetter(format(date, "LLLL yyyy", options));
        },
      }}
    />
  );
}
