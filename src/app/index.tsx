import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRouter } from 'expo-router';
import { styles } from './style';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/screens/signIn/singIn");
    }, 3000); // tempo da splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../src/assets/animation/netflixSplash.json')
        }
        autoPlay
        loop={false}
        speed={1.5} // pode ajustar a velocidade
        style={styles.animation}
      />
    </View>
  );
}

