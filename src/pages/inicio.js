import React from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

export default function Inicio(){
    return(
        <KeyboardAvoidingView style={styles.background}>
            <View>
                <Image 
                source={require('../assets/logo.png')}/>
                <Text style={styles.title}>AUber</Text>
            </View>
            <View style={styles.container}>
            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.textSubmit}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.textRegister}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
       
    )
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFE4E1'
    }, 
    container:{
       padding: 30,
        width: '90%',
        paddingBottom: 50
      },
    containerLogo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
    color: '#fe76a8',
    fontSize: 50
    },
    btnSubmit:{
        backgroundColor: "#fe76a8",
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
      },
      btnRegister:{
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10,
        borderTopColor: "#fe76a8",
        borderColor: "#fe76a8",
        borderWidth: 1,
      },
      textRegister:{
        color: '#fe76a8',
        fontSize: 15
      },
      textSubmit:{
        color:"#FFF",
        fontSize: 18
      },
})