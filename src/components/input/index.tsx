import { TextInput, TextInputProps, View } from "react-native";
import {styles} from "../input/style"
import { FontAwesome } from "@expo/vector-icons";


export function Input({...rest}: TextInputProps ){
    return(

        <TextInput style={styles.textBox} {...rest}/>
        
    )
}
