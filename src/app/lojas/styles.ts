import { StyleSheet } from "react-native"
import { Dimensions } from "react-native";


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    backgroundPrincipal:{
        
    },
    backgroundBanner:{
        backgroundColor: "#ff0000",
        height:210
      
    },
    backgroundScroll:{
        overflow: 'hidden',
        backgroundColor: '#fffb00',
        elevation: 4,
        
    },
    backgroundContainer:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:"#1b1"

    },
    backgroundLogo:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
       
    },
    backgroundNomeLoja:{
        flex:3,
        flexDirection:"column",
        justifyContent:"center",
        paddingLeft:20,
        backgroundColor:"#fff"
        
    },


    title:{
        fontSize:20,
        color:"#0a0a0a"
    },
    img: {
        
        width: 70,
        height: 70,
        borderRadius:15
      },
    

})