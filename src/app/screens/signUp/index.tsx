import { View, Image } from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "./style";
import { InputIcon } from "@/components/inputIcon";
import { faCode, faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Index(){
    function singIn(){
        router.navigate("/screens/signIn/singIn")
    }

    return(
        <View style={styles.backgroundScreen}>
            <View style={styles.backgoundTop}>
                <Image style={styles.img}source={require("@/img/logoAgendly.png")} />
            </View>
            
            <View style={styles.backgoundMid}>
                <InputIcon icon={faEnvelope} place="Nome"/>
                <InputIcon icon={faUser} place="E-mail"/>
                <InputIcon icon={faPhone} place="Telefone / Celular"/>
                <InputIcon icon={faLock} place="Senha"/>
            </View>

            <View style={styles.backgroundEnd}>
                <Button title="Voltar tela Login" onPress={singIn}/>
            </View>
            
        </View>
    )
}