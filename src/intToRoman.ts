export default function intToRoman(num: number) {
  if (num < 1 || num > 4000) {
    throw new Error("Number out of range");
  }

  const romanNumerals = [
    { value: 1000, roman: "M" },
    { value: 900, roman: "CM" },
    { value: 500, roman: "D" },
    { value: 400, roman: "CD" },
    { value: 100, roman: "C" },
    { value: 90, roman: "XC" },
    { value: 50, roman: "L" },
    { value: 40, roman: "XL" },
    { value: 10, roman: "X" },
    { value: 9, roman: "IX" },
    { value: 5, roman: "V" },
    { value: 4, roman: "IV" },
    { value: 1, roman: "I" },
  ];

  let result = "";
  romanNumerals.forEach(({ value, roman }) => {
    if (num >= value) {
      result += roman;
      num -= value;
    }
  });

  return result;
}
