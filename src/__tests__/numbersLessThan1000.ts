import numbersLessThan1000 from "../numbersLessThan1000";

describe("numbersLessThan1000", () => {
  const result = numbersLessThan1000();
  it("should return a list of numbers less than 1000", () => {
    // check that the result is an array
    expect(Array.isArray(result)).toBe(true);
  });

  it("should check the first few prime numbers", () => {
    // Check the first few prime numbers
    expect(result.slice(0, 5)).toEqual([2, 3, 5, 7, 11]);
  });

  it("should not contain non-prime numbers in the list", () => {
    expect(result).not.toContain(4);
    expect(result).not.toContain(9);
    expect(result).not.toContain(25);
  });

  it("should contain specific prime numbers", () => {
    expect(result).toContain(103);
    expect(result).toContain(113);
    expect(result).toContain(173);
  });

  it("total count should be 168", () => {
    expect(result.length).toBe(168);
  });
});
