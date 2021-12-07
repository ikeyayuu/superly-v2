import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';

import { firebaseConfig } from '../firebase';
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
import { Colours } from '../components/Colours';
import { TouchableOpacity } from 'react-native-gesture-handler';
const app = initializeApp( firebaseConfig)
const db = initializeFirestore(app, {useFetchStreams: false})
const auth = getAuth()

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //         if(authUser){
    //             navigation.replace('Home');
    //         }
    //     });

    //     return unsubscribe;
    // }, []);

    const signIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />

            <Image 
                source={require('../assets/SUPERLY_logo.png')}
                style={{width: 200, height: 200, resizeMode: 'contain', marginBottom: 50}}
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email" 
                    autoFocus 
                    type="email" 
                    value={email} 
                    onChangeText={(text) => setEmail(text)} />
                <Input 
                    placeholder="Password" 
                    secureTextEntry 
                    type="password" 
                    value={password} 
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>

            <TouchableOpacity 
                containerStyle={styles.touchable} 
                onPress={signIn} 
            >
                <Text style={styles.touchableText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                containerStyle={styles.register} 
                onPress={() => navigation.navigate('Register')} 
            >
                <Text style={styles.registerText}>
                    Register
                </Text>
            </TouchableOpacity>
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    touchable:{
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: Colours.aqua,
        borderRadius: 5,

    },
    touchableText:{
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: 'white',

    },
    register:{
        marginTop: 15,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white',
        borderColor: Colours.aqua,
        borderWidth: 1,
        borderRadius: 5,

    },
    registerText:{
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: Colours.aqua,

    },
    inputContainer:{
        width: 300,

    },
    button:{
        width: 200,
        marginTop: 10,

    },
})
