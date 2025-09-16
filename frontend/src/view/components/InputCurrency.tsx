import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";

interface IInputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

export function InputCurrency({ error, onChange, value }: IInputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        className="w-full text-3xl font-bold tracking-[-1px] text-gray-800 outline-none"
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
