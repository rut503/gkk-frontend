import { View, Text, StyleSheet, Modal, Pressable } from "react-native";

import Colors from "../constants/colors";

// How to use me? 
// <AddFoodItemModal visible={modalVisible} setModalVisible={setModalVisible}/>
// where => const [modalVisible, setModalVisible] = useState(false)

const TestModal = ({ visible, setModalVisible }) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Text style={{ color: Colors.PRIMARY_TEXT }}>Hello</Text>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={{ color: Colors.PRIMARY_TEXT }}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={{ color: Colors.PRIMARY_TEXT }}>Add</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer:{
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY_BACKGROUND,
        borderRadius: 5,
        shadowColor: "#777777",
        shadowOffset:{ width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "95%",
        height: "80%",
    }

    
})

export default AddFoodItemModal