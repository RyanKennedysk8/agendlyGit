import { StyleSheet } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Colors } from '@/colors/color';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.corScreen,
    position: "absolute",
    height: 60,
 
    
  },
  label: {
    fontSize: 1,
    fontWeight: '600',
  },

  iconContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconBackground: {
    position: "absolute",
    width: 100,         
    height: 50,        
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 25,  // metade da width/height para ficar redondo
  },
 
});

export const tabBarOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#ffffff',
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: styles.label,
    
  

  };
