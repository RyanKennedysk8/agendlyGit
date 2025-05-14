import { View, Image, Text} from "react-native";
import { Button } from "@/components/button";
import { router } from "expo-router";
import { styles } from "../appointmentsList/style";

export default function AppointmentsList(){
    
    function telaInicial(){
        router.navigate("/signIn/singIn")
    }
   

    return(
        <View style={styles.backgroundTela}>

            <View style={styles.backgroundTela}>

                <Text> Lista de Agendamentos</Text>

            </View>

            
        </View>
    )
}