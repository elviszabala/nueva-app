import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3DarkTheme as DefaultTheme, MD3LightTheme, FAB, ActivityIndicator, Button, BottomNavigation } from 'react-native-paper';
import * as Device from 'expo-device';
import { ThemeProvider, ThemeContext } from '../theme/ThemeContextv2';
import { Config, Search, Front } from '../Views/index';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();



export  const Main = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [keyboardstatus, setKeyboardStatus] = useState(false);
  const [config, setConfig] = useState(false);
  const {isDarkTheme, toggleTheme, theme} = useContext(ThemeContext);
  
  

  useEffect(() => {

   // console.log("Device: ", Device.modelName, "Checking config state: NONE Checking Darkmode: "  , isDarkTheme);
    

  }, []);

 

  
  const action = () => {
    

    if (menuVisible) {
      //setKeyboardStatus(!keyboardstatus);
      setMenuVisible(false);
      setConfig(false);
      
      

    }else{
      if (!menuVisible && config) {
        
        setConfig(false);
        
      }
      else {
        
        setConfig(true);
        
        
      }

    }

    
   
     
  }
  const turnoff = () =>{
    console.log("Keyboard status: ", keyboardstatus);
    setMenuVisible(true)
    //setKeyboardStatus(!keyboardstatus); 

  }  



  return (

  
    <PaperProvider theme={theme}>
      

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} disabled={keyboardstatus}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <StatusBar style={theme.mode==='adaptive' ? "light" : "dark"} /> 

        <Text style={[styles.text, {color: theme.colors.primary}]}>Welcome to React Native!</Text>

        {config ? (
          <Config />
        ) : (
          <Front />
        )}


        <FAB
              icon={theme.mode==='adaptive' ? "white-balance-sunny" : "theme-light-dark"} 
              style={styles.fab}
              onPress={toggleTheme}
              onLongPress={action}
            />

        <FAB
              icon="cog"
              style={[styles.fab, {bottom: 80}]}
              onPress={action}
              onLongPress={turnoff}
            />

      </SafeAreaView>
      
      </TouchableWithoutFeedback>
    </PaperProvider>
    
    
   
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 50,
    paddingBottom: 50,
    
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
   
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
