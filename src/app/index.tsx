import React, { useEffect } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import { useRouter } from 'expo-router'
import { styles } from './style'
import { useFonts } from '@/hooks/useFonts' // importando seu hook de fontes

export default function SplashScreen() {
  const router = useRouter()
  const fontsLoaded = useFonts() 

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        router.push('/screens/signIn/singIn') 
      }, 3) // tempo para a splash (ajuste como quiser)

      return () => clearTimeout(timer)
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../src/assets/animation/splashScreen.json')}
        autoPlay
        loop={false}
        speed={1.5}
        style={styles.animation}
      />
    </View>
  )
}
