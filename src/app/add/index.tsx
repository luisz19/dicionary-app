import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"

import { style } from "./style"
import { colors } from "@/styles/colors"
import { Languages } from "@/components/languages"


export default function Add () {

    const [language, setLanguage] = useState("")

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.gray[300]} />
                </TouchableOpacity>
                <Text style={style.title}>Nova palavra</Text>
            </View>
            <Languages 
                selected={language}
                onChange={setLanguage}
            />

            
        </View>
    )
}