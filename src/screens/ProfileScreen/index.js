import React, {  useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title, Input } from './styles'
import { Button } from 'react-native'
import {Auth} from 'aws-amplify'
const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [lat, setLat] = useState('0')
  const [lng, setLng] = useState('0')

  const onSave = () => {}

  return (
    <SafeAreaView>
      <Title>Profile</Title>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <Input
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <Input
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        keyboardType="numeric"
      />
      <Input
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
      />
      <Button onPress={onSave} title="Save" />
      <Button onPress={() => Auth.signOut()} title="Sign out" />
    </SafeAreaView>
  )
}
export default ProfileScreen
