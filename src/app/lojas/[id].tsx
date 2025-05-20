import { Button } from '@/components/button';
<<<<<<< HEAD
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Animated } from 'react-native';
import { styles } from './styles';
import { useRef } from 'react';
import { navigate } from 'expo-router/build/global-state/routing';

function voltar(){
  router.navigate("/(tabs)/home")
}
export default function LojaDetalhes() {

  const params = useLocalSearchParams();

  // Garante que `imagem` seja uma string (pega a primeira posição se for array)
  const imagem = Array.isArray(params.imagem) ? params.imagem[0] : params.imagem;
  
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.backgroundPrincipal}>
       
      <View style={styles.backgroundBanner}>
        {/* Carrosel Banner */}
        <Image 
        source={{ uri: imagem }} 
        style={{ width: '100%', height: 200 }} />
      </View>

      <Animated.ScrollView 
        style={styles.backgroundScroll}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true } // usar driver nativo para desempenho
        )} scrollEventThrottle={13} // frequência do evento de scroll 
       >

        <View style={styles.backgroundContainer}>

          <View style={styles.backgroundLogo}>
            <Image style={styles.img} source={{uri: "https://cdn.pixabay.com/photo/2016/05/28/16/03/soon-1421660_640.png"}}/>
          </View>
          <View style={styles.backgroundNomeLoja}>
            <Text style={styles.title}>ID: {params.id}  Nome: {params.nome}</Text>
            <Text> 3.5 KM {/* Preciso buscar distancia */}</Text>
          </View>
        
          
         
          
        </View>
          
        <Button title='voltar' onPress={voltar} />

      </Animated.ScrollView>
=======
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
>>>>>>> c20aace860f31752bbbd8104881e56deb5c58861
    </View>
  );
}