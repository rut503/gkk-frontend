import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import Colors from "../constants/colors"

const FoodItemDetailsScreen = ({ navigation, route }) => {
    const [data, setData] = useState(route.params.data)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.time}</Text>
            <Text style={styles.text}>Made by - {data.chef}</Text>
            <Text style={styles.text}>{data.foodName}</Text>
            <Text style={styles.text}>{data.price}</Text>
            <Text style={styles.text}>{data.type}</Text>
            <Text style={styles.text}>Spicy Level: {data.spicyLevel}</Text>
            <Text style={styles.text}>{data.quantity} oz</Text>
            <Text style={styles.text}>Stars: ({data.numOfReviews})</Text>
            <Text style={styles.text}>{data.distance} miles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.DarkMode.background2,
    },
    text: {
        color: "white",
        fontSize: 24,
    },
})

export default FoodItemDetailsScreen
