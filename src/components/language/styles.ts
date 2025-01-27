import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: colors.gray[600],
        fontSize: 16,
        fontWeight: "500",

    },
    emoji: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    }
})