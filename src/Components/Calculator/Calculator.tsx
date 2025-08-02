import { FC, useState } from 'react';
import "./Calculator.css"
import { calculate, formatDisplay } from './helpers';

interface KeyProps {
  label: string;
  action: () => void;
  className?: string;
}

export const BasicCalculator: FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: number) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };


  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const toggleSign = () => {
    if (display !== '0') {
      setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display);
    }
  };

  const keys: KeyProps[] = [
    { label: 'AC', action: clear, className: 'calculator-operator' },
    { label: '±', action: toggleSign, className: 'calculator-operator' },
    { label: '%', action: () => performOperation('%'), className: 'calculator-operator' },
    { label: '÷', action: () => performOperation('÷'), className: 'calculator-primary--operator' },
    { label: '7', action: () => inputNumber(7) },
    { label: '8', action: () => inputNumber(8) },
    { label: '9', action: () => inputNumber(9) },
    { label: 'x', action: () => performOperation('x'), className: 'calculator-primary--operator' },
    { label: '4', action: () => inputNumber(4) },
    { label: '5', action: () => inputNumber(5) },
    { label: '6', action: () => inputNumber(6) },
    { label: '-', action: () => performOperation('-'), className: 'calculator-primary--operator' },
    { label: '1', action: () => inputNumber(1) },
    { label: '2', action: () => inputNumber(2) },
    { label: '3', action: () => inputNumber(3) },
    { label: '+', action: () => performOperation('+'), className: 'calculator-primary--operator' },
    { label: '0', action: () => inputNumber(0), className: 'calculator-wide--button' },
    { label: '.', action: inputDecimal },
    { label: '=', action: handleEquals, className: 'calculator-primary-operator' },
  ];

  return (
    <div className="calculator">
      <div className="calculator-layout">
        <div className="calculator-display">{formatDisplay(display)}</div>
        <div className="calculator-keyboard">
          {keys.map(({ label, action, className = '' }) => (
            <button key={label} onClick={action} className={`calculator-key ${className}`} >
              <span className='calculator-key--text'>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div >
  );
}
