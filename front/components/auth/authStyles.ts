import { StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
    regTitle: { fontSize: 24, lineHeight: 28, fontWeight: 700 },
    regTitleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
    },
    formGroup: {
        gap: 8
    },
    label: {
        fontWeight: 700,
        fontSize: 16,
    },
    form: {
        alignSelf: "center",
        maxWidth: 500,
        width: "100%",
        minWidth: 50,
        gap: 16,
        justifyContent: "center",
        flex:1
    }
});

export default authStyles;
