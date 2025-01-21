import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        marginHorizontal: 16,
        padding: 15,
        borderWidth: 2,
        borderColor: colors.gray[500],
        borderRadius: 10,
    },
    word: {
        fontSize: 15,
        color: colors.gray[200]
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-around",
        flex: 1,
    }
})