import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../components/CustomListItem'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
// firebase
import { firebaseConfig } from '../firebase';
import {initializeApp} from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import { Colours } from '../components/Colours'

const app = initializeApp( firebaseConfig )
const db = initializeFirestore(app, {useFetchStreams: false})

const Home = ({ navigation }) => {

    const [lists, setLists] = useState([]);

    const signOutUser = () =>{
        auth.signOut().then(() => {
            navigation.replace('Login');
        })
    }

    // useEffect(() => {
    //     const unsubscribe = db.collection('lists').onSnapshot(snapshot => (
    //         setLists(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     ))

    //     return unsubscribe;
    // }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: '#fff'},
            headerTotleStyle: {color: 'black'},
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity= {0.5}>
                        <Text style={{color: Colours.aqua}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{marginRight: 20}}>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={() => {console.log('add button pressed')}}
                    >
                        <AntDesign name='plus' size={24} color='black' />
                    </TouchableOpacity>

                </View>
            ),
        });
    }, [ navigation ]);

    const enterList = (id, listName) => {
        navigation.navigate('List', {
            id, listName
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {lists.map(({id, data: { listName }}) => (
                    <CustomListItem 
                        id={id} 
                        listName={listName}
                        key={id}
                        enterList={enterList}
                    />
                ))}
                <CustomListItem/>
                {/*Populating list */}
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height: '100%',
    }
})
