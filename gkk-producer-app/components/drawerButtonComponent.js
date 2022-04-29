import { Button } from "react-native"

import Colors from "../constants/colors"

const DrawerButtonComponent = ({ navigation }) => {
    return (
        <Button
            onPress={() => navigation.toggleDrawer()}
            title="Drawer"
            color={Colors.DarkMode.accent}
        />
    )
}

export default DrawerButtonComponent