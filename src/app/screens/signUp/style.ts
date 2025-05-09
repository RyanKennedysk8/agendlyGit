import { StyleSheet } from "react-native";
import { Colors } from "@/colors/color";

export const styles = StyleSheet.create({

    backgroundScreen:{
        flex:1,
        backgroundColor:Colors.corScreen,
    },
    backgoundTop:{
        flex:1,
        alignContent: "center",
        alignItems: "center"
    },
    backgoundMid:{
        flex:2,
        alignContent: "center",
        alignItems: "center",
        gap: 15
    },
    backgroundEnd:{
        flex:1,
        alignContent: "center",
        alignItems: "center"
    },
    img:{
        width: 150,
        height: 150
    }

})