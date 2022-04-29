import { useState } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Platform, Pressable, Keyboard, ScrollView } from "react-native"

import Colors from "../constants/colors"

const AddNewFoodItemScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dietPreference, setDietPreference] = useState("")
    const [price, setPrice] = useState("")
    const [photo, setPhoto] = useState("")
    const [portionSize, setPortionSize] = useState("")
    const [spicyLevel, setSpicyLevel] = useState("")
    const [allergy, setAllergy] = useState([])

    const add = () => {
        navigation.goBack()
    }
    const cancel = () => {
        navigation.goBack()
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            number={5}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.subContainer}>
                    <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Food Name" placeholderTextColor={Colors.DarkMode.text2}/>
                    <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Food Description" placeholderTextColor={Colors.DarkMode.text2}/>
                    <View style={styles.row}>
                        {/* Diet Preferance Input : selectable */}
                        {/* allergy input with multiple selections for array */}
                    </View>
                    {/* Photo input */}
                    <View style={styles.row}>
                        <TextInput style={styles.input} onChangeText={setPrice} value={price} placeholder="Price" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text2}/>
                        <TextInput style={styles.input} onChangeText={setPortionSize} value={portionSize} placeholder="Portion Size" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text2}/>
                        <TextInput style={styles.input} onChangeText={setSpicyLevel} value={spicyLevel} placeholder="Spicy Level" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text2}/>
                    </View>

                    <View style={styles.row}>
                        <Pressable style={styles.btn} onPress={cancel}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={add}>
                            <Text style={styles.btnText}>Add</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.DarkMode.background2,
    },
    subContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: Colors.DarkMode.accent,
        color: Colors.DarkMode.text1,
    },

    row:{
        flexDirection: "row",
    },
    btn:{
        margin: 5,
        padding: 10,
        width: 100,
        borderRadius: 5,
        backgroundColor: Colors.DarkMode.accent
    },
    btnText:{
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.DarkMode.background1
    },

    text:{
        color: Colors.DarkMode.text1
    }
})

export default AddNewFoodItemScreen