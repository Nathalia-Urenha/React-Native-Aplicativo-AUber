import React, { useRef, Component, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, KeyboardAvoidingView} from 'react-native';
import Notificacao from "../components/Notificacao";
import api from '../services/api'



export default function Home({navigation}){
    
    

    const acao =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Acao"}]
        });
    }
    

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View>
                <Notificacao />
            </View>
            <TouchableOpacity onPress={acao} style={styles.btnSubmit}>
                <Text style={styles.textSubmit}>Ação</Text>
            </TouchableOpacity>

        
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