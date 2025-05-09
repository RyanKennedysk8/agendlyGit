import {View, Text, StyleSheet, Image} from "react-native";
import { styles } from "./style";
import{Button} from "@/components/button/index";
import { useState } from "react";
import {router } from "expo-router";
import { InputIcon } from "@/components/inputIcon";
import { faBookOpen, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Index(){
    function telaInicial() {
        router.navigate("../");
    }
    function singUp(){
        router.navigate("/screens/signUp")
    }
        const [name, setName] = useState("")
        const [senha, setSenha] = useState<string>()
            
        return(
            <View style={styles.containerPrincipal}>
                
                <View style= {styles.containerStart}>

                    <Image style={styles.img} source={require("src/img/logoAgendly.png")}/>

                </View>
                
                   
                <View style={styles.containerMid}>
    
                <InputIcon icon={faEnvelope} place="Digite seu e-mail"/>

                <InputIcon icon={faLock} place="Senha"/>
                
    
                <Button title="Entrar" onPress={telaInicial}/>

                <Text style={styles.text}>Esqueceu a senha?</Text>
                
                </View>
                
                
                <View style={styles.containerEnd}>

                <Button title="Criar nova conta" onPress={singUp}/>
    
                </View>
               
             
            </View>
        )
}