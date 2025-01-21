import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 34,
        alignItems: "center",
        marginBottom: 20,
        width: "100%"
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderWidth: 2,
        borderTopColor: colors.gray[200],
        padding: 20,
        paddingBottom: 42,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        
    },
    modalLanguage: {
        color: colors.gray[300],
        fontSize: 16,
    },
    modalTranslate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.gray[800],
        marginHorizontal: 22,
        borderRadius: 8,
    },
    modalWord: {
        color: colors.gray[100],
        fontSize: 18,
        padding: 8,
        paddingHorizontal: 12,
    },
    modalExemple: {
        color: colors.gray[300],
        fontSize: 14,
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: colors.gray[600],
        borderBottomWidth: 2,
        paddingBottom: 20,
    },
    modalFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    modalButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 2,
        borderColor: colors.gray[200],
        borderRadius: 8,
        padding: 4,
    },
    modalAction: {
        color: colors.gray[200],
    }


    
})