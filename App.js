import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler";
// screens
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import AddList from './screens/AddList';
import List from './screens/List';
// firebase
import { firebaseConfig } from './firebase';
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

import { 
  initializeFirestore, 
  getFirestore, 
  setDoc, 
  doc, 
  addDoc, 
  getDoc,
  collection,
  query, 
  where, 
  onSnapshot 
} from 'firebase/firestore'
import { Colours } from './components/Colours';


const app = initializeApp( firebaseConfig)
const db = initializeFirestore(app, {useFetchStreams: false})
const auth = getAuth()

const Stack = createNativeStackNavigator();

const globalScreenOptions={
  headerStyle: {backgroundColor: Colours.salmon},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={globalScreenOptions}>
        <Stack.Screen options={{headerShown: false}}name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AddList' component={AddList} />
        <Stack.Screen name='List' component={List} />
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
