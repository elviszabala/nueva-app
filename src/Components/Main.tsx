import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3DarkTheme as DefaultTheme, MD3LightTheme, FAB, ActivityIndicator, Button } from 'react-native-paper';
import * as Device from 'expo-device';
import { ThemeProvider, ThemeContext } from '../theme/ThemeContextv2';
import { Config, Search, Front } from '../Views/index';





export  const Main = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [config, setConfig] = useState(false);
   const {isDarkTheme, toggleTheme, theme} = useContext(ThemeContext);
  
  

  useEffect(() => {

    console.log("Device: ", Device.modelName, "Checking config state: NONE Checking Darkmode: "  , isDarkTheme);
    

  }, []);

 

  
  const action = () => {
    

    if (menuVisible) {
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




  return (

 
    <PaperProvider theme={theme}>
      

      
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <StatusBar style={theme.mode==='adaptive' ? "light" : "dark"} /> 

        <Text style={[styles.text, {color: theme.colors.primary}]}>Welcome to React Native!</Text>

        {config ? (
          <Config />
        ) : (
          
       
        
        menuVisible ? (<Front />) : (
          <View>
            <Search />
         <Button 
            onPress={() => setMenuVisible(true)} 
            > 
            Show 10 characters
         
         </Button>
        
         
          </View>
        )
        )}

        
        
        


        <FAB
              icon={theme.mode==='adaptive' ? "white-balance-sunny" : "theme-light-dark"} 
              style={styles.fab}
              onPress={toggleTheme}
              onLongPress={action}
            />

      </SafeAreaView>
      
      
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
