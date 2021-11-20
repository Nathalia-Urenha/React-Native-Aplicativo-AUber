import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated, TouchableOpacity} from 'react-native';

export default class FabButton extends Component{


    animation = new Animated.Value(0);

    toggleMenu = () =>{
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true 
        }).start();

        this.open = !this.open;


        }

    render(){
       
        const passearStyle = {
            transform:[
                {
                    scale: this.animation
                },
                {
                    translateY: this.animation.interpolate({
                        inputRange:[0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const chamarStyle = {
            transform:[
                {
                    scale: this.animation
                },
                {
                    translateY: this.animation.interpolate({
                        inputRange:[0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

       const chamar = Navegar;
       console.log(chamar)

        return(
            <View style={[styles.container, this.props.style]}>
               <TouchableWithoutFeedback onPress={()=> {}}>
                    <Animated.View style={[styles.button, styles.submenu, chamarStyle]}>
                        <TouchableOpacity name='chamar' size={20} color="#FFF" onPress={Navegar}>
                            <Text style={{fontSize: 30}}>C</Text>
                        </TouchableOpacity>
                    </Animated.View> 
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=> {}}>
                    <Animated.View style={[styles.button, styles.submenu, passearStyle]}>
                        <TouchableOpacity name='passear' size={20} color="#FFF">
                            <Text style={{fontSize: 30}}>P</Text>
                        </TouchableOpacity>
                    </Animated.View> 
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
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
    menu:{
        backgroundColor: '#fe76a8'
    },
    submenu:{
        width: 48,
        height: 48,
        borderRadius: 48/2,
        backgroundColor: '#fe76a8',
    }
});

function Navegar({navigation}){
    console.log("navegar")

     const chamar =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Chamar"}]
        });
    }
    
    return {chamar}
 
    
}