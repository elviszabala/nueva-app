// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '../services/authService';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}
