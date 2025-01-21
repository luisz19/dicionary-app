import { Text, View, TouchableOpacity } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export function Words() {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.word} numberOfLines={1}>Palavra</Text>
                <MaterialIcons name="translate" size={24} color={colors.gray[200]} />
                <Text style={styles.word} numberOfLines={1}>Tradução</Text>
            </View>

            <TouchableOpacity>
                <MaterialIcons name="more-horiz" size={24} color={colors.gray[200]} />
            </TouchableOpacity>

        </View>
    )
}
