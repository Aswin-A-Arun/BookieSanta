import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from '.expo-shared/screens/WelcomeScreen';
import { AppDrawerNavigator } from '.expo/components/AppDrawerNavigator';
import { AppTabNavigator } from '.expo/components/AppTabNavigator';


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);