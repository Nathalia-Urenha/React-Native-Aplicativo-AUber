import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated, TouchableOpacity} from 'react-native';

export default class FabButton extends Component{
    render(){
        return(
            <View style={[styles.container, this.props.style]}>
               <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button]}>
                        <TouchableOpacity name='plus' size={24} color="#FFF">
                            <Text style={{fontSize: 30}}>+</Text>
                        </TouchableOpacity>
                    </Animated.View> 
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute'
    },
    button:{
        backgroundColor: '#fe76a8',
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60/2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#fe76a8',
        shadowOpacity: 0.3,
        shadowOffset:{
            height: 10,
        }
    },
});