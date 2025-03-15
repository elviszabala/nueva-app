import React from 'react-native'
import { useEffect, useState } from 'react';
import io from 'socket.io-client'; // Importa el cliente de Socket.IO

const SOCKET_SERVER_URL = 'http://localhost:3000'; // URL de tu servidor de Socket.IO

const Connect = () => {

    const [socket, setSocket] = useState(null); // Estado para almacenar la instancia del socket
  const [message, setMessage] = useState(''); // Estado para almacenar mensajes entrantes

  useEffect(() => {
    // Inicializa la conexión del socket cuando el componente se monte
    console.log("Esta es la url: ", SOCKET_SERVER_URL);
    const socketInstance = io(SOCKET_SERVER_URL);
    console.log(socketInstance);

    // Escucha el evento 'connect'
    socketInstance.on('connect', () => {
      console.log('Conectado al servidor Socket.IO');
    });

    // Ejemplo: escuchar un evento personalizado llamado 'mensaje'
    socketInstance.on('mensaje', (data) => {
      console.log('Mensaje recibido del servidor:', data);
      setMessage(data);
    });

    // Guardar la instancia del socket
    setSocket(socketInstance);

    // Desconectar el socket cuando el componente se desmonte
    return () => {
      socketInstance.disconnect();
      console.log('Socket desconectado');
    };
  }, []);

  // Función para enviar un mensaje al servidor
  const sendMessage = () => {
    if (socket) {
      socket.emit('mensaje', 'Hola desde la app móvil'); // Envía un mensaje al servidor
    }else{
      console.log("Error, el socket actual es: ", socket);
    }
    console.log("Entro al botton");
    };
  return (
    
  )
}

export default Connect
