import { Colors } from "@/colors/color"
import { fonts } from "@/fonts/fonts"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    backgroundTela:{
        backgroundColor:"transparent",
        flexDirection:"row",
        width:"100%",
        height:30,
        alignItems:"center",
        

    },
    titleButton:{
        fontSize:16,
        color:"#ffffff",
        fontFamily:fonts.robotoRegularItalic,
        justifyContent:"center"

    },icon: {
        marginRight:10,
        
        color: "#ffffff",
        justifyContent:"flex-start",
        
        
      },

})