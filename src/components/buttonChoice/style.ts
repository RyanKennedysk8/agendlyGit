import { Colors } from "@/colors/color"
import { fonts } from "@/fonts/fonts"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    backgroundTela:{
        backgroundColor:Colors.white,
        flexDirection:"row",
        width:"90%",
        height:170,
        borderRadius:15,
        alignItems:"center",
        

    },
    titleButton:{
        fontSize:25,
        color:"#000000",
        fontFamily:fonts.robotoRegular,
        justifyContent:"center"

    },icon: {
        marginLeft: 20,
        marginRight:20,
        
        color: "#000000",
        justifyContent:"flex-start",
        
        
      },

})