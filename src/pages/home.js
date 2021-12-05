import React, { useRef, Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, KeyboardAvoidingView} from 'react-native';
import api from '../services/api'



export default function Home({navigation}){
    
 

    const acao =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Acao"}]
        });
    }

    

    return(
        <KeyboardAvoidingView>
            <View>
                <View style={[styles.container]}>
                    <TouchableWithoutFeedback onPress={acao}>
                        <Animated.View style={[styles.button, styles.menu]}>
                            <TouchableOpacity name='plus' size={24} color="#FFF" onPress={()=>{}}>
                                <Text style={{fontSize: 30}}>+</Text>
                            </TouchableOpacity>
                        </Animated.View> 
                    </TouchableWithoutFeedback>
                </View>

                <View>
                    <Text style={styles.title}>Bem-Vindo</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    background:{

        backgroundColor: '#FFE4E1'
      },
    container:{
        alignItems: 'center',
        position: 'absolute',
        bottom: -400, 
        right: 60,
       
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
    title:{
        color: '#fe76a8',
        fontSize: 40
      },
  
})