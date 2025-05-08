import {View, Text, StyleSheet, Image} from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import {router } from "expo-router";
import * as Animatable from 'react-native-animatable';
import { faBookOpen, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export default function Index(){
    useEffect(() => {
        const timer = setTimeout(()=> {
            router.navigate("/screens/signIn/singIn");
        }, 2000)
        return () => clearTimeout(timer)
    },[])
        
    return(

        <Animatable.View 
        style={styles.containerPrincipal}
        animation="fadeIn"
        duration={1500}>

            <View style={styles.containerMid}>
                <FontAwesomeIcon icon={faBookOpen} size={34} color="#ffffff" />
                <Text style={styles.title}>Agendly</Text>
            </View>
        </Animatable.View>

    )
} 



  /*
  <Image style={styles.img} source={require("../img/agendaLogo.png")}/>

  <Image style={styles.imgPaisagem} source={{uri:'https://cdn.pixabay.com/photo/2023/10/13/15/38/butterfly-8313010_1280.jpg'}}/>*/

