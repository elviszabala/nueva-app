import React from 'react'
import { useEffect, useState } from 'react'
import { Character } from '../Interfaces/Character';

export const RequestData = (searchQuery: string) => {
    const [data, setData] = useState<Character | null >();
    const [error, setError] = useState<string | null >(null);
    const [loading, setLoading] = useState<boolean>(true);

    

    useEffect(() => {
        

        if (!searchQuery) {
            setLoading(false);
            setData(null);
            console.log("Si entro al break vacio")
            return;
        }
        
        const fetchData = async () => {
            try {
                const url = 'https://dragonball-api.com/api/characters/'+ searchQuery;
                //console.log("URL: ", url);
                const response = await fetch(url);
               
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                } 
                const result: Character = await response.json();
                console.log(result);
                setData(result);
                
            }
            catch (error) {
                setError(error);
                console.log("Error estoy: ", error);
                
                
                
            } finally {
                setLoading(false);
            }
            
        } 
        fetchData()
    }, [searchQuery]);

   

  return {data, loading, error}
}


