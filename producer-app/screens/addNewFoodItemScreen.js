import { useState, useCallback } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, Button, TextInput, Platform, Pressable, ScrollView, Alert, Image } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { Slider } from "@miblanchard/react-native-slider"
import { FakeCurrencyInput } from "react-native-currency-input"
import DropDownPicker from "react-native-dropdown-picker"
import * as ImagePicker from "expo-image-picker"

import Colors from "../constants/colors"

const AddNewFoodItemScreen = ({ navigation }) => {

    const [openDropDown, setOpenDropDown] = useState(false)
    const [dietPreference, setDietPreference] = useState(null)
    const [dropDownItems, setDropDownItems] = useState([
        {label: "Vegan", value: "vegan"},
        {label: "Vegetarian", value: "vegetarian"},
        {label: "Eggitarian", value: "eggitarian"},
        {label: "Non Vegetarian", value: "non-vegetarian"}
    ])

    // const [openPU, setOpenPU] = useState(false)
    // const [portionUnit, setPortionUnit] = useState(null)
    // const [itemsPU, setItemsPU] = useState([
    //     {label: "oz", value: "oz"},
    //     {label: "ct", value: "ct"},
    // ])
    const [portionUnit, setPortionUnit] = useState("oz")


    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [photo, setPhoto] = useState(null)
    const [portionSize, setPortionSize] = useState(0)
    const [spiceLevel, setSpiceLevel] = useState(0)
    // const [allergies, setAllergies] = useState([])
    // const [dietPreference, setDietPreference] = useState([])

    // dietPreferences
    // const [vegan, setVegan] = useState(false)
    // const [vegetarian, setVegetarian] = useState(false)
    // const [eggitarian, setEggitarian] = useState(false)
    // const [nonVegetarian, setNonVegetarian] = useState(false)

    // allergies
    const [nuts, setNuts] = useState(false)
    const [dairy, setDairy] = useState(false)
    const [gluten, setGluten] = useState(false)

    const add = () => {
        const allergies = []
        if (dairy) {
            allergies.push("Dairy")
        }
        if (gluten) {
            allergies.push("Gluten")
        }
        if (nuts) {
            allergies.push("Nuts")
        }

        // Completion Check
        if (name === "") {
            Alert.alert("Please add food name.")
        } else if (price === 0) {
            Alert.alert("Please add food price.")
        } else if (portionSize === 0) {
            Alert.alert("Please add food portion size.")
        } else if (description === "") {
            Alert.alert("Please add food description.")
        } else if (dietPreference === null) {
            Alert.alert("Please select at least one diet preferance.")
        } else if (photo === null) {
            Alert.alert("Please add a food photo.")    
        } else {
            const foodItem = {
                allergies,
                description,
                dietPreference,
                name,
                photo,
                price,
                portionSize,
                portionUnit,
                "spiceLevel": spiceLevel[0] // spiceLevel turns into an array when it's modified by Slider Component.
            }
            console.log(foodItem)
            // navigation.goBack()
        }
    }
    const cancel = () => {
        navigation.goBack()
    }

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: "Images"
        })
        if (!result.canceled) {
            console.log(result)
            setPhoto(result.assets[0].uri)
        }
        else {
            alert("You did not select any image.")
        }
    }

    const test = (value) => {
        console.log(value)
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={70}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subContainer}>

                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name your food item" placeholderTextColor={Colors.DarkMode.text3}/>
                    
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.inputTitle}>Price</Text>
                            <View style={styles.row}>
                                <View style={styles.dollarSignBox}><FontAwesome5 name="dollar-sign" style={{ color: Colors.DarkMode.green, fontSize: 20 }} /></View>
                                <FakeCurrencyInput value={price} onChangeValue={(value) => setPrice(value == null ? 0 : value)} separator="." precision={2} minValue={0} maxValue={99.99} keyboardType="number-pad" style={{ color: price == 0 ? Colors.DarkMode.text3 : Colors.DarkMode.text1 }} containerStyle={styles.input} />
                            </View>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.inputTitle} >Portion Size</Text>
                            <View style={styles.row}>
                                <FakeCurrencyInput value={portionSize} onChangeValue={(value) => setPortionSize(value == null ? 0 : value)} precision={0} minValue={0} maxValue={99} keyboardType="number-pad" style={{ color: portionSize == 0 ? Colors.DarkMode.text3 : Colors.DarkMode.text1 }} containerStyle={styles.input} />
                                <Pressable style={styles.toggleBtn} onPress={() => setPortionUnit( portionUnit === "oz" ? "ct" : "oz" )}>
                                    <View style={{ ...styles.toggleIndicator, right: portionUnit === "oz" ? null : 0 }}></View>
                                    <Text style={styles.toggleBtnText}>OZ       CT</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.inputTitle}>Description</Text>
                    <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Describe your food item in short and simple way..." placeholderTextColor={Colors.DarkMode.text3} multiline={true} maxLength={400}/>

                    <View style={styles.row}>
                        <Text style={styles.inputTitle} >Spicyness</Text>
                        <FontAwesome5 name="pepper-hot" style={{ fontSize: 18, color: spiceLevel > 0 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                        <FontAwesome5 name="pepper-hot" style={{ fontSize: 18, color: spiceLevel > 1 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                        <FontAwesome5 name="pepper-hot" style={{ fontSize: 18, color: spiceLevel > 2 ? Colors.DarkMode.red : Colors.DarkMode.text2 }} />
                    </View>
                    <View style={styles.sliderBox}>
                        <Slider
                            value={spiceLevel}
                            onValueChange={value => setSpiceLevel(value)}
                            maximumValue={3}
                            minimumValue={0}
                            step={1}
                            animateTransitions
                            minimumTrackTintColor={Colors.DarkMode.red}
                            thumbStyle={styles.thumb}
                            trackStyle={styles.track}
                        />
                    </View>

                    <Text style={styles.inputTitle}>Diet Preferances</Text>
                    <DropDownPicker
                        open={openDropDown}
                        value={dietPreference}
                        items={dropDownItems}
                        setOpen={setOpenDropDown}
                        setValue={setDietPreference}
                        setItems={setDropDownItems}
                        listMode="SCROLLVIEW"
                    />

                    <Text style={styles.inputTitle}>Allergic Ingredients</Text>
                    <View style={styles.row}>
                        <Pressable style={{...styles.multipleSelect, backgroundColor: nuts ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setNuts(!nuts)}>
                            <Text style={{...styles.multipleSelectText, color: nuts ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Nuts</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.multipleSelect, backgroundColor: dairy ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setDairy(!dairy)}>
                            <Text style={{...styles.multipleSelectText, color: dairy ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Dairy</Text>
                        </Pressable>
                        
                        <Pressable style={{...styles.multipleSelect, backgroundColor: gluten ? Colors.DarkMode.text1 : Colors.DarkMode.background3}} onPress={() => setGluten(!gluten)}>
                            <Text style={{...styles.multipleSelectText, color: gluten ? Colors.DarkMode.background1 : Colors.DarkMode.text3}}>Gluten</Text>
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
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
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

    multipleSelect:{
        padding: 10,
        minWidth: 100,
        borderRadius: 5,
        marginBottom: 30,
    },
    multipleSelectText:{
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

    dollarSignBox: {
        backgroundColor: Colors.DarkMode.background3,
        borderRadius: 10,
        padding: 10,
        marginBottom: 30,
        marginRight: 5,
        justifyContent: "center",
    },

    sliderBox:{
        paddingHorizontal: 10,
        marginBottom: 30,
    },

    toggleBtn: {
        backgroundColor: Colors.DarkMode.background3, // gray
        // backgroundColor: Colors.DarkMode.text1, // white
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 30,
        marginLeft: 5,
        justifyContent: "center",
    },
    toggleBtnText: {
        color: Colors.DarkMode.text1,
    },
    toggleIndicator:{
        // backgroundColor: Colors.DarkMode.text1,
        borderWidth: 1,
        borderColor: Colors.DarkMode.text1,
        borderRadius: 10,
        width: "75%",
        height: "100%",
        position: "absolute",
    },
})

export default AddNewFoodItemScreen