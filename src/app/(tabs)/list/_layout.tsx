import { Stack } from "expo-router";

export default function listLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackTitle: "Voltar", // iOS
        headerTintColor: "#000", // Cor da seta
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false // Esconde o header na tela inicial
        }} 
      />
    </Stack>
  );
}