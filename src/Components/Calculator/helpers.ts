export const calculate = (firstValue: number, secondValue: number, operation: string) => {
  switch (operation) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case 'x':
      return firstValue * secondValue;
    case '÷':
      return firstValue / secondValue;
    case '%':
      return firstValue % secondValue;
    case '=':
      return secondValue;
    default:
      return secondValue;
  }
};


export const formatDisplay = (value: string) => {
  const str = String(value);
  if (str.length > 9) {
    if (str.includes('.')) {
      return parseFloat(value).toFixed(9 - str.split('.')[0].length);
    } else {
      return parseFloat(value).toExponential(2);
    }
  }
  return isNaN(parseFloat(value)) ? '0' : str;
};
