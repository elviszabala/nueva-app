import React, { createContext, useState } from 'react';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
    //theme: MD3LightTheme,
});

interface props {
    children: JSX.Element | JSX.Element[];
}


export const ThemeProvider = ({ children }: props) => {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    //const theme = isDarkTheme ? MD3DarkTheme : MD3LightTheme;

    //const toggleTheme = () => setIsDarkTheme((prev) => !prev);
    const toggleTheme = () => {
        console.log("Si llego al context " )
    }

    
  return (
    <ThemeContext.Provider value={{ 
        isDarkTheme, 
        toggleTheme 
        }}>
    {children}
    </ThemeContext.Provider>
   
  )
}


