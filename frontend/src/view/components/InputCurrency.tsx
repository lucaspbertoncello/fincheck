import { NumericFormat } from "react-number-format";

export function InputCurrency() {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      defaultValue="0.00"
      className="w-full text-3xl font-bold tracking-[-1px] text-gray-800 outline-none"
    />
  );
}
