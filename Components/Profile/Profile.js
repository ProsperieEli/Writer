import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import React from 'react'

export default function Profile() {
  return (
<View>
    <Text>
        Profile
    </Text>
    <Button
    title='Back to home'
    onPress={() => 
    this.props.navigation.navigate('Home')}
    />
</View>  )
}
