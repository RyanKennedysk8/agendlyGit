import { styles } from "./style";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';


type Props = TouchableOpacityProps&{
    title: string;
    icon: any;
    size: number;
}

export function ButtonLocal({title,icon, size, ...rest}: Props){
    return(
    <TouchableOpacity style={styles.backgroundTela} {...rest}>
        
        <Ionicons name={icon} size={size} style={styles.icon} />

        <Text style={styles.titleButton}>{title}</Text>

    </TouchableOpacity>
    )
}