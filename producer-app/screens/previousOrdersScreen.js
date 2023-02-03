import { View, FlatList, Text, StyleSheet } from "react-native"

import Colors from "../constants/colors"
import FoodOrderComponent from "../components/foodOrderComponent"

const PreviousOrdersScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.text}>Previous Orders </Text>
                <Text style={styles.stat}>{DATA.length}</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item: { title } }) => <FoodOrderComponent style={styles.foodOrder} navigation={navigation} data={title}/>}
                keyExtractor={item => item.id}
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
    topBar:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
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
    text: {
        color: Colors.PRIMARY_TEXT,
        fontWeight: "500",
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
const yesterday1 = new Date
yesterday1.setDate(today.getDate() - 1)
const yesterday2 = new Date
yesterday2.setDate(today.getDate() - 2)

const DATA = [
    {
        id: "huehrgiuehrgohwgourhwoirhgoirhgoir",
        title: { 
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            orderStatus: "Completed",
            distance: 5.9,
            consumerName: "Tommy Mus", 
            price: 4.99,
            date: yesterday1.toDateString(),
            numOfItems: 1
        }
    },
    {
        id: "eoigherohihgiluesrguwyhg9yrgyw98yw",
        title: {
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            orderStatus: "Canceled",
            distance: 4.3,
            consumerName: "Karen Decket", 
            price: 28.44, 
            date: yesterday2.toDateString(),
            numOfItems: 4
        }
    }
];

export default PreviousOrdersScreen