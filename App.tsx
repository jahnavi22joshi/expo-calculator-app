import './global.css';

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import Display from './components/Display';
import ThemeToggle from './components/ThemeToggle';
import ButtonGrid from './components/ButtonGrid';

import { useCalculator } from './hooks/useCalculator';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const { value, expression, handlePress } =
    useCalculator();

  return (
    <SafeAreaView
      className={`flex-1 px-6 ${darkMode ? 'bg-[#17171C]' : 'bg-[#F1F1F3]'
        }`}
    >
      <StatusBar
        barStyle={
          darkMode ? 'light-content' : 'dark-content'
        }
      />

      {/* Toggle */}
      <View className="mt-5">
        <ThemeToggle
          darkMode={darkMode}
          toggleTheme={() =>
            setDarkMode(!darkMode)
          }
        />
      </View>

      {/* Display */}
      <View className="flex-1 justify-end pb-4">
        <Display
          value={value}
          expression={expression}
          darkMode={darkMode}
        />

        <ButtonGrid
          darkMode={darkMode}
          onPress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
}
