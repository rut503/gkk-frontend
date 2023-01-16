import { useState, useEffect } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, Button, TextInput, Platform, Pressable, ScrollView, Alert, Image } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { Slider } from "@miblanchard/react-native-slider"

import * as ImagePicker from "expo-image-picker"

import Colors from "../constants/colors"

const AddNewFoodItemScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dietPreference, setDietPreference] = useState([])
    const [price, setPrice] = useState(0)
    const [photo, setPhoto] = useState(null)
    const [portionSize, setPortionSize] = useState(0)
    const [portionUnit, setPortionUnit] = useState("")
    const [spicyLevel, setSpicyLevel] = useState(0)
    const [allergy, setAllergy] = useState([])

    const [vegan, setVegan] = useState(false)
    const [vegetarian, setVegetarian] = useState(false)
    const [eggitarian, setEggitarian] = useState(false)
    const [nonVegetarian, setNonVegetarian] = useState(false)

    const [nuts, setNuts] = useState(false)
    const [dairy, setDairy] = useState(false)
    const [gluten, setGluten] = useState(false)

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: 'Images'
        })
        if (!result.canceled) {
            console.log(result)
            setPhoto(result.assets[0].uri)
        }
        else {
            alert('You did not select any image.')
        }
     }
    

    const add = () => {
        // navigation.goBack()
    }
    const cancel = () => {
        navigation.goBack()
    }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={70}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subContainer}>

                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name your food item" placeholderTextColor={Colors.DarkMode.text3}/>
                    
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.inputTitle}>Price</Text>
                            <TextInput style={styles.input} onChangeText={setPrice} value={price} placeholder="0.00" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text3}/>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.inputTitle} >Portion Size</Text>
                            <View style={styles.row}>
                                <TextInput style={styles.input} onChangeText={setPortionSize} value={portionSize} placeholder="00" keyboardType="numeric" placeholderTextColor={Colors.DarkMode.text3}/>
                                {/* Unit Selector */}
                            </View>
                        </View>
                    </View>

                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Describe your food item in short and simple way..." placeholderTextColor={Colors.DarkMode.text3} multiline={true} maxLength={400}/>

                    <Text style={styles.inputTitle} >Spicyness</Text>
                    <View style={styles.row}>
                        <Text></Text>
                        <FontAwesome5 name="pepper-hot" style={{ fontSize: 18, color: spicyLevel > 0 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                        <FontAwesome5 name="pepper-hot" style={{ fontSize: 18, color: spicyLevel > 1 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                        <FontAwesome5 name="pepper-hot" style={{ fontSize: 18, color: spicyLevel > 2 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                    </View>
                    <Slider
                        value={spicyLevel}
                        onValueChange={value => setSpicyLevel(value)}
                        maximumValue={3}
                        minimumValue={0}
                        step={1}
                        animateTransitions
                        minimumTrackTintColor={Colors.DarkMode.red}
                        thumbStyle={styles.thumb}
                        trackStyle={styles.track}
                    />

                    <Text style={styles.inputTitle}>Diet Preferances</Text>
                    <View style={styles.row}>
                        <Pressable style={{...styles.select, backgroundColor: vegan ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setVegan(!vegan)}>
                            <Text style={{...styles.selectText, color: vegan ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Vegan</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.select, backgroundColor: vegetarian ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setVegetarian(!vegetarian)}>
                            <Text style={{...styles.selectText, color: vegetarian ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Vegetarian</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.select, backgroundColor: eggitarian ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setEggitarian(!eggitarian)}>
                            <Text style={{...styles.selectText, color: eggitarian ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Eggitarian</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.select, backgroundColor: nonVegetarian ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setNonVegetarian(!nonVegetarian)}>
                            <Text style={{...styles.selectText, color: nonVegetarian ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Non Vegetarian</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.inputTitle}>Allergic Ingredients</Text>
                    <View style={styles.row}>
                        <Pressable style={{...styles.select, backgroundColor: nuts ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setNuts(!nuts)}>
                            <Text style={{...styles.selectText, color: nuts ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Nuts</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.select, backgroundColor: dairy ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setDairy(!dairy)}>
                            <Text style={{...styles.selectText, color: dairy ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Dairy</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.select, backgroundColor: gluten ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setGluten(!gluten)}>
                            <Text style={{...styles.selectText, color: gluten ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Gluten</Text>
                        </Pressable>
                    </View>

                    <Text style={styles.inputTitle}>Image</Text>
                    <Pressable style={styles.btn} onPress={pickImageAsync} />
                    <Image style={styles.photo} source={{ uri: photo}} />


                    <View style={styles.row}>
                        <Pressable style={styles.btn} onPress={add}>
                            <Text style={styles.btnText}>Add</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={cancel}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                    </View>

                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.DarkMode.background2,
        alignItems: "center",
        paddingVertical: 20,
        justifyContent: "center",
    },
    subContainer:{
        width: "90%",
    },

    inputTitle: {
        fontSize: 16,
        color: Colors.DarkMode.text1,
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        color: Colors.DarkMode.text1,
        backgroundColor: Colors.DarkMode.background3,
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
    },

    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
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

    select:{
        margin: 5,
        padding: 10,
        minWidth: 100,
        borderRadius: 5,
        // backgroundColor: Colors.DarkMode.background3,
    },
    selectText:{
        // color: Colors.DarkMode.text3,
        fontSize: 16,
        textAlign: "center",
    },

    thumb: {
        backgroundColor: Colors.DarkMode.red,
        height: 15,
        width: 15,
    },
    track: {
        backgroundColor: Colors.DarkMode.background3,
        borderRadius: 20,
        height: 7,
    },

    photo: {
        width: 100,
        height: 100,
    },
})

export default AddNewFoodItemScreen