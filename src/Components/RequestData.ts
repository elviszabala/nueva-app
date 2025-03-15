import React from 'react'
import { useEffect, useState } from 'react'
import { Character } from '../Interfaces/Character';

export const RequestData = () => {
    const [data, setData] = useState<Character | null >();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const url = 'https://dragonball-api.com/api/characters/1'

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result: Character = await response.json();
                setData(result);
                
            }
            catch (error) {
                console.log("Error: ", error);
            } finally {
                setLoading(false);
            }
            
        } 
        fetchData()
    }, [])

   

  return {data, loading, error}
}


