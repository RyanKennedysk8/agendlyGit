import { View, Image, Text} from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "../home/style";


export default function Home(){
    
    function telaInicial(){
        router.navigate("/signIn/singIn")
    }
   

    return(
        <View style={styles.backgroundTela}>

            <View style={styles.backgroundMenu}>

                <Image source={require("@/img/logoAgendly.png")} style={styles.img}/>
                <Button title="Voltar tela" onPress={telaInicial}/>
                <Text> Lista de Agendamentos</Text>

            </View>

            <View style={styles.backgroundMid}>
                
            </View>

            <View style={styles.backgroundEnd}>
                
            </View>
        </View>
    )
}