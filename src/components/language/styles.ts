import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: colors.gray[100],
        fontSize: 16,
        fontWeight: "400",

    },
    emoji: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    }
})