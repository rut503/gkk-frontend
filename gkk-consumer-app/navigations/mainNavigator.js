import FindMealScreen from "../screens/findMealScreen"
import CartScreen from "../screens/cartScreen"
import OrdersScreen from "../screens/ordersScreen"
import MealsScreen from "../screens/mealsScreen"

const MainNavigator = () => {
    return (
        <>
            <FindMealScreen />
            <CartScreen />
            <OrdersScreen />
            <MealsScreen />
        </>
    )
}

export default MainNavigator