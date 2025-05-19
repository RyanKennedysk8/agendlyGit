import { Text, View, TextInputProps} from "react-native";
import { Input } from "../input";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";

interface InputProps extends TextInputProps {
    icon?: any;
    place: string;
    size: number
   
  }

export function SearchFilter({icon, place, size,...rest}: InputProps){

    return(
        <View style={styles.container}>

            {icon && ( // Renderiza o ícone apenas se ele for fornecido
                   <Ionicons name={icon} size={size} style={styles.icon}/>             
                )}
                <Input style={styles.input} placeholder={place}/>
        </View>
    )
}