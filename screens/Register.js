import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native'
import { Button, Input, Image, Text } from 'react-native-elements';

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

    const register = () => {};

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style='light'/>

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
                <Input
                    placeholder='Profile Picture URL (optional)'
                    type='text'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            
            <Button
                containerStyle={styles.button}
                onPress={register}
                title='Register'
                raised
            />
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
        backgroundColor: 'white',
    },
    inputContainer:{
        width: 300,

    },
    button:{
        width: 200,
        marginTop: 10,
    },
})
