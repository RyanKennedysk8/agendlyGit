
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { styles } from '@/app/screenLoja/styles';
import { useRef } from 'react';
import CarrosselLojas from '@/components/carroselLojas';
import { lojas } from '@/app/bancoDeDados/lojas'; 
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Pressable } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';


export default function Index() {
  
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  function voltar(){
    router.navigate("/(tabs)/home");
  }

  useEffect(() => {
    //para garantir que o header NATIVO está visível APENAS com a seta
    navigation.setOptions({ 
      headerShown: true,
      headerTitle: "", // Remove título
      headerTransparent: true, // fundo transparente
      headerBackTitleVisible: false,// Esconde texto iOS
      headerBackVisible: false, // Esconde a seta nativa
      headerLeft: () => ( //personalização da seta
        <Pressable
          onPress={() => router.back()}
          style={{ paddingLeft: 10 }}
            >
            <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
      )
     
    });
  }, []);

  const lojaRecomendado = lojas.filter(lojas => lojas.categoria === "Recomendado")
  const lojaPetshop = lojas.filter(lojas => lojas.categoria === "Petshop")

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
    
    <View style={[styles.containerPrincipal]}>
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
        
        <View style={styles.containerBotaoVoltar}>

        </View>

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

            
            <CarrosselLojas lojas={lojaRecomendado}/>
            <CarrosselLojas lojas={lojaPetshop}/>
            <CarrosselLojas lojas={lojaRecomendado}/>
            <CarrosselLojas lojas={lojaPetshop}/>
            <CarrosselLojas lojas={lojaRecomendado}/>
            <CarrosselLojas lojas={lojaPetshop}/>
       
        </View>
      </Animated.ScrollView>
    </View>
  );
}
