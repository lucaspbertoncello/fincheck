import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";

interface IInputCurrencyProps {
  error?: string;
  value?: string;
  onChange: (value: string) => void;
}

export function InputCurrency({ error, onChange, value }: IInputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        value={value}
        thousandSeparator="."
        decimalSeparator=","
        className="w-full text-3xl font-bold tracking-[-1px] text-gray-800 outline-none"
        onChange={(event) => onChange(event.target.value)}
      />

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
