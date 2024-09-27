import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OneColumn from './Screens/OneColumn';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OneColumn" component={OneColumn} options={{
          headerTitle: "Chat",
          headerTitleStyle: {
            fontSize: 24,
            color: "#fff"
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Back"
              color="#fff"
            />
          ),
          headerStyle: {
            backgroundColor: "#1BA9FF",
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
