import React, { useLayoutEffect, useState } from 'react'
import { 
    KeyboardAvoidingView, 
    Platform, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View,
    TextInput, 
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons'

const List = ({ navigation, route }) => {

    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'list',
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerTitle: () => (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text>{route.params.listName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{marginLeft: 10}}
                    onPress={navigation.goBack}
                >
                    <AntDesign name='arrowleft' size={24} color='white' />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity>
                        <FontAwesome name='video-camera' size={24} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name='call' size={24} color='white' />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    const sendMessage = () => {};

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar style='light' />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'heigth'}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <ScrollView>
                    {/* {list goes here} */}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        placeholder='signal message' 
                        style={styles.textInput} 
                    />
                    <TouchableOpacity 
                        onPress={sendMessage} 
                        activeOpacity={0.5}
                    >
                        <Ionicons name='send' size={24} color='black' />

                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default List

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
    },
    textInput:{
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: '#ECECEC',
        padding: 10,
        color: 'grey',
        borderRadius: 30,
    },
})
