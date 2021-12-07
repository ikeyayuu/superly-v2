import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => {console.log('list pressed')}} key={id} bottomDivider> 
            <Avatar
                rounded
                source={{
                    uri:
                        'https://cencup.com/wp-content/uploads/2019/07/avatr-placeholder.png',
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "800"}}>
                    List Name
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    Subtitle testing
                </ListItem.Subtitle>
            </ListItem.Content>
            <TouchableOpacity
                style={styles.touchable} 
                onPress={() => {console.log('edit button pressed')}}
                activeOpacity={0.5}>
                <SimpleLineIcons name='pencil' size={24} color='black' />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchable} 
                onPress={() => {console.log('delete button pressed')}}
                activeOpacity={0.5}>
                <SimpleLineIcons name='trash' size={24} color='black' />
            </TouchableOpacity>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({
    touchable:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
    }
})
