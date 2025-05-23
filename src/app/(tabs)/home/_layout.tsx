import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // Configurações GLOBAIS do Stack
        headerBackTitle: " ", // Texto iOS
        headerTintColor: "#000", // Cor da seta
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false // Esconde header NATIVO na home
        }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: "", // Título vazio
          headerShown: true // Mostra header NATIVO com seta
        }} 
      />
    </Stack>
  );
}