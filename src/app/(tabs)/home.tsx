import { View, Image, Text, 
Animated, ScrollView} from "react-native";
import { styles } from "../home/style";
import { Search } from "@/components/search";
import { ButtonLocal } from "@/components/buttonLocal";
import { router } from "expo-router";
import CarrosselLojas from "@/components/carroselLojas";
import { scrollY, lojas,  } from "../home/constantes";



export default function Home(){
    

    function telaPesquisa(){
        router.navigate("/(tabs)/companySearch")
    }
    const headerTranslate = scrollY.interpolate({
        inputRange: [0, 100], // quando o usuário rola de 0 a 100 pixels...
        outputRange: [0, -40], // move o header verticalmente para cima
        extrapolate: "clamp", // evita sair do intervalo
    });

    return(

        <View style={styles.container}>


        {/* Campo de pesquisa (apenas visual por enquanto) */} 

        <Animated.View style={[styles.headerContainer, {transform: [{translateY: headerTranslate} ]}]}>

            
            <View style={styles.headerLogo}>
                <Image source={require("@/img/logoNome.png")} style={styles.logo}/>
            </View>

            <Search 
            place="Pesquise serviços e empresas" 
            size={30} 
            icon={"search"} 
            onPress={telaPesquisa}
            />

            <ButtonLocal icon={"location-outline"}size={18} title="Rua Henrique Leite, 45 >"/>

        </Animated.View>

            {/* CONTEÚDO ROLÁVEL (simula os salões) */}

        <Animated.ScrollView
        contentContainerStyle={styles.content}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true } // usar driver nativo para desempenho
        )}
        scrollEventThrottle={13} // frequência do evento de scroll
        >

        {/*carrosel de recomendados*/}

          <View style={styles.card}>
            
            <ScrollView>
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>Recomendados para você</Text>
            <CarrosselLojas lojas={lojas} />
            </ScrollView>

          </View>
        {/*carrosel de estetica*/}

            <View style={styles.card}>
            
                <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>Recomendados para você</Text>
                <CarrosselLojas lojas={lojas} />
                </ScrollView>

            </View>

            <View style={styles.card}>
            
                <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>Recomendados para você</Text>
                <CarrosselLojas lojas={lojas} />
                </ScrollView>

            </View>
            <View style={styles.card}>
            
                <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 16 }}>Recomendados para você</Text>
                <CarrosselLojas lojas={lojas} />
                </ScrollView>

            </View>

        </Animated.ScrollView>

        </View>
    )
}

/* {Array.from({ length: 10 }).map((_, i) => (
            <View  key={i}>
    ))} */