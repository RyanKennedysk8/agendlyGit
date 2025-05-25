import { useRef } from "react";
import { Animated } from "react-native";


// Criamos uma referência para controlar o scroll da tela
export const scrollY = useRef(new Animated.Value(0)).current;

// Interpolação da animação: esconde os elementos conforme o scroll


