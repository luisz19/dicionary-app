import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        maxHeight: 52,
        borderColor: colors.gray[500],
        borderBottomWidth: 2,
    },
    content: {
        paddingHorizontal: 24,
        gap: 16,
    }

})