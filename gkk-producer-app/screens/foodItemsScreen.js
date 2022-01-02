import { View, Text, StyleSheet, Button } from "react-native"

const FoodItemsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Food Items Screen</Text>
            <Button title="Food Item Detail" onPress={() => navigation.navigate("Food Item Details")} />
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

export default FoodItemsScreen
