export function currencyStringToNumber(value: string): number {
  const numericString = value.replace(/\./g, "").replace(",", ".");
  return Number(numericString);
}
