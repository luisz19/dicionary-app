import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type WordsProps = TouchableOpacityProps &{
    word: string;
    translation: string;
    onDetails: () => void;
}

export function Words({word, translation, onDetails }: WordsProps) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.word} numberOfLines={1}>{word}</Text>
                <MaterialIcons name="translate" size={24} color={colors.blue[300]} />
                <Text style={styles.word} numberOfLines={1}>{translation}</Text>
            </View>

            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={24} color={colors.gray[200]} />
            </TouchableOpacity>

        </View>
    )
}
