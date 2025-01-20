import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button ({title, ...rest} : Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.text}> { title } </Text>
        </TouchableOpacity>
    )
}
