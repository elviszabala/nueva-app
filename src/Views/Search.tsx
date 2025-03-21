import React, {useEffect, useState} from 'react'
import { View, StyleSheet, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Text, TextInput, Button, Dialog, Portal } from 'react-native-paper'
import { RequestData } from '../Components/RequestData';
import { Image } from 'expo-image';

export const Search = () => {

    let isComplete: boolean = true;
    
    const [searchQuery, setSearchQuery] = useState("");
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogError, setDialogError] = useState(false);
    const [queryToSearch, setQueryToSearch] = useState<string | null>(null);
    const { data, error, loading } = RequestData(queryToSearch ?? ''); // Use queryToSearch, not searchQuery
    console.log("El error es(out): ", error);
    console.log("searchquery(out): ", searchQuery);
   
     
   
        
        //console.log("El error es: ", error);
    
      
        if (searchQuery.trim() === '') {
           
            
            
            console.log("DialogError: ", dialogError)
            
            
            
        }
        if (error !== null){
            console.log("Ahora es error")
            alert(error)
   
        }
       
   





    

 
    const search = () => {
        if (!searchQuery.trim()) {
            
            setDialogVisible(true);
            return;
        }
        Keyboard.dismiss();
        setQueryToSearch(searchQuery.trim());
    };



  return (
   
   <View>
        <Text>Search</Text>
        <TextInput
            label="Find your character"
            mode='outlined'
            placeholder='Insert a Number'
            keyboardType='numeric'
            value={searchQuery}
            onChangeText={searchQuery => {setSearchQuery(searchQuery)}}
            style={{width: '80%', margin: 10, marginLeft: 30}}
        />
        <Button
            mode='contained'
            onPress={() => search()}
            style={{width: '80%', margin: 10, marginLeft: 30}}
        >
            Search
        </Button>
       
        
           {dialogError ? (
            <View>
                 <Text style={{ color: 'red' }}> {error}</Text>
            </View>
           ) : (data &&  (
            <View style={styles.card}>
                <Image
                    source={{ uri: data.image }} // Asegúrate de que 'item' tenga una propiedad 'imageUrl'
                    style={styles.image}
                    contentFit='contain'
                                                    
                                                    
                />
                <View style={styles.textContainer}>
                <Text>Name: {data.name}</Text>
                <Text>Race: {data.race}</Text>
                <Text>Power Level: {data.ki}</Text>
                </View>
            </View>
        ))}
    
    
         
        

        <Portal>
            <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text>Cant be empty</Text>
                </Dialog.Content>
            </Dialog>
            <Dialog visible={dialogError} onDismiss={() => setDialogError(false)}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text>{error}</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>


   </View>

  )
}


const styles = StyleSheet.create({
    list: {
        padding: 10,
        paddingBottom: 30,
        //backgroundColor: 'blue',
        paddingTop: 30,
        
    },
    card: {
        backgroundColor: '#fff',
        //backgroundColor: 'red',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 15,
        overflow: 'hidden',
        paddingBottom: 50,
        paddingTop: 30,
        

    },
    image: {
        width: '100%',
        height: 200,
        
        
    },
    textContainer: {
        padding: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ki: {
        fontSize: 16,
        color: '#555',
    },
});


