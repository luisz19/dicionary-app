import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 40,
        alignItems: "center",
        marginBottom: 20,
        width: "100%"

    },
    chooseLanguage: {
        color: colors.gray[400],
        marginHorizontal: 15,
        fontSize: 15
    },
    title: {
        color: colors.gray[300],
        fontSize: 18
    },
    inputs: {
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        marginHorizontal: 15,
        marginTop: 20
    }
})