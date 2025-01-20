import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.blue[400],
        padding: 8,
        width: "100%",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        color: colors.gray[200],
        fontSize: 14
    }
})