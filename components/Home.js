import React from 'react';
import {
    StyleSheet, Text, Image, FlatList, ImageBackground,
    View, TouchableOpacity, Button, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../assets/colors'
import Feather from 'react-native-vector-icons'
import activitiesData from '../assets/data/activititesData'
import discoverCategoriesData from '../assets/data/discoverCategoriesData'
import discoverData from '../assets/data/discoverData'
import profile from '../assets/images/person.png';



Entypo.loadFont()
MaterialCommunityIcons.loadFont()

export default function Home({ navigation }) {

    const renderDiscoverItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Details', {
                        item: item,
                    })
                }>
                <ImageBackground
                    source={item.image}
                    style={[
                        styles.discoverItem,
                        { marginLeft: item.id === 'discover-1' ? 20 : 0 },
                    ]}
                    imageStyle={styles.discoverItemImage}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            {/* ---------------       Tab Bar     ------------------*/}
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
            {/*  ----------------        CONTENTS           ---------------------*/}
            <ScrollView>
                <View style={styles.container}>
                    {/*  ----------        HEADER      ------------------*/}
                    <View>
                        {/* Line 40 --- Ubah ke SafeAreaView */}
                        <View style={styles.menuWrapper} >
                            <Entypo name='menu' size={30} color={colors.black} style={styles.menuIcon} />
                            <Image source={profile} style={styles.profileImage} />
                        </View>
                    </View>
                    {/* ---------------             DISCOVER       ------------------------*/}
                    <View style={styles.discoverWrapper}>
                        <Text style={styles.discoverTitle}>Discover</Text>
                        <View style={styles.discoverCategoriesWrapper}>
                            <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>
                                All
                            </Text>
                            <Text style={styles.discoverCategoryText}>Destinations</Text>
                            <Text style={styles.discoverCategoryText}>Cities</Text>
                            <Text style={styles.discoverCategoryText}>Experiences</Text>
                        </View>
                        <View style={styles.discoverItemsWrapper}>
                            <FlatList
                                data={discoverData}
                                renderItem={renderDiscoverItem}
                                keyExtractor={(item) => item.id}

                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
                <Text>Home Welcome</Text>
                <TouchableOpacity onPress={() => navigation.push('Profile')} >
                    <Text>Profile</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: 'grey',
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
});