import { useState } from 'react';

export const useCalculator = () => {
  const [value, setValue] = useState('0');
  const [expression, setExpression] =
    useState('');

  const [justCalculated, setJustCalculated] =
    useState(false);

  const operators = ['+', '-', '×', '÷', '%'];

  const handlePress = (val: string) => {
    // CLEAR
    if (val === 'AC') {
      setValue('0');
      setExpression('');
      setJustCalculated(false);
      return;
    }

    // BACKSPACE
    if (val === '⌫') {
      if (value.length > 1) {
        setValue(prev => prev.slice(0, -1));
      } else {
        setValue('0');
      }

      return;
    }

    // DECIMAL
    if (val === '.') {
      if (value.includes('.')) return;

      setValue(prev => prev + '.');
      return;
    }

    // OPERATORS
    if (operators.includes(val)) {
      setJustCalculated(false);

      // Prevent operator first
      if (
        expression === '' &&
        value === '0'
      ) {
        return;
      }

      // Replace last operator
      if (
        value === '0' &&
        expression !== ''
      ) {
        const lastChar =
          expression.slice(-1);

        if (operators.includes(lastChar)) {
          setExpression(
            expression.slice(0, -1) + val
          );

          return;
        }
      }

      setExpression(
        expression + value + val
      );

      setValue('0');

      return;
    }

    // EQUALS
    if (val === '=') {
      try {
        const finalExpression =
          (expression + value)
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        const result = eval(finalExpression);

        setValue(String(result));

        setExpression('');

        setJustCalculated(true);
      } catch {
        setValue('Error');
      }

      return;
    }

    // NUMBERS
    if (justCalculated) {
      setValue(val);
      setJustCalculated(false);
      return;
    }

    if (value === '0') {
      setValue(val);
    } else {
      setValue(prev => prev + val);
    }
  };

  return {
    value,
    expression,
    handlePress,
  };
};