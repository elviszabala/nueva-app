import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

// Fusionar los temas de Paper y Navigation
export const CombinedLightTheme = {
  ...MD3LightTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: MD3LightTheme.colors.background,
    primary: MD3LightTheme.colors.primary,
    card: MD3LightTheme.colors.surfaceVariant,
    text: MD3LightTheme.colors.onBackground,
  },
};

export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: MD3DarkTheme.colors.background,
    primary: MD3DarkTheme.colors.primary,
    card: MD3DarkTheme.colors.surfaceVariant,
    text: MD3DarkTheme.colors.onBackground,
  },
};