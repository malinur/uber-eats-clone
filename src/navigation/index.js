import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Restaurant' component={RestaurantDetailsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
export default RootNavigator
