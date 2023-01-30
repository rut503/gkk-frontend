import { useState } from "react"
import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native"

import Colors from "../constants/colors"

const LoginScreen = ({ navigation, route }) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        navigation.navigate("MainDrawerNavigator")
    }

    const signup = () => {
        navigation.navigate("Signup")
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Ghar Ka Khana</Text>

                <Text style={styles.inputTitle}>Phone Number</Text>
                <TextInput style={styles.input} onChangeText={setPhoneNumber} value={phoneNumber} placeholder="XXX-XXX-XXXX" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="iojwrhHhf=oi8+269" placeholderTextColor={Colors.TERTIARY_TEXT}/>

                <Pressable style={styles.btn} onPress={login}>
                    <Text style={styles.btnText}>LOG IN</Text>
                </Pressable>
                
                <Text style={styles.text}>
                    Don't have an account?
                    <Text style={{color: Colors.ACCENT}} onPress={signup}> Sign Up</Text>
                </Text>

            </View>

            <Image style={styles.image} source={{uri: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND,
    },
    form: {
        padding: 20,
    },
    
    title: {
        color: Colors.ACCENT,
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        marginTop: 20,
        textAlign: "center",
        color: Colors.PRIMARY_TEXT,
        fontSize: 16,
    },
    
    inputTitle: {
        fontSize: 14,
        color: Colors.PRIMARY_TEXT,
        marginBottom: 5,
        marginTop: 20,
    },
    input: {
        fontSize: 14,
        color: Colors.PRIMARY_TEXT,
        backgroundColor: Colors.TERTIARY_BACKGROUND,
        borderRadius: 10,
        padding: 10,
    },
    
    btn:{
        padding: 10,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: Colors.ACCENT,
    },
    btnText:{
        fontSize: 14,
        color: Colors.SECONDARY_BACKGROUND,
        textAlign: "center",
        fontWeight: "bold",
    },

    image: {
        flex: 1,
        borderRadius: 10,
    }
})

export default LoginScreen