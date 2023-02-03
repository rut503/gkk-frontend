import { Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { FontAwesome5, FontAwesome } from "@expo/vector-icons"
import Colors from "../constants/colors"

import FoodItemsScreen from "../screens/foodItemsScreen"
import FoodItemDetailsScreen from "../screens/foodItemDetailsScreen"
import AddNewFoodItemScreen from "../screens/addNewFoodItemScreen"

import MenuScreen from "../screens/menuScreen"

import OrdersScreen from "../screens/ordersScreen"
import PreviousOrdersScreen from "../screens/previousOrdersScreen"

import PrepareScreen from "../screens/prepareScreen"

import ProfileScreen from "../screens/profileScreen"

import LoginScreen from "../screens/loginScreen"
import SignupScreen from "../screens/signupScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const FoodItemsStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
                headerTitleStyle:{ color: Colors.PRIMARY_TEXT }
            }}
        >
            <Stack.Screen name="Food Items" component={FoodItemsScreen} 
                // options={ ({ navigation }) => ({
                //     headerLeft: () => <DrawerButtonComponent navigation={navigation}/>
                // })}
            />
            <Stack.Screen name="Food Item Details" component={FoodItemDetailsScreen} />
            <Stack.Screen name="Add New Food Item" component={AddNewFoodItemScreen} />
        </Stack.Navigator>
    )
}

const MenuStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
                headerTitleStyle:{ color: Colors.PRIMARY_TEXT }
            }}
        >
            <Stack.Screen name="Menu" component={MenuScreen} 
                // options={ ({ navigation }) => ({
                //     headerLeft: () => <DrawerButtonComponent navigation={navigation}/>
                // })}
            />
        </Stack.Navigator>
    )
}

const OrdersStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
                headerTitleStyle:{ color: Colors.PRIMARY_TEXT }
            }}
        >
            <Stack.Screen name="Orders" component={OrdersScreen} 
                // options={ ({ navigation }) => ({
                //     headerLeft: () => <DrawerButtonComponent navigation={navigation}/>
                // })}
            />
            <Stack.Screen name="Previous Orders" component={PreviousOrdersScreen} />
        </Stack.Navigator>
    )
}

const PrepareStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
                headerTitleStyle:{ color: Colors.PRIMARY_TEXT }
            }}
        >
            <Stack.Screen name="Prepare" component={PrepareScreen} 
                // options={ ({ navigation }) => ({
                //     headerLeft: () => <DrawerButtonComponent navigation={navigation}/>
                // })}
            />
        </Stack.Navigator>
    )
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
                headerTitleStyle:{ color: Colors.PRIMARY_TEXT }
            }}
        >
            <Stack.Screen name="Profile" component={ProfileScreen} 
                // options={ ({ navigation }) => ({
                //     headerLeft: () => <DrawerButtonComponent navigation={navigation}/>
                // })}
            />
        </Stack.Navigator>
    )
}

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.ACCENT,
                tabBarInactiveTintColor: Colors.PRIMARY_TEXT,
                tabBarStyle: { backgroundColor: Colors.SECONDARY_BACKGROUND },
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="Food Items Stack Navigator" 
                component={FoodItemsStackNavigator} 
                options={{
                    tabBarLabel: "Food Items",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="utensils" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Menu Stack Navigator" 
                component={MenuStackNavigator} 
                options={{
                    tabBarLabel: "Menu",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="calendar-alt" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Orders Stack Navigator" 
                component={OrdersStackNavigator} 
                options={{
                    tabBarLabel: "Orders",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="vote-yea" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Prepare Stack Navigator" 
                component={PrepareStackNavigator} 
                options={{
                    tabBarLabel: "Prepare",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="concierge-bell" color={color} size={size}/>
                }}
            />
            <Tab.Screen 
                name="Profile Stack Navigator" 
                component={ProfileStackNavigator} 
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-alt" color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    )
}

// const MainDrawerNavigator = () => {
//     return (
//         <Drawer.Navigator
//             screenOptions={{
//                 headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
//                 headerTitleStyle:{ color: Colors.PRIMARY_TEXT },
//                 drawerStyle: {
//                     backgroundColor: Colors.PRIMARY_BACKGROUND,
//                     width: 200,
//                 },
//                 drawerType: "back",
//                 drawerActiveTintColor: Colors.DarkMode.accent,
//                 drawerInactiveTintColor: Colors.DarkMode.text2,
//             }}
//         >
//             <Drawer.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
//             <Drawer.Screen name="Profile" component={ProfileScreen} />
//         </Drawer.Navigator>
//     )
// }

const MainLandingScreenNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{ backgroundColor: Colors.PRIMARY_BACKGROUND },
                headerTitleStyle:{ color: Colors.PRIMARY_TEXT }
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={MainTabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default MainLandingScreenNavigator