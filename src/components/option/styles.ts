import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 5,
        borderColor: colors.gray[200],
        

    },
    primaryTitle: {
        color: colors.blue[400],
        
    },
    primaryContainer: {
        borderColor: colors.blue[400],
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 8,


    },
    secondaryTitle: {
        color: colors.gray[200],
        

    },
    secondaryContainer: {
        borderColor: colors.gray[400],
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 8,
    }
})