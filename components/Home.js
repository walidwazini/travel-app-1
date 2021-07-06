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
import discoverData from '../assets/data/discoverFile'
import activitiesData from '../assets/data/activititesFile'
import learnMoreData from '../assets/data/learnMoreFile';
import discoverCategoriesData from '../assets/data/discoverCategoriesFile'
import profile from '../assets/images/person.png';

Entypo.loadFont()
MaterialCommunityIcons.loadFont()

export default function Home({ navigation }) {

    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                item: item,
            })} >
                <ImageBackground
                    source={item.image} style={[styles.discoverItem, {
                        marginLeft: item.id === 'discover-1' ? 20 : 0,
                    },]}
                    imageStyle={styles.discoverItemImage} >
                    <Text style={styles.discoverItemTitle}> {item.title} </Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivityItem = ({ item }) => {
        return (
            <View style={[styles.activityItemWrapper, {
                marginLeft: item.id === 'activities-1' ? 40 : 0,
            }]} >
                <Image source={item.image} style={styles.activityImage} />
                <Text style={styles.activityItemText} >{item.title} </Text>
            </View>
        )
    }

    const renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground source={item.image}
                style={[styles.learnMoreItem, {
                    marginLeft: item.id === 'learnMore-1' ? 20 : 0
                } ]}
                imageStyle={styles.learnMoreItemImage} >
                <Text style={styles.learnMoreItemText} >{item.title}</Text>
            </ImageBackground>
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
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    {/* -------------           ACTIVITIES            -----------------*/}
                    <View style={styles.activitesWrapper} >
                        <Text style={styles.activitesTitle} >Activites</Text>
                        <View style={styles.activitesItemWrapper} >
                            <FlatList
                                data={activitiesData}
                                renderItem={renderActivityItem}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>

                    {/* ------------         LEARN MORE        ----------------  */}
                    <View style={styles.learnMoreWrapper} >
                        <Text style={styles.learnMoreTitle} >Learn More</Text>
                        <View style={styles.learnMoreItemWrapper} >
                            <FlatList
                                data={learnMoreData}
                                renderItem={renderLearnMoreItem}
                                keyExtractor={(item) => item.id}
                                horizontal
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
    // -------------------          DISCOVER        ---------------------
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 32,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    discoverCategoryText: {
        marginRight: 30,
        // fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.gray,
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        // fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        // fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.white,
    },
    // ------------      DISCOVER     ----------
    activitesWrapper: {
        marginTop: 10,
    },
    activitesTitle: {
        marginHorizontal: 20,
        fontSize: 24,
        color: colors.black,
    },
    activitesItemWrapper: {

    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 20,
    },
    activityImage: {
        width: 34,
    },
    activityItemText: {
        marginTop: 5,
        fontSize: 14,
        color: colors.gray,
    },
    // -------------      LEARN MOTRE    -------
    learnMoreWrapper: {
        marginTop: 10,
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontSize: 24,
        color: colors.black,
    },
    learnMoreItemWrapper :{
        paddingVertical: 20,
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    learnMoreItemImage: {
        borderRadius: 20,
    },
    learnMoreItemText: {
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,
    },
});