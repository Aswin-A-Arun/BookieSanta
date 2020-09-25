import React from 'React';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from '.components/CustomSideBarMenu';
//import SettingsScreen from '../screens/SettingsScreen';
import {Icon} from 'react-native-elements'; 
import SettingsScreen from '../../.expo-shared/Screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator, 
        navigationOptions : {
            drawerIcon  : <Icon name = "home" type = "font-awesome" /> 
        },
    },
    myDonations : {
        screen : myDonationsScreen,
        navigationOptions : {
            drawerIcon  : <Icon name = "gift" type = "font-awesome" /> ,
            drawerLabel : "my donations"
        },
    },

    Notification : { 
   screen : NotificationScreen,
    navigationOptions : {
        drawerIcon  : <Icon name = "bell" type = "font-awesome" /> ,
        drawerLabel : "Notifications"
    },
},
myRecievedBooks : {
    screen : myRecievedBooksScreen,
    navigationOptions : {drawerIcon : <icon name = "gift" type = "font-awesome"/>,
    drawerLabel : "my recieved books"

    },
},

Setting : {
    screen: SettingsScreen,
    navigationOptions : {
        drawerIcon : <Icon name = "settings" type= "font-awesome"/>,
        drawerLabel : "settings"

    }
}
})