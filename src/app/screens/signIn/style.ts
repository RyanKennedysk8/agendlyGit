import { StyleSheet } from "react-native";
import { Colors } from "@/colors/color";

export const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: Colors.corScreen,
        paddingHorizontal: 20,
        paddingVertical: 40
      },
      
      containerStart: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      
      containerMid: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      },
      
      containerEnd: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },

    title:{
        color:"#ffffff",
        fontSize: 50

    },
    img:{
        width: 150,
        height: 150,
        borderRadius:15

    },
    imgPaisagem:{
        width: 500,
        height: 200,


    },
    text:{
        fontSize: 16,
        color:"#FFF",
        alignSelf:"flex-start",
        padding: 10
    }

})