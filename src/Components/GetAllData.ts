import React from 'react'
import { useEffect, useState } from 'react'
import { Characters } from '../Interfaces/Characters';

export const GetAllData = () => {
    const [data, setData] = useState<Characters | null >();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const url = 'https://dragonball-api.com/api/characters'

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result: Characters = await response.json();
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

