import { View, Image, Text, TextInput, 
Animated, ScrollView, StyleSheet,} from "react-native";

import { router } from "expo-router";
import { styles } from "../home/style";


export default function Home(){
    
    

    return(
        <View style={styles.backgroundTela}>

            <View style={styles.backgroundTop}>
                <Image source={require("@/img/logoNome.png")} style={styles.img}/>
            </View>

            <View style={styles.backgroundMenu}>
                
                

            </View>

            <View style={styles.backgroundMid}>
                
            </View>

            <View >
                
            </View>
        </View>
    )
}