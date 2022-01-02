import { View, Text, StyleSheet } from "react-native"

const FoodItemDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Food Item Details Screen</Text>
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

export default FoodItemDetailsScreen
