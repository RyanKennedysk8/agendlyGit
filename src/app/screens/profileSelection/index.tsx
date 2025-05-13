import { View, Text, Image} from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import { ButtonChoice } from "@/components/buttonChoice";



export default function Index(){
    function telaSingIn(){
        router.navigate("/screens/signIn/singIn")
    }
    function preLoad(){
        router.navigate("/screens/preload")
    }
    
    return(
    <View style={styles.backgroundPrincipal}>
        
        <View style={styles.backgroundTop}>
            <Image style={styles.img} source={require("@/img/logoAgendly.png")}/>
            
        </View>

        <View style={styles.backgroundMid}>
            <Text style={styles.text}> Como você quer
            ultilizar esse aplicativo ?</Text>
        </View>

        <View style={styles.backgroundEnd}>

            <ButtonChoice title="Sou uma empresa" icon="briefcase-outline" size={55} onPress={telaSingIn} />
            <ButtonChoice icon="person-outline"  title="Sou um usuario" size={55} onPress={preLoad}/>

        </View>
    </View>
)
}