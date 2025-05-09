import { StyleSheet } from "react-native";
import { Colors } from "@/colors/color";
export const styles = StyleSheet.create({
    button:{
        width: "95%",    
        height: 50,
        backgroundColor: Colors.corButton,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:5
    },
    title:{
        fontSize: 18,
        color:"#fff",
        fontWeight:600
    }
})