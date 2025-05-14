import { View, Image } from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "./style";
import { InputIcon } from "@/components/inputIcon";
import { faCode, faEnvelope, faEyeSlash, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Index(){
    function singIn(){
        router.navigate("/signIn/singIn")
    }

    return(
        <View style={styles.backgroundScreen}>
            <View style={styles.backgoundTop}>
                <Image style={styles.img}source={require("@/img/logoAgendly.png")} />
            </View>
            
            <View style={styles.backgoundMid}>
                <InputIcon  place="Nome"/>
                <InputIcon  place="E-mail"/>
                <InputIcon  place="Telefone / Celular"/>
                <InputIcon icon={faEyeSlash} place="Senha"/>
                <InputIcon icon={faEyeSlash} place="Confirmar senha"/>
                
                <Button title="Confirmar" onPress={singIn} />
            </View>

            <View style={styles.backgroundEnd}>
                <Button title=" Voltar para login" onPress={singIn}/>
            </View>
            
        </View>
    )
}