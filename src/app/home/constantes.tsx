import { useRef } from "react";
import { Animated } from "react-native";

export const lojas = [
    {
        id: "1",
        nome: "salão duarte",
        imagem: "https://cdn.pixabay.com/photo/2020/05/21/11/42/hair-salon-5200393_1280.jpg",
        endereco: "Rua Henrique Leite, 45 - Novo progresso, Contagem",
        distancia: "5.3 km"
    },
    {
        id: "20",
        nome: "Barbearia MaxTitanio",
        imagem: "https://img.freepik.com/fotos-gratis/jovem-na-barbearia-aparando-cabelo_1303-26254.jpg?ga=GA1.1.566894296.1747072982&semt=ais_hybrid&w=740",
        endereco: "R. Mafra, 432 - Coqueiros, Belo Horizonte",
        distancia: "1.5km"
    },
    {
        id: "3",
        nome: "Barbearia do grau",
        imagem: "https://img.freepik.com/fotos-gratis/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba_1303-20953.jpg?ga=GA1.1.566894296.1747072982&semt=ais_hybrid&w=740",
        endereco: "R. Mafra, 432 - Coqueiros, Belo Horizonte",
        distancia: "1.8km"
    },
]

// Criamos uma referência para controlar o scroll da tela
export const scrollY = useRef(new Animated.Value(0)).current;

// Interpolação da animação: esconde os elementos conforme o scroll


