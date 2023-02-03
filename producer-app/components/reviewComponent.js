import { View, Text, StyleSheet, Image } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import Colors from "../constants/colors"

const ReviewComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Image style={styles.userImage} source={{url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}}/>
                    <Text style={styles.userName}>Customer Name</Text>
                </View>
                <Text style={styles.reviewDate}>12/22/2022</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.reviewTitle}>This is review title!</Text>
                <View style={styles.col}>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                    <FontAwesome name="star" style={styles.star}/>
                </View>
            </View>

            <Text style={styles.reviewBody}>
                Morbi rutrum metus in risus luctus, id porttitor ex euismod. 
                Phasellus augue erat, tempus ut lorem vel, tristique cursus odio. 
                Integer convallis orci in mauris consectetur.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.SECONDARY_BACKGROUND,
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
        width: "95%",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    row:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    col:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    userImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    userName:{
        marginLeft: 10,
        color: Colors.PRIMARY_TEXT,
        fontSize: 18,
        fontWeight: "bold",
    },
    reviewDate:{
        flexGrow: 2,
        textAlign: "right",
        color: Colors.SECONDARY_TEXT,
        fontSize: 14,
        fontWeight: "bold",
    },
    reviewTitle:{
        flexGrow: 2,
        color: Colors.PRIMARY_TEXT,
        fontSize: 14,
        fontWeight: "bold",
    },
    stars:{
        flexDirection: "row",
    },
    star: {
        fontSize: 20,
        color: Colors.ACCENT,
    },
    reviewBody:{
        width: "100%",
        color: Colors.PRIMARY_TEXT,
        fontSize: 12,
        fontWeight: "bold",
    }


})

export default ReviewComponent