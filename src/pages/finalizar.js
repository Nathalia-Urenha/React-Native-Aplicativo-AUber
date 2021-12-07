import React, { useRef, Component, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, KeyboardAvoidingView, Image } from 'react-native';
import Notificacao from "../components/Notificacao";
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Valores from "../components/valores";



export default function Finalizar({navigation}){

    const home = () =>{
        navigation.reset({
          index: 0,
          routes: [{name: "Home"}]
        });
      }
     

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Receber Pagamento</Text>
                    
            </View>
            <View style={{flex: 2, alignItems: "center"}}>
                <Valores />
                <TouchableOpacity onPress={home} style={styles.btnSubmit}>
                    <Text style={styles.textSubmit}>Recebi</Text>
                </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: "center",
      backgroundColor: '#FFE4E1',
     
      
    },
    
    title:{
        color: '#fe76a8',
        fontSize: 40,
        paddingBottom: 30
    },
    btnSubmit:{
        backgroundColor: "#fe76a8",
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 20
      },
      textSubmit:{
        color:"#FFF",
        fontSize: 18,
        
      },
      containerLogo:{
        flex:0.6,
        justifyContent: 'center',
        alignItems: 'center',
      },
      texto:{
        color: "#000",
        fontSize: 17,
        padding: 20
      },
  
})