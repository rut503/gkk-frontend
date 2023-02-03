import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"

const FoodOrderComponent = ({ navigation, style, data }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Food Item Details", {data})}>
            <View style={{...styles.container, ...style}}>
                <Image style={styles.image} source={{url: data.photo}} />

                <View style={styles.infoCol}>
                    <View style={styles.row}>
                        <Text 
                            style={{ 
                                ...styles.row1text, 
                                color: data.orderStatus === "Pending" 
                                    ? Colors.RED 
                                    : data.orderStatus === "Accepted"
                                        ? Colors.ACCENT
                                        : data.orderStatus === "Ready"
                                            ? Colors.BLUE
                                            : data.orderStatus === "Completed"
                                                ? Colors.GREEN
                                                : Colors.SECONDARY_TEXT
                            }}>Order {data.orderStatus}</Text>
                        <Text style={styles.row1text}>{data.distance} Miles</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.row2text1}>{data.consumerName}</Text>
                        <Text style={styles.row2text2}>$ {data.price}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>{data.date}</Text>
                        <Text style={styles.text}>{data.numOfItems} Item(s)</Text>
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

    image:{
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
        marginHorizontal: 3,
        marginVertical: 5,
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
    text: {
        color: Colors.PRIMARY_TEXT
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
})

export default FoodOrderComponent