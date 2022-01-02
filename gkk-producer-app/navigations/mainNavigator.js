import { Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"


import FoodItemsScreen from "../screens/foodItemsScreen"
import FoodItemDetailsScreen from "../screens/foodItemDetailsScreen"

import MenuScreen from "../screens/menuScreen"
import OrdersScreen from "../screens/ordersScreen"
import PrepareScreen from "../screens/prepareScreen"
import ProfileScreen from "../screens/profileScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Food Items" component={FoodItemsScreen} 
                options={ ({ navigation }) => ({
                    headerLeft: () => <Button
                          onPress={() => navigation.toggleDrawer()}
                          title="Drawer Toggle"
                          color="blue"
                        />
                })}
            />
            <Stack.Screen name="Food Item Details" component={FoodItemDetailsScreen} />
        </Stack.Navigator>
    )
}

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={ ({ navigation, route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {},
                // tabBarActiveTintColor: 'tomato',
                // tabBarInactiveTintColor: 'gray',
                headerLeft: () => <Button
                      onPress={() => navigation.toggleDrawer()}
                      title="Drawer Toggle"
                      color="blue"
                    />
            })}
        >
            <Tab.Screen name="Home2" component={MainStackNavigator} options={{ headerShown: false }}/>
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
            <Tab.Screen name="Prepare" component={PrepareScreen} />
        </Tab.Navigator>
    )
}

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home1" component={MainTabNavigator} options={{ headerShown: false }}/>
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator