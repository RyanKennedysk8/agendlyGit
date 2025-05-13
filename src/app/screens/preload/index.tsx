import { View, Image} from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "./style";

export default function Index(){

    function telaInicial(){
        router.navigate("/screens/signIn/singIn")
    }
   

    return(
        <View style={styles.backgroundTela}>

            <View style={styles.backgroundMenu}>

                <Image source={require("@/img/logoAgendly.png")} style={styles.img}/>
                <Button title="Voltar tela" onPress={telaInicial}/>

            </View>

            <View style={styles.backgroundMid}>

            </View>

            <View style={styles.backgroundEnd}>

            </View>
        </View>
    )
}