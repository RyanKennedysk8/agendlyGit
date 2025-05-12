import { Colors } from "@/colors/color"
import { fonts } from "@/fonts/fonts"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    backgroundTeste:{
        backgroundColor:Colors.white,
        width:"95%",
        height:200,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
    },
    titleButton:{
        fontSize:30,
        color:"#050505",
        fontFamily:fonts.robotoMedium

    },
    icon: {
        marginRight: 10,
        opacity:0.7,
        color: "#000000"
        
    },

})