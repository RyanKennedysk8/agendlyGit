import { View, Text } from "react-native"
import { Button } from "@/components/button"
import { styles } from "./style"
import {router} from "expo-router";


export default function Index(){
    function voltarTela(){
        router.navigate("/")
    }
    
    return(
        <View style={styles.backgroud}>
            <Text style={styles.title} >Login</Text>
            <Button style={styles.button} title="Voltar" onPress={voltarTela}/>
        </View>
    )
}