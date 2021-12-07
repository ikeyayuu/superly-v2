import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native'
import { Button, Input, Image, Text } from 'react-native-elements';
import { Colours } from '../components/Colours';

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'back to login',
        })
    }, [navigation]);

    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                // photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            })
        })
        .catch(error => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style={{backgroundColor: Colours.aqua}}/>

            <Text h3 style={{marginBottom: 50}}>
                Create an account!
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder='Email Address'
                    type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                {/* <Input
                    placeholder='Profile Picture URL (optional)'
                    type='text'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                /> */}
            </View>
            
            <TouchableOpacity 
                style={styles.touchable} 
                onPress={register} 
            >
                <Text style={styles.touchableText}>
                    Register
                </Text>
            </TouchableOpacity>
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer:{
        width: 300,

    },
    button:{
        width: 200,
        marginTop: 10,
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
})
