import { View, Text, StyleSheet, Image } from "react-native"

import Colors from "../constants/colors"

const OrderDetailsScreen = ({ navigation, style, route }) => {
    const { data } = route.params

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <Image style={styles.image} source={{url: data.photo}} />
                <View style={styles.column}>
                    <Text style={styles.text}>{data.consumerName}</Text>
                    <Text style={styles.text}>{data.date}</Text>
                    <Text style={styles.text}>{data.distance} Miles</Text>
                </View>
            </View>

            <View style={styles.row}>
                <Text 
                    style={{ 
                        ...styles.text, 
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
            </View>

            <View style={styles.column}>
                <Text style={styles.text}>Item 1</Text>
                <Text style={styles.text}>Item 2</Text>
                <Text style={styles.text}>Item 3</Text>
                <Text style={styles.text}>Item 4</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>$ {data.price}</Text>
                <Text style={styles.text}>{data.numOfItems} Item(s)</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND,
        padding: 10,
    },
    row: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        backgroundColor: "pink"
    },
    column: {
        marginBottom: 10,
        backgroundColor: "pink"
    },
    text: {
        color: Colors.PRIMARY_TEXT,
        fontSize: 24,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
})

export default OrderDetailsScreen
