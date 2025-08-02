/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  // numbers.sort((a, b) => a - b);
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] !== i) {
  //     return i;
  //   }
  // }
  // return numbers.length;

  const expectedSum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    expectedSum += i;
  }

  const actualSum = numbers.reduce((acc, val) => acc + val, 0);

  return expectedSum - actualSum;
}
