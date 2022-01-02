import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import Greet from "gkk-shared-code"

import MainNavigator from "./navigations/mainNavigator"

export default function App() {
    return (
        <MainNavigator />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
