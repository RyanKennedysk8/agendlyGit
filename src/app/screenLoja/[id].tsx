import { Button } from '@/components/button';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Animated } from 'react-native';
import { styles } from './styles';
import { useRef } from 'react';
import CarrosselLojas from '@/components/carroselLojas';
import { lojas } from '../bancoDeDados/lojas';



export default function LojaDetalhes() {
  function voltar(){
    router.navigate("/(tabs)/home");
  }

  const lojaRecomendado = lojas.filter(lojas => lojas.categoria === "Recomendado")
  const params = useLocalSearchParams();
  const imagem = Array.isArray(params.imagem) ? params.imagem[0] : params.imagem;
  const logo = Array.isArray(params.logo) ? params.logo[0] : params.logo;
  const scrollY = useRef(new Animated.Value(0)).current;




  const bannerAnimation = scrollY.interpolate({
    inputRange: [0, 260], // ajusta conforme o tamanho do topo
    outputRange: [0, -270],
    extrapolate: 'clamp',
  });

  const collapseAnimation = scrollY.interpolate({
    inputRange: [0,270],
    outputRange:[1,0],
    extrapolate:'clamp'
  })


  return (
    <View style={styles.backgroundPrincipal}>


          {/* Banner */}
      <Animated.View 
      style={[styles.backgroundTop, {transform: [{translateY: bannerAnimation}]}, {opacity:collapseAnimation}]}
       
      >
          <View style={styles.backgroundBanner}>
                <Image source={{ uri: imagem }} style={styles.bannerImg} />

                <View style={styles.backgroundInfoBox}>
                    <Image 
                    style={styles.logoImg}
                    source={{uri:logo}}/>
                    <View style={styles.conteinerText}>
                        <Text style={styles.nomeLoja}>
                        {params.nome}
                        </Text>
                        <Text style={styles.distanciaLoja}> Distancia: {params.distancia}</Text>
                          
                    </View>
                    
                </View>
              
          </View>
      </Animated.View>
          {/* Logo e informações ao lado */}
          

      {/* Scroll do restante */}
      <Animated.ScrollView
        contentContainerStyle={styles.backgroundScroll}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={13}
      >
        <View style={{ paddingHorizontal: 20, paddingTop: 20, gap:20 }}>
     
            <Text style={{fontSize:25, fontWeight:800}}>Texte loja {params.id}</Text>
            <CarrosselLojas lojas={lojaRecomendado}/>
            <Button title='voltar' onPress={voltar}/>
            <Text style={{fontSize:25, fontWeight:800}}>Texte loja {params.id}</Text>
            <CarrosselLojas lojas={lojaRecomendado}/>
            <Text style={{fontSize:25, fontWeight:800}}>Texte loja {params.id}</Text>
            <CarrosselLojas lojas={lojaRecomendado}/>
            <Text style={{fontSize:25, fontWeight:800}}>Texte loja {params.id}</Text>
            <CarrosselLojas lojas={lojaRecomendado}/>
            
       
        </View>
      </Animated.ScrollView>
    </View>
  );
}
