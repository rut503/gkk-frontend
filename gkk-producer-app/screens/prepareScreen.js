import { View, Text, StyleSheet } from "react-native"

import Colors from "../constants/colors"

const PrepareScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Prepare Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.DarkMode.background2
    },
    text: {
        color: "white",
        fontSize: 24,
    },
})

export default PrepareScreen
