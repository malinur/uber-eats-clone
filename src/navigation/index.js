import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import OrdersScreen from '../screens/OrdersScreen'
import DishDetailsScreen from '../screens/DishDetailsScreen'
import BasketScreen from '../screens/BasketScreen'
import OrderDerailsScreen from '../screens/OrderDetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  )
}

const TAB_ICON = {
  Home: 'home',
  Orders: 'receipt',
  Profile: 'person',
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ color }) => (
      <Icon name={iconName} color={color} size={24} />
    ),
    headerShown: false,
  }
}

const Tab = createMaterialBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Orders" component={OrdersStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator()

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDerailsScreen} />
    </OrdersStack.Navigator>
  )
}

export default RootNavigator
