export function Add(numbers) {
  if (!numbers) return 0;

  //* Default delimiters
  let delimiter = /,|\n/;
  let stringNum = numbers;

  //* Check if the string starts with a custom delimiter declaration
  if (numbers.startsWith("//")) {
    const delimiterEndIdx = numbers.indexOf("\n");

    //* Handle cases where delimiter might be multiple characters
    delimiter = new RegExp(numbers.substring(2, delimiterEndIdx), "g");

    //* Remove the delimiter declaration line and use the remaining part of the string
    stringNum = numbers.substring(delimiterEndIdx + 1);
  }

  //* Split numbers based on delimiters
  const numArray = stringNum.split(delimiter).map(Number);

  //* Check for negative numbers
  let negativeNumbers = numArray.filter((num) => parseInt(num) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  //* Return the sum
  return numArray.reduce((acc, num) => acc + parseInt(num), 0);
}
