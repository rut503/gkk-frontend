import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"
import FoodOrderComponent from "../components/foodOrderComponent"

const OrdersScreen = ({ navigation }) => {

    let pendingOrdersFlatList = null
    if (DATA.length == 0){
        pendingOrdersFlatList = <Text>No New Orders</Text>
    }else{
        pendingOrdersFlatList = <FlatList
            data={DATA}
            renderItem={({ item: { title } }) => <FoodOrderComponent style={styles.foodOrder} navigation={navigation} data={title}/>}
            keyExtractor={item => item.id}
        />
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.statContainer}>
                    <Text style={styles.text}>Pending Orders </Text>
                    <Text style={styles.stat}>{DATA.length}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Previous Orders")}>
                    <Text style={styles.btnText}>Previous Orders</Text>
                    <FontAwesome name="history" style={styles.icon}/>
                </TouchableOpacity>
            </View>

            {pendingOrdersFlatList}

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
        borderColor: Colors.ACCENT,
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
        color: Colors.PRIMARY_TEXT,
        fontWeight: "500",
    },
    icon:{
        color: Colors.GREEN,
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

const tomorrow1 = new Date
tomorrow1.setDate(tomorrow1.getDate() + 1)
const tomorrow2 = new Date
tomorrow2.setDate(tomorrow2.getDate() + 1)
const tomorrow3 = new Date
tomorrow3.setDate(tomorrow3.getDate() + 1)

const DATA = [
    {
        id: "eroghioerhgioehgiorehgioehgiorghoi",
        title: {
            photo: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            orderStatus: "Pending",
            distance: 5.9,
            consumerName: "Angela Scholmer", 
            price: 5, 
            date: tomorrow1.toDateString(),
            numOfItems: 1
        }
    },
    {
        id: "huehrgiuehrgohwgourhwoirhgoirhgoir",
        title: { 
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            orderStatus: "Pending",
            distance: 2.1,
            consumerName: "Tommy Mus", 
            price: 5.99,
            date: tomorrow2.toDateString(),
            numOfItems: 1
        }
    },
    {
        id: "huehrgiuehrgohwgourhwoirhgoirhgoqze",
        title: { 
            photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            orderStatus: "Pending",
            distance: 12,
            consumerName: "Kirsten Harvey", 
            price: 21.40,
            date: tomorrow2.toDateString(),
            numOfItems: 3
        }
    },
    {
        id: "eoigherohihgiluesrguwyhg9yrgyw98yw",
        title: {
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            orderStatus: "Pending",
            distance: 5.9,
            consumerName: "Karen Decket", 
            price: 55.32, 
            date: tomorrow3.toDateString(),
            numOfItems: 8
        }
    },
];

export default OrdersScreen