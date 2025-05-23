import { Colors } from "@/colors/color";
import { fonts } from "@/fonts/fonts";
import { StyleSheet, Dimensions} from "react-native";

const { width } = Dimensions.get('window');

 
export const styles = StyleSheet.create({

  containerPrincipal: {
    flex: 1,
    backgroundColor:Colors.background
  },

    containerTop:{
      position: "absolute",
      width:"100%",
      backgroundColor: "#1e1e1e",
      zIndex: 10,
  },
  containerBanner: {
    position:"relative",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  containerInfoBox: {
    position: 'absolute',
    height:110,
    bottom:-70,
    width:"90%",
    borderRadius:15,
    padding:16,
    alignItems:"center",
    backgroundColor:Colors.white,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    
  },
  conteinerText:{
    justifyContent:"flex-start",
    alignItems:"flex-start",
    width:"100%"
  },
  containerMiniTopo:{
    backgroundColor:Colors.blue,
    height:60,
    flexDirection:"row"
  },
  backgroundScroll: {
    paddingTop: 200,
    paddingBottom: 30,
  },
  bannerImg: {
    width: "100%",
    height: 200,
    resizeMode: 'cover',
   
  },
  logoImg: {
    width: 70,
    height: 70,
    bottom:50,
    borderRadius: 35,
    backgroundColor: '#00000000',

  },
  nomeLoja: {
    bottom:50,
    fontSize: 25,
    fontFamily: fonts.robotoBold,
    
  },
  distanciaLoja:{
    bottom:50,
    fontSize: 15,
    fontFamily: fonts.robotoRegular,
  },
  containerBotaoVoltar:{
   
    width:60,
    height:60,
    alignItems:"center",
    justifyContent:"center"
  },
  textMiniTopo:{
    fontFamily:fonts.robotoRegular,
    fontSize:20
  },
  icon:{
    color:Colors.black,
    padding:5,
    shadowColor: '#2f22ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
    
  },
  imgLogoMini:{
    width:40,
    height:40,
    borderRadius:5
  }
  
});
