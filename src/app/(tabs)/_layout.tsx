import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles, tabBarOptions } from "../../styles/layoutStyle/layout";

import { View, TouchableWithoutFeedback } from "react-native";

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default function TabLayout() {
  return (
    
    <Tabs screenOptions={tabBarOptions}>
      
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarButton: (props ) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={focused ? 28 : 22}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={focused ? 28 : 22}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={focused ? 28 : 22}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={focused ? 28 : 22}
                color={color}
              />
            </View>
          ),
        }}
      />

    </Tabs>
  );
}
