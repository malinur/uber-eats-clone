import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation'

export default function App (props) {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  )
}
