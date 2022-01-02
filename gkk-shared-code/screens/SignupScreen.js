import { View, Text, StyleSheet } from "react-native"

import Colors from "../constants/colors"

const SignupScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is the Signup Screen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: Colors.dark1,
    },
    text: {
        color: Colors.light1,
    },
})

export default SignupScreen
