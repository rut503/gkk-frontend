import { View, Text, StyleSheet } from "react-native"

import Colors from "../constants/colors"

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY_BACKGROUND,
    },
    text: {
        color: "white",
        fontSize: 24,
    },
})

export default MenuScreen
