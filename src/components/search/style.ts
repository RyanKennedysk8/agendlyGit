import { StyleSheet } from 'react-native';
import { fonts } from '@/fonts/fonts';
import { Colors } from '@/colors/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
    width:"100%",
    shadowColor:"#000",
    shadowOffset:{width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2

  },

  icon: {
    marginRight: 10,
    opacity:0.7,
    color: "#000000"
    
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: '#000000',
    fontFamily:fonts.robotoRegular
    
  },
  
 placeHolder: {
    color:Colors.placeholder
    
 },


});