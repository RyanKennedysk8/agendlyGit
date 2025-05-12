import { View } from "react-native";
import { styles } from "./style";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { ButtonChoice } from "@/components/buttonChoice";
import { faBusinessTime, faUser } from "@fortawesome/free-solid-svg-icons";


export default function Index(){
    function telaSingIn(){
        router.navigate("/screens/signIn/singIn")
    }
    
    return(
    <View style={styles.backgroundPrincipal}>
        
        <View style={styles.backgroundTop}>

        </View>

        <View style={styles.backgroundMid}>
            
        </View>

        <View style={styles.backgroundEnd}>
            <ButtonChoice title="Usuario" icon={faUser} onPress={telaSingIn}/>
            <ButtonChoice title="Empresa" icon={faBusinessTime} onPress={telaSingIn}/>
        </View>
    </View>
)
}