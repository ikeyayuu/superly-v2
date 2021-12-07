import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Input, Icon, Button } from 'react-native'
import { firebaseConfig } from '../firebase';
import { initializeFirestore } from 'firebase/firestore'
import {initializeApp} from 'firebase/app'

const app = initializeApp( firebaseConfig )
const db = initializeFirestore(app, {useFetchStreams: false})

const AddList = ({ navigation }) => {
    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "add a new list",
            headerBackTitle: "lists",
        })
    }, [ navigation ])

    const createList = async () => {
        await db
        .collection('lists')
        .add({
            listName: input
        })
        .then(() => {
            navigation.goBack();
        })
        .catch((error) => alert(error));
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='enter a list name' 
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createList}
                leftIcon={
                    <Icon 
                        name='wechat' 
                        type='antdesign'
                        size={24}
                        color='black'
                    />
                }
            />
            <Button onPress={createList} title='Create new list' />
        </View>
    )
}

export default AddList

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 30,
        height: '100%',

    },
})
