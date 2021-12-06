import React from "react";
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity,TextInput, Pressable} from 'react-native';

import { useState, useEffect } from "react";
import Radio from "../components/Radio";
import Card from "../components/Card";

import api from "../services/api";
import { ScrollView } from "react-native-gesture-handler";
import MeusPasseios from "../components/MeusPasseios";

export default function Passear({navigation}){

    const home =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        });
    }
 

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Passeios Disponíveis</Text>
            </View>
            <View style={styles.container}>
                <ScrollView>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Card /> 
                    </View>    
                </ScrollView>
            </View>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Meus Passeios</Text>
            </View>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <MeusPasseios /> 
                    </View>
                </ScrollView>
            </View>  
            
            <Pressable onPress={home}>
                <Text style={styles.texto}>Voltar para a página inicial</Text>
            </Pressable>
            
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFE4E1'
    },
    containerLogo:{
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        //width: '90%',
       paddingBottom: 50
      },     
      title:{
        color: '#fe76a8',
        fontSize: 40
      },
      texto:{
        color: "#000",
        fontSize: 15,
        padding: 20
      }
});