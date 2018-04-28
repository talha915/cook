import React from 'react';
import {
    Dimensions
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Contact from '../pages/Contact';

const {width, height} = Dimensions.get('window');

const tabHome = StackNavigator({
    Home:  {
        screen: Home,
        navigationOptions:{
            headerTitle: 'Home',
            headerTitleStyle: {
                marginLeft: width-240
            }
        },
    },
});

const tabDetails = StackNavigator({
    Details: {
        screen: Details,
        navigationOptions: {
            headerTitle: 'Details',
            headerTitleStyle: {
                marginLeft: width-240
            }
        }
    },
});

const tabContact = StackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: {
            headerTitle: 'Contact',
            headerTitleStyle: {
                marginLeft: width-240
            }
        }
    } 
});

const Screens = TabNavigator({
    Home: {
        screen: tabHome,
    },
    Details: {
        screen: tabDetails,
    },
    Contact: {
        screen: tabContact,
    }
},
    {
        tabBarPosition: 'bottom'
    }
);
export default Screens;