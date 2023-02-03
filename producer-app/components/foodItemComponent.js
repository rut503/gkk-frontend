import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"

const FoodItemComponent = ({ navigation, style, data }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Food Item Details", {data})}>
            <View style={{...styles.container, ...style}}>
                <Image style={styles.foodImage} source={{url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"}} />

                <View style={styles.infoCol}>
                    <View style={styles.row}>
                        <Text style={styles.row1text}>{data.time}</Text>
                        <Text style={styles.row1text}>Made by - {data.chef}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.row2text1}>{data.foodName}</Text>
                        <Text style={styles.row2text2}>$ {data.price}</Text>
                    </View>
                    <View style={{...styles.row, justifyContent: "flex-start"}}>
                        <Text style={styles.text}>{data.type}</Text>
                        <FontAwesome name="circle" style={styles.dotIcon}/>
                        <FontAwesome5 name="pepper-hot" style={{...styles.pepperIcon, color: data.spicyLevel > 0 ? Colors.RED : Colors.SECONDARY_TEXT }} />
                        <FontAwesome5 name="pepper-hot" style={{...styles.pepperIcon, color: data.spicyLevel > 1 ? Colors.RED : Colors.SECONDARY_TEXT }} />
                        <FontAwesome5 name="pepper-hot" style={{...styles.pepperIcon, color: data.spicyLevel > 2 ? Colors.RED : Colors.SECONDARY_TEXT }} />
                        <FontAwesome name="circle" style={styles.dotIcon}/>
                        <Text style={styles.text}>{data.quantity} oz</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 0 ? Colors.ACCENT : Colors.SECONDARY_TEXT}}/>
                            <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 1 ? Colors.ACCENT : Colors.SECONDARY_TEXT}}/>
                            <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 2 ? Colors.ACCENT : Colors.SECONDARY_TEXT}}/>
                            <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 3 ? Colors.ACCENT : Colors.SECONDARY_TEXT}}/>
                            <FontAwesome name="star" style={{...styles.starIcon, color: data.stars > 4 ? Colors.ACCENT : Colors.SECONDARY_TEXT}}/>
                            <Text style={styles.text}> ({data.numOfReviews})</Text>
                        </View>
                        <Text style={styles.text}>{data.distance} Miles</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.SECONDARY_BACKGROUND,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    foodImage:{
        width: 85,
        height: 85,
        borderRadius: 85,
    },

    infoCol:{
        flexGrow: 1,
        marginLeft: 5,
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 3,
    },
    row1text:{
        color: Colors.SECONDARY_TEXT,
        fontWeight: "bold",
        fontSize: 12,
    },
    row2text1:{
        color: Colors.PRIMARY_TEXT,
        fontWeight: "bold",
        fontSize: 18,
    },
    row2text2:{
        color: Colors.GREEN,
        fontWeight: "bold",
        fontSize: 18,
    },


    dotIcon:{
        alignSelf: "center",
        textAlign: "center",
        color: Colors.PRIMARY_TEXT,
        fontSize: 5,
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


    text: {
        color: Colors.PRIMARY_TEXT
    }
})

export default FoodItemComponent