import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles, tabBarOptions } from "../style/layout";
import { Colors } from "@/colors/color";
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
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={focused ? 32 : 24}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="companySearch"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={focused ? 32 : 24}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="appointmentsList"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={focused ? 32 : 24}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profileUser"
        options={{
          title: '',
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.iconBackground} />}
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={focused ? 32 : 24}
                color={color}
              />
            </View>
          ),
        }}
      />

    </Tabs>
  );
}
