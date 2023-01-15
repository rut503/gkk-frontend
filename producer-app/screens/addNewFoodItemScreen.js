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
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.subContainer}>
                    <View style={styles.row}>
                        <Text style={styles.inputTitle} >Name</Text>
                        <Text style={styles.inputTitle} >Price</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Food Name" placeholderTextColor={Colors.DarkMode.text3}/>
                        <TextInput style={styles.input} onChangeText={setPrice} value={price} placeholder="Price" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text3}/>
                    </View>

                    <Text style={styles.inputTitle} >Description</Text>
                    <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Food Description" placeholderTextColor={Colors.DarkMode.text3}/>

                    <Text style={styles.inputTitle} >Spicyness</Text>
                    <TextInput style={styles.input} onChangeText={setSpicyLevel} value={spicyLevel} placeholder="Spicy Level" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text3}/>

                    <Text style={styles.inputTitle} >Portion Size</Text>
                    <TextInput style={styles.input} onChangeText={setPortionSize} value={portionSize} placeholder="Portion Size" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text3}/>

                    {/* Diet Preferance Input : selectable */}

                    {/* allergy input with multiple selections for array */}



                    {/* Photo input */}

                    <View style={styles.row}>
                        <Pressable style={styles.btn} onPress={add}>
                            <Text style={styles.btnText}>Add</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={cancel}>
                            <Text style={styles.btnText}>Cancel</Text>
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
        paddingVertical: 20,
        alignItems: "center",
    },
    subContainer:{
        flex: 1,
        width: "90%",
    },

    inputTitle: {
        color: Colors.DarkMode.text1,
        // backgroundColor: "pink",
        // borderRadius: 5,
        // borderWidth: 5,
        fontSize: 16,
        width: "100%",
        marginBottom: 10,
    },
    input: {
        width: "95%",
        marginBottom: 30,
        backgroundColor: Colors.DarkMode.background3,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        color: Colors.DarkMode.text1,
    },

    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%"
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
})

export default AddNewFoodItemScreen