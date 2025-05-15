import { Colors } from "@/colors/color";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    backgroundTela:{
        flex:1,
        backgroundColor:Colors.corScreen
    },
    backgroundTop:{
        flex:0.7,
        alignItems:"center",
        justifyContent:"center"
    },
    backgroundMenu:{
        flex:5,
        backgroundColor:Colors.blue
    },
    backgroundMid:{
        flex:10,
        backgroundColor:Colors.yellow
    },
   
    img:{
        width:120,
        height:30
    }
})