import React, { createContext, useState, ReactNode } from 'react';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

interface ThemeContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    theme: typeof MD3LightTheme;
}


export const ThemeContext = createContext <ThemeContextType>({
    isDarkTheme: false,
    toggleTheme: () => {},
    theme: MD3LightTheme,
});

interface props {
    children: ReactNode;
}


export const ThemeProvider = ({ children }: props) => {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const theme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;

    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
    

    
  return (
    <ThemeContext.Provider value={{ 
        isDarkTheme, 
        toggleTheme,
        theme 
        }}>
    {children}
    </ThemeContext.Provider>
   
  )
}


