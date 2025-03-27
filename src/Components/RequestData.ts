import React from 'react'
import { useEffect, useState } from 'react'
import { Character } from '../Interfaces/Character';
import axios, {AxiosError} from 'axios';

export const RequestData = (searchQuery: string) => {
    const [data, setData] = useState<Character | null >();
    const [error, setError] = useState<String | null >(null);
    const [loading, setLoading] = useState<boolean>(true);
    console.log("clicked inside requestData");

    

    useEffect(() => {
        

        if (!searchQuery) {
            setLoading(false);
            setData(null);
            //console.log("Si entro al break vacio")
            return;
        }
        
        const fetchData = async () => {
            try {
                const url = 'https://dragonball-api.com/api/characters/'+ searchQuery;
                //console.log("URL: ", url);
                //const response = await fetch(url);
                const response = await axios.get(url);
               
              /*   if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                }  */
                const result: Character = response.data;
                //console.log("El response es: ",response);
                
                setData(result);
                if(error !== null){
                    setError(null)
                }
                
            }
            catch (error) {

                if(axios.isAxiosError(error)){
                    //console.log(error.status)
                    //console.error(error.response);
                    const axiosError = error as AxiosError;
                    console.log("El error es(from request): ", axiosError.response?.data)
                    
                    const errorMessage = (axiosError.response?.data as { message: string })?.message || "An unknown error occurred";
                    setError(errorMessage);
                    

                }else{
                    setError("Error al recopilar la informacion con el numero " + searchQuery + " Mensaje: " );
                //console.log("Error estoy: ", error, "Y es de typo: ", typeof(error));
                //console.log(data);

                }
                
                
                
                
            } finally {
                setLoading(false);
            }
            
        } 
        fetchData()
    }, [searchQuery]);

   

  return {data, loading, error}
}


