
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { styles } from '@/app/screenLoja/styles';
import { useRef } from 'react';
import CarrosselLojas from '@/components/carroselLojas';
import { lojas } from '../bancoDeDados/lojas';
import { Ionicons } from '@expo/vector-icons';
import {Stack} from 'expo-router';
import React from 'react';



export default function LojaDetalhes() {
  const params = useLocalSearchParams();
  
  function voltar(){
    router.navigate("/(tabs)/home");
  }
  

  const lojaRecomendado = lojas.filter(lojas => lojas.categoria === "Recomendado")
  
  const imagem = Array.isArray(params.imagem) ? params.imagem[0] : params.imagem;
  const logo = Array.isArray(params.logo) ? params.logo[0] : params.logo;
  const scrollY = useRef(new Animated.Value(0)).current;

  const botaoVoltarAnimation = scrollY.interpolate({
    inputRange:[0, 0],
    outputRange:[0, 0],
    extrapolate:'clamp'
  }) 
  const miniTopoAnimation = scrollY.interpolate({
    inputRange:[0, 260],
    outputRange:[-270, 0],
    extrapolate:'clamp'
  })

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
    
    <View style={styles.containerPrincipal}>
          {/* Banner */}
      <Animated.View 
      style={[styles.containerTop,
         {transform: [{translateY: bannerAnimation}]}, {opacity:collapseAnimation}]}
       
      >
          <View style={styles.containerBanner}>
                <Image source={{ uri: imagem }} style={styles.bannerImg} />

                <View style={styles.containerInfoBox}>
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
      {/* MiniLogoScroll */}

      <Animated.View style={[styles.containerMiniTopo, {transform:[{translateY:miniTopoAnimation}]}]}
      >
        <TouchableOpacity style={styles.containerBotaoVoltar} onPress={voltar}>

          <Ionicons name='chevron-back' size={40} style={styles.icon}/>
        </TouchableOpacity>

        <Text style={styles.textMiniTopo}>nome:{params.nome} </Text>

        <Image style={styles.imgLogoMini} source={{uri: logo}}/>

      </Animated.View>
          

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
