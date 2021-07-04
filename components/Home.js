import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { color } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors'

Entypo.loadFont()
MaterialCommunityIcons.loadFont()

export default function Home({ navigation }) {
    return (
        <View>
            <View style={styles.tabBar} >
                <TouchableOpacity>
                    <Entypo name='home' size={32}
                        onPress={() => navigation.navigate('Home')} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Liked')} >
                    <Entypo name='heart' size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Profile')} >
                    <MaterialCommunityIcons name='account' size={32} />
                </TouchableOpacity>
            </View>
            <View  >
                <Text>Home Welcome</Text>
                <TouchableOpacity onPress={() => navigation.push('Profile')} >
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: 'grey',
    },
});