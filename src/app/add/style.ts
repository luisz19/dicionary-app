import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 34,
        paddingTop: 40,
        alignItems: "center",
        marginBottom: 20,
        width: "100%"

    },
    title: {
        color: colors.gray[300],
        fontSize: 20
    }
})