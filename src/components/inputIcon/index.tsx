import { Text, View, TextInputProps} from "react-native";
import { Input } from "../input";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import { styles } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";


interface InputProps extends TextInputProps {
    icon: IconDefinition;
    place: string
   
  }

export function InputIcon({icon, place ,...rest}: InputProps){

    return(
        <View style={styles.container}>
            <FontAwesomeIcon icon={icon} style={styles.icon} size={30} />

            <Input style={styles.input} placeholder={place}/>
            
        </View>
    )
}