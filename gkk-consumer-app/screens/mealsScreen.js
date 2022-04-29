import { View, Text, StyleSheet } from "react-native"

const MealsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meals Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "purple",
        fontSize: 24,
    },
})

export default MealsScreen
