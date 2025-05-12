import { StyleSheet } from "react-native";
import { Colors } from "@/colors/color";
import { fonts } from "@/fonts/fonts";
export const styles = StyleSheet.create({
    button:{
        width: "95%",    
        height: 50,
        backgroundColor: Colors.corButton,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:8,
        
    },
    title:{
        fontSize: 18,
        color:"#fff",
        fontFamily: fonts.robotoBold
    }
})