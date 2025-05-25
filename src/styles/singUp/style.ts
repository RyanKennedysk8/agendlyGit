import { StyleSheet } from "react-native";
import { Colors } from "@/colors/color";
import { useFonts } from "@expo-google-fonts/roboto";

export const styles = StyleSheet.create({

    backgroundScreen:{
        flex:1,
        backgroundColor:Colors.corScreen,
        paddingHorizontal:20,
        paddingVertical:40
    },
    backgoundTop:{
        flex:1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    backgoundMid:{
        flex:2,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    }, 
    backgroundEnd:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
        
    },
    img:{
        width: 150,
        height: 150
    }

})