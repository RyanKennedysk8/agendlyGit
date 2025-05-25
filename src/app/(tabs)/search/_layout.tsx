import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Layout() {
  // navigation disponível dentro do componente Layout
  const navigation = useNavigation();

  //  Botão personalizado
  const CustomBackButton = () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ paddingLeft: 10 }}
    >
      <Ionicons name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <Stack
      screenOptions={{ //configuração de seta nativa
        headerBackTitle: ' ',
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen 
        name="index"  //oq vai aparecer na tela principal
        options={{ headerShown: false }} //Ocultar o header 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: '',
          headerShown: true,
                 // Oculta seta padrão
          headerLeft: () => <CustomBackButton /> // Mostra a customizada
        }} 
      />
    </Stack>
  );
}
