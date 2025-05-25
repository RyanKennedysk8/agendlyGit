import { Colors } from "@/colors/color"
import { fonts } from "@/fonts/fonts"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    backgroundPrincipal:{
        flex:1,
        backgroundColor:Colors.corScreen,
        paddingHorizontal:20,
        paddingVertical:40,
        
        
    },
    backgroundTop:{
        flex:0.7,
        alignItems:"center",
        justifyContent:"center",
    },
    backgroundMid:{
        flex:1.3,
        
        alignContent:"center",
        justifyContent:"center",
    },
    backgroundEnd:{
        flex:3.5,
        gap:30,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:20
    },
    text:{
        fontFamily:fonts.robotoMediumItalic,
        color: Colors.white,
        fontSize:30,
        textAlign:"center",
        textAlignVertical:"center"
       
    },
    img:{
        width:100,
        height:100
    }

})