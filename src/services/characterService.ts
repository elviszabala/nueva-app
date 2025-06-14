import axios, { AxiosError } from 'axios';
import { Character } from '../Interfaces/Character';

export const getCharacterById = async (id: string): Promise<{ data: Character | null, error: string | null }> => {
  try {
    const response = await axios.get<Character>(`https://dragonball-api.com/api/characters/${id}`);
    return { data: response.data, error: null };
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const errorMessage =
        (axiosError.response?.data as { message?: string })?.message ||
        'Error desconocido de la API';
      return { data: null, error: errorMessage };
    }

    return {
      data: null,
      error: 'Error inesperado al obtener el personaje',
    };
  }
};