import React from 'react';
import {
  Pressable,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle = ({
  darkMode,
  toggleTheme,
}: Props) => {
  return (
    <Pressable
      onPress={toggleTheme}
      className={`w-[74px] h-[44px] rounded-full justify-center px-1 ${
        darkMode ? 'bg-[#2E2F38]' : 'bg-white'
      }`}
    >
      {/* Icons Row */}
      <View className="absolute w-full flex-row justify-between px-3">
        <Ionicons
          name="sunny-outline"
          size={18}
          color={
            darkMode
              ? '#8F8F94'
              : '#4B5EFC'
          }
        />

        <Ionicons
          name="moon-outline"
          size={18}
          color={
            darkMode
              ? '#4B5EFC'
              : '#8F8F94'
          }
        />
      </View>

      {/* Toggle Thumb */}
      <View
        pointerEvents="none"
        style={{
          transform: [
            {
              translateX: darkMode ? 34 : 0,
            },
          ],
        }}
        className={`w-9 h-9 rounded-full ${
          darkMode
            ? 'bg-[#4B4D63]'
            : 'bg-[#D9D9E3]'
        }`}
      />
    </Pressable>
  );
};

export default ThemeToggle;