import { StyleSheet, Text, View } from 'react-native'

export default function Greet() {
    return (
        <View style={styles.container}>
            <Text>Hello, this is shared code...!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AAA",
    },
})
