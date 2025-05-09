import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 60,
    width:"95%"
  },

  icon: {
    marginRight: 10,
    opacity:0.7,
    color: "#000000"
    
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: '#000000'
  },
  
 placeHolder: {
    color:"#000000",
    opacity: 1
 }
});