import { Button } from '@/components/button';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Animated } from 'react-native';
import { styles } from './styles';
import { useRef } from 'react';

function voltar(){
  router.navigate("/(tabs)/home");
}

export default function LojaDetalhes() {
  const params = useLocalSearchParams();
  const imagem = Array.isArray(params.imagem) ? params.imagem[0] : params.imagem;
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.backgroundPrincipal}>
      
      {/* Banner */}
      <View style={styles.backgroundBanner}>
        <Image source={{ uri: imagem }} style={styles.bannerImg} />
      </View>

      {/* Logo e informações ao lado */}
      <View style={styles.logoInfoContainer}>
        
        <View style={styles.textInfo}>
          <Text style={styles.nomeLoja}>ID: {params.id} {params.nome}</Text>
          <Text>3.5 KM</Text>
        </View>
        <Image
          source={{ uri: "https://cdn.pixabay.com/photo/2016/05/28/16/03/soon-1421660_640.png" }}
          style={styles.logoImg}
        />
      </View>

      {/* Scroll do restante */}
      <Animated.ScrollView
        style={styles.backgroundScroll}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={13}
      >
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <Button title="voltar" onPress={voltar} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
