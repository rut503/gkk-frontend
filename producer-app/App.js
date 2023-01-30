// import { StatusBar } from "expo-status-bar"
// import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

// import Greet from "gkk-shared-code"

import MainDrawerNavigator from "./navigations/mainNavigator"

export default function App() {
    return (
        <NavigationContainer>
            <MainDrawerNavigator />
        </NavigationContainer>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// })
