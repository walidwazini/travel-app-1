import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './components/Home';
import Profile from './components/Profile';
import Liked from './components/Liked';
import colors from './assets/colors'

const screens = {
    Home: {
        screen: Home,
    },
    Liked: {
        screen: Liked,
    },
    Profile: {
        screen: Profile,
    },
}

const HomeStack = createStackNavigator(screens,
    {
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
)

export default createAppContainer(HomeStack)