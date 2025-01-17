import { View, Image, TouchableOpacity, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Languages } from "@/components/languages"


export default function Index () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Tradutor</Text>

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Languages />

        </View>
    )
    
}