import React, { useRef, Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated} from 'react-native';
import FabButton from "../components/FabButton";
import api from '../services/api'

export default function Home({navigation}){
    
    const chamar =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Chamar"}]
        });
    }

    const perfil =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Perfil"}]
        });
    }

    const animation = useRef(new Animated.Value(0)).current;
  

    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                // rotate: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
    }

    async function userAPI() {
        try {
            const response = await api.get(`usuarios`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    Component.toggleMenu = () =>{

        const toValue = this.open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true 
        }).start();

        this.open = !this.open;


    }

    const passearStyle = {
        transform:[
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange:[0, 1],
                    outputRange: [0, -70]
                })
            }
        ]
    }

    const chamarStyle = {
        transform:[
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange:[0, 1],
                    outputRange: [0, -140]
                })
            }
        ]
    }

    const pressionou = () => {
        console.log("pressionou")
    }

    
    
    return(
        <View>
            <View style={[styles.container]}>
               <TouchableWithoutFeedback onPress={()=>{}}>
                    <Animated.View style={[styles.button, styles.submenu, chamarStyle]}>
                        <TouchableOpacity name='chamar' size={20} color="#FFF" onPress={() => {chamar}}>
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

                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <TouchableOpacity name='plus' size={24} color="#FFF" onPress={()=>{}}>
                            <Text style={{fontSize: 30}}>+</Text>
                        </TouchableOpacity>
                    </Animated.View> 
                </TouchableWithoutFeedback>
            </View>



            <TouchableOpacity onPress={chamar}>
                <Text>Chamar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={perfil}>
                <Text>Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute',
        bottom: -600, 
        right: 60
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
})