import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  value: string;
  expression: string;
  darkMode: boolean;
}

const Display = ({
  value,
  expression,
  darkMode,
}: Props) => {
  return (
    <View className="w-full h-[180px] justify-end items-end mb-4 px-2">
      {/* Expression */}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        className="w-full text-right text-[32px] mb-2"
        style={{
          color: '#8F8F94',
          fontWeight: '300',
        }}
      >
        {expression || ' '}
      </Text>

      {/* Main Value */}
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.5}
        className="w-full text-right text-[72px]"
        style={{
          color: darkMode ? '#FFFFFF' : '#000000',
          fontWeight: '300',
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Display;