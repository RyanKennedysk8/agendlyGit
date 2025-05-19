import { Dimensions } from "react-native";
import { Colors } from "@/colors/color";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height:height-30,
    backgroundColor: "#ebebeb",
  },

  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1e1e1e",
    zIndex: 10,
    gap:10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  // Topo com a logo fixa
  headerLogo: {
    alignItems: "center",
    marginBottom: 10,
  },

  logo: {
    width: 90,
    height: 30,
  },
  


  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 10,
    fontSize: 16,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 15,
    paddingLeft:10
  },

 

  categoryText: {
    color: "#fff",
    fontSize: 14,
  },

  // Conteúdo da tela principal (cards de serviços)
  content: {
    paddingTop: 140,
    paddingBottom: 30,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#ebebeb",
    height:340,
    width:"100%",
    padding: 10,
    alignItems: "center",
  },

  // Conteúdo do filtro
  filter:{
    flex:1,
    flexDirection:"row",
    gap:12
   },
   filterLocal:{
    flex:2,
    
   },
   filterData:{
    flex:2
   }
});
