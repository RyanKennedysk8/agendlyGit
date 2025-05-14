import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export default function Index({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const iconName = options.tabBarIconName;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Botão central especial
        if (route.name === 'Central') {
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.centralButton}
            >
              <FontAwesome name="calendar" size={30} color="black" />
            </TouchableOpacity>
          );
        }

        // Botões normais (com mudança de cor se estiver ativo)
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}
          >
            <FontAwesome
              name={iconName}
              size={24}
              color={isFocused ? '#444' : '#fff'} // cor escura se ativo, branca se não
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}



