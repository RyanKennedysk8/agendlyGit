import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    tabBar: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#111',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      tabButton: {
        padding: 10,
      },
      centralButton: {
        position: 'absolute',
        top: -25, // sobe o botão
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'black',
        zIndex: 10,
      },
});
