import {View, Text, StyleSheet, Image} from "react-native";
import { styles } from "./style";
import { Input } from "../components/input";
import{Button} from "@/components/button/index";
import { useState } from "react";
import {router } from "expo-router";
import { InputIcon } from "@/components/inputIcon";
import { faBookOpen, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function Index(){
    function telaLogin() {
        router.navigate("/screens/signIn/singIn");
      }
    const [name, setName] = useState("")
    const [senha, setSenha] = useState<string>()
        
    return(
        <View style={styles.containerPrincipal}>
            
            <View style= {styles.containerStart}>
                <FontAwesomeIcon icon={faBookOpen} size={34} color="#ffffff" />
                <Text style={styles.title}>Agendly</Text>
            </View>
            
               
            <View style={styles.containerMid}>

            <InputIcon icon={faEnvelope} placeholder="Digite aqui seu e-mail"/>
            <InputIcon icon={faLock} placeholder="Senha"/>
            

            <Button title="Entrar" onPress={telaLogin}/>

            <Text style={styles.text}>Esqueceu a senha?</Text>

            </View>
            
            <View style={styles.containerEnd}>
            <Button title="Criar nova conta" onPress={telaLogin}/>

            </View>
           
         
        </View>
    )
} 



  /*
  <Image style={styles.img} source={require("../img/agendaLogo.png")}/>

  <Image style={styles.imgPaisagem} source={{uri:'https://cdn.pixabay.com/photo/2023/10/13/15/38/butterfly-8313010_1280.jpg'}}/>*/

