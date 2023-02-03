import { useState } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, Pressable, ScrollView, Alert, Image } from "react-native"
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
        {label: "Vegan", value: "Vegan"},
        {label: "Vegetarian", value: "Vegetarian"},
        {label: "Eggitarian", value: "Eggitarian"},
        {label: "Non-vegetarian", value: "Non-vegetarian"}
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

                <Text style={styles.inputTitle}>Name</Text>
                <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name your food item" placeholderTextColor={Colors.TERTIARY_TEXT}/>
                
                <View style={{ ...styles.row }}>
                    <View style={styles.col}>
                        <Text style={styles.inputTitle}>Price</Text>
                        <View style={styles.row}>
                            <View style={styles.dollarSignBox}><FontAwesome5 name="dollar-sign" style={{ color: Colors.GREEN, fontSize: 16 }} /></View>
                            <FakeCurrencyInput value={price} onChangeValue={(value) => setPrice(value == null ? 0 : value)} separator="." precision={2} minValue={0} maxValue={99.99} keyboardType="number-pad" style={{ textAlign: "right", fontSize: 14, color: price == 0 ? Colors.TERTIARY_TEXT : Colors.PRIMARY_TEXT }} containerStyle={styles.fakeInput} />
                        </View>
                    </View>
                    <Text>...</Text>
                    <View style={styles.col}>
                        <Text style={styles.inputTitle} >Portion Size</Text>
                        <View style={styles.row}>
                            <FakeCurrencyInput value={portionSize} onChangeValue={(value) => setPortionSize(value == null ? 0 : value)} precision={0} minValue={0} maxValue={99} keyboardType="number-pad" style={{ textAlign: "right", fontSize: 14, color: portionSize == 0 ? Colors.TERTIARY_TEXT : Colors.PRIMARY_TEXT }} containerStyle={styles.fakeInput} />
                            <View style={styles.toggleBtnBox}>
                                <Pressable style={{ ...styles.toggleBtn, backgroundColor: portionUnit === "oz" ? Colors.PRIMARY_TEXT : null }} onPress={() => setPortionUnit( portionUnit === "oz" ? "ct" : "oz" )}>
                                    <Text style={{ ...styles.btnText, color: portionUnit === "oz" ? Colors.DarkMode.background1 : Colors.TERTIARY_TEXT }}>OZ</Text>
                                </Pressable>
                                <Pressable style={{ ...styles.toggleBtn, backgroundColor: portionUnit === "ct" ? Colors.PRIMARY_TEXT : null }} onPress={() => setPortionUnit( portionUnit === "oz" ? "ct" : "oz" )}>
                                    <Text style={{ ...styles.btnText, color: portionUnit === "ct" ? Colors.DarkMode.background1 : Colors.TERTIARY_TEXT }}>CT</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.inputTitle}>Description</Text>
                <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Describe your food item in short and simple way..." placeholderTextColor={Colors.TERTIARY_TEXT} multiline={true} maxLength={400}/>

                <Text style={styles.inputTitle}>Spicyness</Text>
                <View style={styles.row}>
                    <FontAwesome5 name="pepper-hot" style={{ fontSize: 16, color: Colors.RED }} />
                    <View style={styles.sliderBox}>
                        <Slider
                            value={spiceLevel}
                            onValueChange={value => setSpiceLevel(value)}
                            maximumValue={3}
                            minimumValue={0}
                            step={1}
                            animateTransitions
                            minimumTrackTintColor={Colors.RED}
                            thumbStyle={styles.thumb}
                            trackStyle={styles.track}
                            trackMarks={[0,1,2,3]}
                            renderTrackMarkComponent={(index) => {
                                const trackMarks = [0,1,2,3]
                                const currentMarkValue = trackMarks[index];
                                const currentSliderValue = spiceLevel || (Array.isArray(spiceLevel) && spiceLevel[0]) || 0;
                                const markColor = currentMarkValue > Math.max(currentSliderValue) ? Colors.TERTIARY_BACKGROUND : Colors.RED
                                return <View style={{
                                    borderColor: markColor,
                                    borderRadius: 10,
                                    borderWidth: 4, 
                                    left: 2,
                                }}/>
                            }}
                        />
                    </View>
                    <FontAwesome5 name="pepper-hot" style={{ fontSize: 22, color: Colors.RED }} />
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
                    placeholder="Select diet type of food item"
                    theme="DARK"
                    style={{
                        backgroundColor: Colors.TERTIARY_BACKGROUND,
                        color: Colors.PRIMARY_TEXT,
                    }}
                    textStyle={{
                        fontSize: 14,
                        color: dietPreference === null ? Colors.TERTIARY_TEXT : Colors.PRIMARY_TEXT,
                    }}
                    dropDownContainerStyle={{
                        backgroundColor: Colors.TERTIARY_BACKGROUND,
                        borderWidth: 0,
                        borderTopWidth: 2,
                    }}
                />

                <Text style={styles.inputTitle}>Allergic Ingredients</Text>
                <View style={styles.row}>
                    <Pressable style={{...styles.multipleSelect, backgroundColor: nuts ? Colors.PRIMARY_TEXT : Colors.TERTIARY_BACKGROUND}} onPress={() => setNuts(!nuts)}>
                        <Text style={{...styles.btnText, color: nuts ? Colors.DarkMode.background1 : Colors.TERTIARY_TEXT}}>Nuts</Text>
                    </Pressable>
                    <Text>.</Text>
                    <Pressable style={{...styles.multipleSelect, backgroundColor: dairy ? Colors.PRIMARY_TEXT : Colors.TERTIARY_BACKGROUND}} onPress={() => setDairy(!dairy)}>
                        <Text style={{...styles.btnText, color: dairy ? Colors.DarkMode.background1 : Colors.TERTIARY_TEXT}}>Dairy</Text>
                    </Pressable>
                    <Text>.</Text>
                    <Pressable style={{...styles.multipleSelect, backgroundColor: gluten ? Colors.PRIMARY_TEXT : Colors.TERTIARY_BACKGROUND}} onPress={() => setGluten(!gluten)}>
                        <Text style={{...styles.btnText, color: gluten ? Colors.DarkMode.background1 : Colors.TERTIARY_TEXT}}>Gluten</Text>
                    </Pressable>
                </View>

                <Text style={styles.inputTitle}>Image</Text>
                <View style={styles.row}>
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

                <View style={{ ...styles.row, marginVertical: 30 }}>
                    <Pressable style={styles.btn2} onPress={add}>
                        <Text style={styles.btnText}>Add</Text>
                    </Pressable>
                    <Text>...</Text>
                    <Pressable style={styles.btn2} onPress={cancel}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.PRIMARY_BACKGROUND,
        minHeight: "100%",
        flexDirection: "column",
        paddingHorizontal: 20,
    },
    row:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", // horizontally
        alignItems: "center",
    },
    col:{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },

    inputTitle: {
        fontSize: 14,
        color: Colors.PRIMARY_TEXT,
        marginBottom: 5,
        marginTop: 30,
    },
    input: {
        fontSize: 14,
        color: Colors.PRIMARY_TEXT,
        backgroundColor: Colors.TERTIARY_BACKGROUND,
        borderRadius: 10,
        padding: 10,
        paddingTop: 10, // paddingTop needs to be added or weird bug with multiline inputs
        flexGrow: 1,
    },
    fakeInput: {
        width: 1, // this is needed to keep the input in place while typing
        fontSize: 14,
        color: Colors.PRIMARY_TEXT,
        backgroundColor: Colors.TERTIARY_BACKGROUND,
        padding: 8,
        flexGrow: 1,
        borderRadius: 10,
        textAlign: "right"
    },

    toggleBtnBox: {
        backgroundColor: Colors.TERTIARY_BACKGROUND,
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: 2,
    },
    toggleBtn: {
        borderRadius: 10,
        padding: 10,
    },

    btn1:{
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.PRIMARY_TEXT,
        flexGrow: 1,
    },
    btn2:{
        padding: 10,
        borderRadius: 5,
        backgroundColor: Colors.ACCENT,
        flexGrow: 1,
    },
    btnText:{
        fontSize: 14,
        color: Colors.DarkMode.background1,
        textAlign: "center",
        fontWeight: "bold",
    },

    multipleSelect:{
        padding: 10,
        borderRadius: 5,
        flexGrow: 1,
    },

    thumb: {
        backgroundColor: Colors.RED,
        height: 10,
        width: 10,
    },
    track: {
        backgroundColor: Colors.TERTIARY_BACKGROUND,
        borderRadius: 20,
        height: 5,
    },

    photo: {
        alignSelf: "center",
        marginTop: 30,
        width: 100,
        height: 100,
    },

    dollarSignBox: {
        backgroundColor: Colors.TERTIARY_BACKGROUND,
        borderRadius: 10,
        padding: 11,
        marginRight: 2,
        justifyContent: "center",
    },

    sliderBox: {
        flexGrow: 1,
        paddingHorizontal: 10,
    },
})

export default AddNewFoodItemScreen