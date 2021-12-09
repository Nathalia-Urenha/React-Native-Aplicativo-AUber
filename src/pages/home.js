import React, { useRef, Component, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, KeyboardAvoidingView} from 'react-native';
import Notificacao from "../components/Notificacao";
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react/cjs/react.development";




export default function Home({navigation}){

    useEffect(()=>{
        const storage = async() => {
        const idGet = await AsyncStorage.getItem("idUserSession");
        api.get(`/passeios/ativos/dono/${idGet}`).then((response)=>{
            const tempo = (response.data[Number((response.data).length) - 1].tempoPasseio)
            if(Number(tempo) === 15){
                setValor("   R$15,00   ");
            } else if(Number(tempo) === 30){
                setValor("   R$30,00   ");
            } else if(Number(tempo) === 60){
                setValor("   R$60,00   ");
            }
        }).catch((error)=>{console.log(JSON.stringify(error))})
        }
        storage()
      }, [])

    const acao =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Acao"}]
        });
    }

    
    

    return(
        
        <KeyboardAvoidingView style={styles.background}>
            <View style={{paddingTop: 50, marginTop: 50}}>
                <Notificacao />
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
        fontSize: 40
    },
    btnSubmit:{
        backgroundColor: "#fe76a8",
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
      },
      textSubmit:{
        color:"#FFF",
        fontSize: 18
      },
  
})