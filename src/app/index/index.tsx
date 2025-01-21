import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Languages } from "@/components/languages"
import { LanguagesList } from "@/utils/languages"
import { Words } from "@/components/words"


export default function Index () {

    const [language, setLanguage] = useState(LanguagesList[0].name)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="language" size={42} color={colors.blue[400]} />
                <Text>Dicionário</Text>

                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.blue[400]} />
                </TouchableOpacity>
            </View>

                <Languages
                    selected={language}
                    onChange={setLanguage}
                />

                <Words />
                <Words />
                <Words />
                <Words />        

        </View>
    )
    
}