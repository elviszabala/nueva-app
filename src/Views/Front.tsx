import React, { View, Text, FlatList, StyleSheet } from 'react-native'
import { Image } from 'expo-image';
import  { RequestData, GetAllData
 } from '../Components/index';
import { Characters, Item } from '../Interfaces/Characters';
import * as Device from 'expo-device';
import { ActivityIndicator } from 'react-native-paper';



export const Front = ()  => {

    const {data, loading, error} = GetAllData();
   


    if (loading) {
        return <ActivityIndicator animating={true} color="#000" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    } 
    
    const itemsArray = data?.items ? Object.values(data.items) : [];
    
  return (
    <View>
        
       


        {itemsArray.length > 0 ? (
                <FlatList
                    data={itemsArray}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image
                                    source={{ uri: item.image }} // Asegúrate de que 'item' tenga una propiedad 'imageUrl'
                                    style={styles.image}
                                    contentFit='contain'
                                    
                                />
                                <View style={styles.textContainer}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.ki}>{item.ki}</Text>
                            <Text style={styles.ki}>{item.gender}</Text>
                            {/* Puedes añadir más detalles aquí */}
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.list}
                />
            ) : (
                <Text>No data available</Text>
            )}
        
     

        
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





