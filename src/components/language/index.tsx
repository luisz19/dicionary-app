import { Pressable, Text, View, PressableProps } from "react-native"
import { styles } from "./styles"

import CountryFlag from "react-native-country-flag"

type LanguageProps = PressableProps & {
    name: string
    icon: string
    //isSelected: boolean
}

export function Language ({ name, icon }: LanguageProps) {
    return (
        <Pressable style={styles.container}>
            <View style={styles.emoji}>
                {/* {emojiFlags.US.emoji} */}
                <CountryFlag isoCode={icon} size={10} />
                <Text style={styles.text}>
                    {name}
                </Text>
            </View>
        </Pressable>
    )
}