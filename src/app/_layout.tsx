// app/_layout.tsx
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "@/hooks/useFonts";
import { useEffect } from "react";



export default function RootLayout() {
  
  const fontsLoaded = useFonts();
  
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
   
}
