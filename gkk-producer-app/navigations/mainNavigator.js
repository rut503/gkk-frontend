import FoodItemsScreen from "../screens/foodItemsScreen"
import MenuScreen from "../screens/menuScreen"
import OrdersScreen from "../screens/ordersScreen"
import PrepareScreen from "../screens/prepareScreen"

const MainNavigator = () => {
    return (
        <>
            <FoodItemsScreen />
            <MenuScreen />
            <OrdersScreen />
            <PrepareScreen />
        </>
    )
}

export default MainNavigator