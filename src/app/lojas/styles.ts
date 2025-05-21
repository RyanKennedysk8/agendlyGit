import { fonts } from "@/fonts/fonts";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backgroundPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundBanner: {
    height: 240,
    backgroundColor: '#ccc',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
  },
  logoInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,

  },
  logoImg: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#00000000',
    elevation: 5,
    
  },
  textInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nomeLoja: {
    fontSize: 20,
    fontFamily: fonts.robotoBlack,
    marginBottom: 4,
  },
  backgroundScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
