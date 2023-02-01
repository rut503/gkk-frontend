import { View, ScrollView, SectionList, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"

const FoodOrder = ({ order }) => (
    <View>
      <Text>{order}</Text>
    </View>
)

const Header = ({ date }) => (
    <View style={styles.header}>
        <Text style={styles.headerTextRight}>{date}</Text>
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
                style={styles.sectionList}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <FoodOrder order={item} />}
                renderSectionHeader={({ section: { date } }) => <Header date={date}/>}
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
    sectionList: {
        marginVertical: 10,
    },
    header: {
        backgroundColor: Colors.SECONDARY_BACKGROUND,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerTextRight: {
        color: Colors.PRIMARY_TEXT,
    },
    headerTextLeft: {
        color: Colors.ACCENT,
    },
})

const DATA = [
    {
        date: Date.now(),
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        date: Date.now(),
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        date: Date.now(),
        data: ["Water", "Coke", "Beer"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        date: Date.now(),
        data: ["Cheese Cake", "Ice Cream"]
    },
    
];

export default OrdersScreen