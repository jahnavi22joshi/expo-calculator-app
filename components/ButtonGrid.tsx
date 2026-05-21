import React from 'react';
import { View } from 'react-native';
import CalcButton from './CalcButton';

interface Props {
  darkMode: boolean;
  onPress: (value: string) => void;
}

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['.', '0', '⌫', '='],
];

const ButtonGrid = ({ darkMode, onPress }: Props) => {
  return (
    <View className="mt-4">
      {buttons.map((row, rowIndex) => (
        <View
          key={rowIndex}
          className="flex-row justify-center gap-2 mb-2"
        >
          {row.map((btn) => {
            const type =
              ['÷', '×', '-', '+', '='].includes(btn)
                ? 'operator'
                : ['AC', '+/-', '%', '⌫'].includes(btn)
                ? 'function'
                : 'number';

            return (
              <CalcButton
                key={btn}
                label={btn}
                type={type}
                darkMode={darkMode}
                onPress={() => onPress(btn)}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default ButtonGrid;