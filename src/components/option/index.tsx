import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "primary" | "secondary"
}

export function Option({name, icon, variant = "primary", ...rest}: Props) {
    return (
         <TouchableOpacity style={variant === "primary" ? styles.primaryContainer : styles.secondaryContainer} {...rest}> 
            <MaterialIcons 
                name={icon} 
                size={15} 
                color={variant === "primary" ? colors.blue[400] : colors.gray[200]} 
            />

            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>
                
    )
}