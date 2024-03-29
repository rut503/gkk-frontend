import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"
import ReviewComponent from "../components/reviewComponent"

const FoodItemDetailsScreen = ({ navigation, route }) => {
    const [data, setData] = useState(route.params.data)

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: Colors.DarkMode.background2 }}>
            
            <Image style={styles.foodImage} source={{ uri: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"}}/>
            
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.tertiary}>{data.time}</Text>
                    <Text style={styles.tertiary}>Made by - {data.chef}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.primary}>{data.foodName}</Text>
                    <Text style={{ ...styles.primary, color: Colors.GREEN }}>$ {data.price}</Text>
                </View>

                <View style={{ ...styles.row, justifyContent: "flex-start" }}>
                    <Text style={styles.secondary}>{data.type}</Text>
                    <FontAwesome name="circle" style={styles.dotIcon}/>
                    <FontAwesome5 name="pepper-hot" style={{...styles.pepperIcon, color: data.spicyLevel > 0 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                    <FontAwesome5 name="pepper-hot" style={{...styles.pepperIcon, color: data.spicyLevel > 1 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                    <FontAwesome5 name="pepper-hot" style={{...styles.pepperIcon, color: data.spicyLevel > 2 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                    <FontAwesome name="circle" style={styles.dotIcon}/>
                    <Text style={styles.secondary}>{data.quantity} oz</Text>
                </View>
                
                <View style={styles.row}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 0 ? Colors.DarkMode.accent : Colors.DarkMode.text2}}/>
                        <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 1 ? Colors.DarkMode.accent : Colors.DarkMode.text2}}/>
                        <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 2 ? Colors.DarkMode.accent : Colors.DarkMode.text2}}/>
                        <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 3 ? Colors.DarkMode.accent : Colors.DarkMode.text2}}/>
                        <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 4 ? Colors.DarkMode.accent : Colors.DarkMode.text2}}/>
                        <Text style={styles.secondary}> ({data.numOfReviews})</Text>
                    </View>
                    <Text style={styles.secondary}>{data.distance} Miles</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.secondary}>This is a long or short description about the food you're viewing right now. It is very delicious and juicy. The taste is nothing like you have every tried before.</Text>
                </View>

                <Text style={styles.heading}>Customer Reviews for {data.foodName}</Text>

                <ReviewComponent />
                <ReviewComponent />
                <ReviewComponent />
                <ReviewComponent />
                <ReviewComponent />
                <ReviewComponent />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Colors.DarkMode.background2,
    },
    row:{
        margin: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    heading: {
        textAlign: "center",
        fontSize: 20,
        color: Colors.PRIMARY_TEXT,
        marginVertical: 30,
    },
    primary: {
        color: Colors.WHITE,
        fontSize: 22,
        fontWeight: "bold",
    },
    secondary: {
        color: Colors.PRIMARY_TEXT,
        fontSize: 14,
    },
    tertiary: {
        color: Colors.SECONDARY_TEXT,
        fontSize: 14,
        fontWeight: "bold",
    },

    dotIcon:{
        alignSelf: "center",
        textAlign: "center",
        color: Colors.DarkMode.text1,
        fontSize: 6,
        width: 20,
    },
    pepperIcon:{
        alignSelf: "center",
        color: Colors.RED,
        fontSize: 14,
    },
    starIcon:{
        alignSelf: "center",
        color: Colors.ACCENT,
        fontSize: 14,
    },

    foodImage:{
        height: 200,
    },

    text: {
        color: "white",
        fontSize: 24,
    },
})

export default FoodItemDetailsScreen
