import { View, SectionList, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"
import FoodOrderComponent from "../components/foodOrderComponent"

const Header = ({ date }) => (
    <View style={styles.header}>
        <Text style={styles.headerTextRight}>Order Due {date}</Text>
        <Text style={styles.headerTextLeft}>{date}</Text>
    </View>
)

const OrdersScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>Pending Orders </Text>
                    <Text style={styles.stat}>99</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Add New Food Item")}>
                    <Text style={styles.btnText}>Previous Orders</Text>
                    <FontAwesome name="history" style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <FoodOrderComponent style={styles.foodOrder} data={item}/>}
                renderSectionHeader={({ section: { date } }) => <Header date={date}/>}
                renderSectionFooter={() => <View style={styles.footer}>
                    <FontAwesome name="circle" style={styles.dotIcon}/>
                    <FontAwesome name="circle" style={styles.dotIcon}/>
                    <FontAwesome name="circle" style={styles.dotIcon}/>
                </View>}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        backgroundColor: Colors.PRIMARY_BACKGROUND,
    },

    // #################### Top Bar ####################### //
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    statContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        marginRight: 10,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: Colors.SECONDARY_BACKGROUND,
    },
    stat:{
        padding: 10,
        color: Colors.PRIMARY_TEXT,
        borderColor: Colors.DarkMode.accent,
        borderWidth: 2,
        borderRadius: 5,
        fontWeight: "600",
    },
    btn:{
        flexDirection: "row",
        padding: 11,
        backgroundColor: Colors.SECONDARY_BACKGROUND,
        borderRadius: 5,
    },
    btnText: {
        color: Colors.GREEN,
        fontWeight: "600",
    },
    text: {
        color: Colors.DarkMode.text1,
        fontWeight: "500",
    },
    icon:{
        color: Colors.DarkMode.green,
        alignSelf: "center",
        marginLeft: 5,
        fontSize: 18,
        paddingHorizontal: 5,
    },
    
    // #################### Order Sectioned List ####################### //
    header: {
        backgroundColor: Colors.SECONDARY_BACKGROUND,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    headerTextRight: {
        color: Colors.PRIMARY_TEXT,
        padding: 10,
    },
    headerTextLeft: {
        color: Colors.ACCENT,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: Colors.ACCENT,
        borderRadius: 5
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 20,
    },
    dotIcon:{
        textAlign: "center",
        color: Colors.PRIMARY_TEXT,
        fontSize: 10,
        width: 20,
    },

    foodOrder: {
        marginBottom: 5,
    },
})

const today = new Date
const tomorrow = new Date
tomorrow.setDate(today.getDate() + 1)

const DATA = [
    {
        date: today.toDateString(),
        data: [
            { 
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                time: "Breakfast", 
                orderStatus: "Ready",
                distance: 5.9,
                consumerName: "Angela Scholmer", 
                price: 5, 
                date: today.toDateString(),
                numOfItems: 1
            }, 
            {
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                time: "Lunch", 
                orderStatus: "Accepted",
                distance: 5.9,
                consumerName: "Angela Scholmer", 
                price: 26.99, 
                date: today.toDateString(),
                numOfItems: 4
            }
        ]
    },
    {
        date: tomorrow.toDateString(),
        data: [
            {
                photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                time: "Lunch", 
                orderStatus: "Accepted",
                distance: 12.9,
                consumerName: "Kirsten Harvey", 
                price: 21.40, 
                date: tomorrow.toDateString(),
                numOfItems: 3
            }
        ]
    },
    {
        date: Date.now(),
        data: [
            { 
                photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                time: "Dinner", 
                orderStatus: "Accepted",
                distance: 2.1,
                consumerName: "Tommy Mus", 
                price: 5.99,
                date: Date.now(),
                numOfItems: 1
            }, 
            {
                photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                time: "Dinner", 
                orderStatus: "Accepted",
                distance: 6,
                consumerName: "Karen Decket", 
                price: 55.32, 
                date: Date.now(),
                numOfItems: 8
            }
        ]
    },
];

export default OrdersScreen