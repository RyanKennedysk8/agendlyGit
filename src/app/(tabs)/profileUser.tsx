import { View, Image, Text} from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "../profileUser/style";

export default function ProfileUser(){
    
    function telaInicial(){
        router.navigate("/tabs/home")
    }
   

    return(
        <View style={styles.backgroundPrincipal}>

            <View style={styles.backgroundTop}>

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