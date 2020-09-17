import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render (){
        return(
            <View style={{flex:1}}>
                <View style={StyleSheet.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={StyleSheet.logOutContainer}>
                    <TouchableOpacity style={StyleSheet.logOutButton}
                    onPress = {()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
                      )
                }
    }

    var styles = StyleSheet.create({
        container : {
            flex:1
        },
        logOutContainer : {
            flex:0.2,
            justifyContent : 'flex-end',
            paddingBottom:30
        },
        logOutButton : {
            fontsize: 30,
            fontWeight: 'bold'
        }
    })