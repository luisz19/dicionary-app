import { Pressable, Text, View, PressableProps } from "react-native"
import { styles } from "./styles"
import { colors } from "@/styles/colors"

import CountryFlag from "react-native-country-flag"

type LanguageProps = PressableProps & {
    name: string
    icon: string
    isSelected: boolean
}

export function Language ({ name, icon, isSelected, ...rest }: LanguageProps) {

    const color = isSelected ? colors.blue[400] : colors.gray[300]

    return (
        <Pressable style={styles.container} {...rest}>
            <View style={styles.emoji} >
                <CountryFlag isoCode={icon} size={10}/>
                <Text style={[styles.text, {color}]} >
                    {name}
                </Text>
            </View>
        </Pressable>
    )
}