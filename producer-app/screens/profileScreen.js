import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import Colors from "../constants/colors"
import ReviewComponent from "../components/reviewComponent"

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image style={styles.userImage} source={{url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'}} />
                <Text style={styles.userName}>Producer Name</Text>
                
                <View style={styles.grid}>
                    <View style={styles.row}>
                        <FontAwesome name="phone" style={styles.iconCol}/>
                        <Text style={styles.infoCol}>+1 (888) 777 - 9999</Text>
                    </View>
                    <View style={styles.row}>
                        <FontAwesome name="envelope" style={styles.iconCol}/>
                        <Text style={styles.infoCol}>producer@email.domain</Text>
                    </View>
                    <View style={styles.row}>
                        <FontAwesome name="map-marker" style={styles.iconCol}/>
                        <Text style={styles.infoCol}>123 Some Street, City Name, State, Zip Code</Text>
                    </View>
                    <View style={styles.row}>
                        <FontAwesome5 name="user-edit" style={styles.iconCol}/>
                        <Text style={styles.infoCol}>These are some words about me that describe me and my passion for cooking.</Text>
                    </View>
                </View>

                <View style={styles.line}></View>

                <Text style={styles.title}>Customer Reviews</Text>
                <View style={styles.stars}>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                </View>
                <Text style={styles.subTitle}># Total Ratings</Text>

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
    scrollView:{
        backgroundColor: Colors.PRIMARY_BACKGROUND,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    userImage: {
        marginTop: 30,
        width: 100,
        height: 100,
        borderRadius: 100
    },
    userName: {
        marginVertical: 20,
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.PRIMARY_TEXT,
    },

    grid:{
        marginVertical: 10,
        width: "95%",
    },
    row:{
        flexDirection: "row",
        marginVertical: 10,
    },
    iconCol: {
        textAlign: "center",
        width: 40,
        fontSize: 20,
        color: Colors.ACCENT,
    },
    infoCol:{
        color: Colors.PRIMARY_TEXT,
        fontSize: 14,
        fontWeight: "bold",
        flexShrink: 1
    },

    line:{
        marginVertical: 10,
        height: 1,
        width: "95%",
        backgroundColor: Colors.PRIMARY_TEXT,
    },

    title: {
        marginVertical: 10,
        fontSize: 24,
        color: Colors.PRIMARY_TEXT,
        fontWeight: "bold",
    },
    stars:{
        flexDirection: "row",
    },
    star: {
        fontSize: 20,
        color: Colors.ACCENT,
    },
    subTitle:{
        fontSize: 14,
        color: Colors.PRIMARY_TEXT,
        fontWeight: "bold",
        marginVertical: 10,
    }
})

export default ProfileScreen
