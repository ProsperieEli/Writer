import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home() {
  return (
    <View>
        <Text>
            Hellow World
        </Text>
        <Button
        title='Go to Profile'
        onPress={() => navigation.navigate('Profile')}
        />
    </View>
  )
}
