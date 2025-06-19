import React, {useState, useContext} from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Switch, Text, ThemeProvider } from 'react-native-paper'
import { ThemeContext } from '../theme/ThemeContextv2';
import { useAuth } from '../hooks/useAuth';



export const Config = () => {
    //const { toggleTheme, theme } = useContext(ThemeContext);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);

    //const { user, loading } = useAuth();


    const {isDarkTheme, toggleTheme} = useContext(ThemeContext);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
   

  return (

        

        
        <View style={styles.container}>
        <Text style={styles.header}>Config</Text>













            {/* this is the config screen always visible */}
            <View style={styles.optionRow}>
                <Text style={styles.text}>Dark Mode {isDarkTheme}</Text>
                <Switch value={isDarkTheme } onValueChange={toggleTheme} />
                <View>
                    <Text style={styles.text}>{isDarkTheme ? 'On' : 'Off'}</
                    Text>
                </View>
            </View>
            <View style={styles.optionRow}>
                <Text style={styles.text}>Test {isDarkTheme}</Text>
                <Switch value={isSwitchOn } onValueChange={onToggleSwitch} />
                <View>
                    <Text style={styles.text}>{isSwitchOn ? 'On' : 'Off'}</
                    Text>
                </View>
            </View>
            
        </View>
        
        
    
  )


}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        padding: 12,
        //backgroundColor: 'blue',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        //backgroundColor: 'red',
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    text: {
        fontSize: 18,
        //color: 'black',
    },
    statusText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});


