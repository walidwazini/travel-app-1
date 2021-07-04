import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors'

Entypo.loadFont()
MaterialCommunityIcons.loadFont()

export default function Liked({ navigation }) {
    return (
        <View>
            <View style={styles.tabBar} >
                <TouchableOpacity>
                    <Entypo name='home' size={32}
                        onPress={() => navigation.navigate('Home')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Liked')} >
                    <Entypo name='heart' size={32} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Profile')} >
                    <MaterialCommunityIcons name='account' size={32} />
                </TouchableOpacity>
            </View>
            <Text>Welcome Liked</Text>

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
        backgroundColor: 'red',
    },
});
