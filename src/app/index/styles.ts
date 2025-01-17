import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 34,
        alignItems: "center",
        marginBottom: 20,
        width: "100%"
    },

    logo: {
        color: "#FFF",
        fontSize: 24
    }
})