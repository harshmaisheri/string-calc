import { Add } from "./add";

describe("Add function", () => {
  test("should return 0 for an empty string", () => {
    expect(Add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(Add("1")).toBe(1);
    expect(Add("5")).toBe(5);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(Add("1,2")).toBe(3);
    expect(Add("10,20")).toBe(30);
  });

  test("should handle newlines between numbers", () => {
    expect(Add("1\n2,3")).toBe(6);
    expect(Add("1\n2\n3")).toBe(6);
    expect(Add("1\n2\n3,4")).toBe(10);
  });

  test("should handle a custom delimiter", () => {
    expect(Add("//;\n1;2")).toBe(3);
  });

  test("should throw an exception when a negative number is passed", () => {
    expect(() => Add("1,-2,3")).toThrow("negative numbers not allowed -2");
    expect(() => Add("//;\n-1;-2")).toThrow(
      "negative numbers not allowed -1,-2"
    );
  });

  test("should throw an exception listing all negative numbers", () => {
    expect(() => Add("1,-2,-3,4")).toThrow(
      "negative numbers not allowed -2,-3"
    );
  });
});
