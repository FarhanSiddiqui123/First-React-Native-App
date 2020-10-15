import React from 'react';
import {TabNavigator} from 'react-navigation';

import Home from '../pages/home';
import Profile from '../pages/profile';


export const Tabs =TabNavigator({
    Home:{
        screen: Home,
    },
    Profile:{
        screen: Profile,

    }
})