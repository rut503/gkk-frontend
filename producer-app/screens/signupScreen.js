import { useState } from "react"
import { View, ScrollView, Text, StyleSheet, Image, Pressable, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import * as ImagePicker from "expo-image-picker"

import Colors from "../constants/colors"

const SignupScreen = ({ navigation, route }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [bio, setBio] = useState("")
    const [photo, setPhoto] = useState(null)
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [password, setPassword] = useState("")

    const signup = () => {
        const producer = {
            firstName,
            lastName,
            phoneNumber,
            email,
            bio,
            photo,
            "address": {
                street,
                city,
                state,
                zipCode
            }
        }
        console.log(producer)
        navigation.navigate("Home")
    }

    const login = () => {
        navigation.navigate("Login")
    }

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            base64: true,
            quality: 0,
            mediaTypes: "Images"
        })
        if (!result.canceled) {
            console.log(result.assets[0].base64)
            setPhoto(result.assets[0].uri)
            // result.assets[0].base64 // this is image base64 data
        }
        // else {
        //     alert("You did not select any image.")
        // }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={70}>
            <ScrollView contentContainerStyle={styles.container}>
                
                <Text style={styles.title}>Ghar Ka Khana</Text>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", width: "49.5%", marginRight: 1 }}>
                        <Text style={styles.inputTitle}>First Name</Text>
                        <TextInput style={styles.input} onChangeText={setFirstName} value={firstName} placeholder="John" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                    </View>
                    <View style={{ flexDirection: "column", width: "49.5%", marginLeft: 2 }}>
                        <Text style={styles.inputTitle}>Last Name</Text>
                        <TextInput style={styles.input} onChangeText={setLastName} value={lastName} placeholder="Diggle" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                    </View>
                </View>

                <Text style={styles.inputTitle}>Phone Number</Text>
                <TextInput style={styles.input} onChangeText={setPhoneNumber} value={phoneNumber} placeholder="XXX-XXX-XXXX" placeholderTextColor={Colors.TERTIARY_TEXT} keyboardType="number-pad"/>

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="example@domain.com" placeholderTextColor={Colors.TERTIARY_TEXT} keyboardType="email-address"/>

                <Text style={styles.inputTitle}>Bio</Text>
                <TextInput style={styles.input} onChangeText={setBio} value={bio} placeholder="This is who I am and what I like doing..." placeholderTextColor={Colors.TERTIARY_TEXT} multiline={true} maxLength={400}/>
                
                <Text style={styles.inputTitle}>Street</Text>
                <TextInput style={styles.input} onChangeText={setStreet} value={street} placeholder="123 Main St APT 4" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                
                <Text style={styles.inputTitle}>City</Text>
                <TextInput style={styles.input} onChangeText={setCity} value={city} placeholder="Hoffman Estates" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", width: "49.5%", marginRight: 1 }}>
                        <Text style={styles.inputTitle}>State</Text>
                        <TextInput style={styles.input} onChangeText={setState} value={state} placeholder="IL" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                    </View>
                    <View style={{ flexDirection: "column", width: "49.5%", marginLeft: 2 }}>
                        <Text style={styles.inputTitle}>Zip Code</Text>
                        <TextInput style={styles.input} onChangeText={setZipCode} value={zipCode} placeholder="XXXXX" placeholderTextColor={Colors.TERTIARY_TEXT} keyboardType="number-pad"/>
                    </View>
                </View>

                <Text style={styles.inputTitle}>Image</Text>
                <View style={{ flexDirection: "row" }}>
                    <Pressable style={styles.btn1} onPress={pickImageAsync}>
                        <Text style={styles.btnText}>Take A Photo</Text>
                    </Pressable>
                    <Text>...</Text>
                    <Pressable style={styles.btn1} onPress={pickImageAsync}>
                        <Text style={styles.btnText}>Choose A Photo</Text>
                    </Pressable>
                </View>
                {
                    photo !== null ? <Image style={styles.photo} source={{ uri: photo}}/> : null
                }

                <Text style={styles.inputTitle}>Password</Text>
                <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="iojwrhHhf=oi8+269" placeholderTextColor={Colors.TERTIARY_TEXT}/>

                <Pressable style={styles.btn2} onPress={signup}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </Pressable>
                
                <Text style={styles.text}>
                    Already have an account?
                    <Text style={{color: Colors.ACCENT}} onPress={login}> Log in</Text>
                </Text>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        backgroundColor: Colors.PRIMARY_BACKGROUND,
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
        paddingTop: 10, // paddingTop needs to be added or weird bug with multiline inputs
    },
    
    btn1:{
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.PRIMARY_TEXT,
        flexGrow: 1,
    },
    btn2:{
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

    photo: {
        alignSelf: "center",
        marginTop: 30,
        width: 100,
        height: 100,
    },
    
})

export default SignupScreen