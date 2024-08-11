export function Add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  let sumOfNumbers = numbers;

  //* Check if there is a custom delimiter
  if (numbers.startsWith("//")) {
    const delimitEndIdx = numbers.indexOf("\n");
    //* Extract the custom delimiter
    delimiter = numbers.substring(2, delimitEndIdx);
    //* Extract the numbers part after the delimiter line
    sumOfNumbers = numbers.substring(delimitEndIdx + 1);
  }

  //* Replace newline characters with the delimiter
  sumOfNumbers = sumOfNumbers.replace(/\n/g, delimiter);

  //* Split the string by the delimiter into an array of numbers
  let numberArr = sumOfNumbers.split(delimiter);

  //* Check for negative numbers
  let negativeNumbers = numberArr.filter((num) => parseInt(num) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  //* Convert the array elements from strings to integers and sum them up
  let sum = numberArr.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
}
