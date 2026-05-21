import React from 'react';
import {
  Pressable,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { CalcButtonProps } from '../types/calculator';

const CalcButton = ({
  label,
  onPress,
  type,
  darkMode,
}: CalcButtonProps) => {
  const isOperator = type === 'operator';
  const isFunction = type === 'function';

  const bgColor = isOperator
    ? '#4B5EFC'
    : darkMode
    ? '#2E2F38'
    : '#FFFFFF';

  const textColor = isOperator
    ? '#FFFFFF'
    : darkMode
    ? '#FFFFFF'
    : '#000000';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
        transform: [{ scale: pressed ? 0.96 : 1 }],
      })}
    >
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: bgColor,
          width: 75,
          height: 75,
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {label === '⌫' ? (
          <Ionicons
            name="backspace-outline"
            size={30}
            color={textColor}
          />
        ) : (
          <Text
            style={{
              color: textColor,
              fontSize: isOperator ? 34 : 30,
              fontWeight: '400',
            }}
          >
            {label}
          </Text>
        )}
      </Pressable>
    </Pressable>
  );
};

export default CalcButton;