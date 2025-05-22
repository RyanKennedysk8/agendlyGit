import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './style';


const { width } = Dimensions.get('window');

interface Loja {
  id: string;
  nome: string;
  logo:string;
  imagem: string;
  endereco: string;
  distancia: string;
  categoria: string;
}

interface Props {
  lojas: Loja[];
}


export default function CarrosselLojas({ lojas }: Props) {
  
  const router = useRouter();
  

  const renderItem = ({ item }: { item: Loja }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.replace({ pathname: '/screenLoja/[id]', 
          params: { 
            id: item.id,
            nome: item.nome,  
            imagem: item.imagem,
            distancia: item.distancia,
            logo: item.logo
          } }) 
      }
    > 
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.endereco}>
          {item.distancia} • {item.endereco}
        </Text>
      </View>
    </TouchableOpacity>
  );

 

  return (
    <FlatList
      data={lojas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.lista}
    />

  );
}