import { Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { FontAwesome5, FontAwesome } from "@expo/vector-icons"
import Colors from "../constants/colors"

import FoodItemsScreen from "../screens/foodItemsScreen"
import FoodItemDetailsScreen from "../screens/foodItemDetailsScreen"

import MenuScreen from "../screens/menuScreen"
import OrdersScreen from "../screens/ordersScreen"
import PrepareScreen from "../screens/prepareScreen"
import ProfileScreen from "../screens/profileScreen"
import AddNewFoodItemScreen from "../screens/addNewFoodItemScreen"

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
                          title="Drawer 1"
                          color="red"
                        />,
                    headerShown: false
                })}
            />
            <Stack.Screen name="Food Item Details" component={FoodItemDetailsScreen} />
            <Stack.Screen name="Add New Food Item" component={AddNewFoodItemScreen} />
        </Stack.Navigator>
    )
}

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={ ({ navigation, route }) => ({
                tabBarActiveTintColor: Colors.DarkMode.accent,
                tabBarInactiveTintColor: Colors.DarkMode.text1,
                headerLeft: () => <Button
                    onPress={() => navigation.toggleDrawer()}
                    title="Drawer 2"
                    color="red"
                />,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.DarkMode.background1
                }
            })}
        >
            <Tab.Screen 
                name="Food Items 1" 
                component={MainStackNavigator} 
                options={{
                    tabBarLabel: "Food Items",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="utensils" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Menu" 
                component={MenuScreen} 
                options={{
                    tabBarLabel: "Menu",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="calendar-alt" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={{
                    tabBarLabel: "Orders",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="vote-yea" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Prepare" 
                component={PrepareScreen} 
                options={{
                    tabBarLabel: "Prepare",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="concierge-bell" color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    )
}

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{
                headerStyle:{
                    backgroundColor: Colors.DarkMode.background2,
                },
                headerTitleStyle:{
                    color: Colors.DarkMode.text1
                }
            }}
        >
            <Drawer.Screen name="Home" component={MainTabNavigator} 
                options={{ 
                    // headerShown: false,
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator