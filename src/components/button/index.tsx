import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps &{
    title: string
}

export function Button({title, ...rest}: Props){   
    return(
    <TouchableOpacity style={styles.button} {...rest} >
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    )
}