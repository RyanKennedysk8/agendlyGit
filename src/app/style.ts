import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        backgroundColor: "#1b1b1b",
        alignContent:"center",
        alignItems:"center"
        
      },
      containerMid: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        width:"100%",
        
      },
      containerEnd: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      },
    
      
    title:{
        color:"#ffffff",
        fontSize: 50

    },
    img:{
        width: 100,
        height: 100,
        borderRadius:15

    },
    imgPaisagem:{
        width: 500,
        height: 200,


    },
    text:{
        fontSize: 14,
        color:"#FFF",
        alignSelf:"center",
        padding: 10
    }

}) 