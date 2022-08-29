import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation'
import config from './src/aws-exports'
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'

Amplify.configure({ ...config, Analytics: { disabled: true } })

function App (props) {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  )
}

export default withAuthenticator(App)
