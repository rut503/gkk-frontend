import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import FoodItemComponent from "../components/foodItemComponent"

import Colors from "../constants/colors"

const FoodItemsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>Total Food Items I Offer </Text>
                    <Text style={styles.stat}>99</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Add New Food Item")}>
                    <Text style={styles.text}>Add New Item</Text>
                    <FontAwesome name="plus" style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <FoodItemComponent style={{marginTop: 10}} navigation={navigation} data={{ foodName:"Tava Pulav", time:"Dinner", chef:"Shika Misra", price:15.00, type:"Non-Vegetarian", spicyLevel:2, quantity:32, stars:3, numOfReviews:3, distance:13 }}/>
                <FoodItemComponent style={{marginTop: 10}} navigation={navigation} data={{ foodName:"Rava Dosa", time:"Lunch", chef:"Dhruv Parekh", price:5.99, type:"Vegetarian", spicyLevel:1, quantity:12, stars:4, numOfReviews:44, distance:3 }}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: Colors.DarkMode.background2,
    },

    topBar: {
        alignItems: "center",
        flexDirection: "row",
        width: "95%",
        justifyContent: "space-between",
        borderRadius: 5,
    },
    statContainer:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        flexGrow: 1,
        marginRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: Colors.DarkMode.background1,
    },
    stat:{
        padding: 10,
        color: Colors.DarkMode.text1,
        borderColor: Colors.DarkMode.accent,
        borderWidth: 2,
        borderRadius: 5,
    },
    btn:{
        flexDirection: "row",
        padding: 12,
        backgroundColor: Colors.DarkMode.background1,
        borderRadius: 5,
        color: Colors.DarkMode.text1
    },
    icon:{
        color: Colors.DarkMode.green,
        alignSelf: "center",
        marginLeft: 5,
        fontSize: 18,
    },

    scrollView:{
        width: "95%",
    },

    text: {
        color: Colors.DarkMode.text1,
    },
})

export default FoodItemsScreen
