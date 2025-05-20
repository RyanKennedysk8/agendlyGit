import { Button } from '@/components/button';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { router } from 'expo-router';



const { id } = useLocalSearchParams();

export default function LojaPage() {
  
  function voltar(){
    router.navigate("/home")
  }

  return ( 
  // Aqui você faria a requisição para a API, ex:
  // const { data, isLoading } = useQuery(['loja', id], () => fetchLojaById(id));
  
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24 }}>Loja ID: {id}</Text>
      {/* Aqui virão os dados da loja (foto, nome, endereço, serviços etc) */}
      <Button title='voltar' onPress={voltar} />
    </View>
  );
}
