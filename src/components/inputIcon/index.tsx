import { Text, View, TextInputProps} from "react-native";
import { Input } from "../input";

import { styles } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";


interface InputProps extends TextInputProps {
    icon?: IconDefinition;
    place: string
   
  }

export function InputIcon({icon, place ,...rest}: InputProps){

    return(
        <View style={styles.container}>
            <Input style={styles.input} placeholder={place}/>

            {icon && ( // Renderiza o ícone apenas se ele for fornecido
                <FontAwesomeIcon icon={icon} style={styles.icon} size={30} />
            )}
        </View>
    )
}