import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Home from './Components/Home/Home';
import Notifications from './Components/Notifications/Notifications';
import DM from './Components/PrivateMessages/DM';
import Profile from './Components/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {

  return (      
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{title: "My App"}}
/>
      <Stack.Screen
      name='Profile'
      component={Profile}
         />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
{/* <SafeAreaView style={profileStyle.container}>
  <Profile />
</SafeAreaView>
<View style={styles.container}>
  <Button
    title="Home"
    >
  <Home />
  </Button>
  <Button
  title='Bell'
  >
  <Notifications />
  </Button>
  <Button
  title='DM'
  >
  <DM />
  </Button>
  <StatusBar style="auto" />
</View>
 */}

const profileStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-end",
    padding: 40

  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    paddingTop: 500
    
  },
});
