import { styles } from "./style";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = TouchableOpacityProps&{
    title: string,
    icon: IconDefinition
}

export function ButtonChoice({title,icon, ...rest}: Props){
    return(
    <TouchableOpacity style={styles.backgroundTeste} {...rest}>
        <Text style={styles.titleButton}>{title}</Text>
        <FontAwesome icon={icon} style={styles.icon} size={30}/>
    </TouchableOpacity>
    )
}