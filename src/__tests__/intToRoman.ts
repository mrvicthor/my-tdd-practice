import intToRoman from "../intToRoman";
describe("intToRoman", () => {
  it("should throw an error for numbers outside the range 1-4000", () => {
    expect(() => intToRoman(0)).toThrow("Number out of range");
    expect(() => intToRoman(-1)).toThrow("Number out of range");
    expect(() => intToRoman(4001)).toThrow("Number out of range");
  });

  it("should convert integers 1-4000 to roman numerals", () => {
    const testCases = [
      { value: 1000, expected: "M" },
      { value: 900, expected: "CM" },
      { value: 500, expected: "D" },
      { value: 400, expected: "CD" },
      { value: 100, expected: "C" },
      { value: 90, expected: "XC" },
      { value: 50, expected: "L" },
      { value: 40, expected: "XL" },
      { value: 10, expected: "X" },
      { value: 9, expected: "IX" },
      { value: 5, expected: "V" },
      { value: 4, expected: "IV" },
      { value: 1, expected: "I" },
    ];

    testCases.forEach(({ value, expected }) => {
      expect(intToRoman(value)).toBe(expected);
    });
  });
});
