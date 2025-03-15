import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import { Text, TextInput, Button, Dialog, Portal } from 'react-native-paper'

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        
    }, [searchQuery]);

    const search = () => {
        if (searchQuery) {
            console.log("Search for: ", searchQuery);
        }else {
            console.log("else: ", searchQuery);
            setDialogVisible(true);
        }
    }



  return (
   <View>
        <Text>Search</Text>
        <TextInput
            label="Find your character"
            mode='outlined'
            placeholder='Insert a Number'
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
        <Portal>
            <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Text>Cant be empty</Text>
                </Dialog.Content>
                {/* <Dialog.Actions>
                    <Button onPress={() => setDialogVisible(false)}>Cancel</Button>
                    <Button onPress={() => search()}>Search</Button>
                </Dialog.Actions> */}
            </Dialog>
        </Portal>


   </View>
  )
}


