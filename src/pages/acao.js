import React from "react";
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity,TextInput, Pressable} from 'react-native';


export default function Acao({navigation}){

    const home =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        });
    }
  

    const chamar =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Chamar"}]
        });
    }

    const passear =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Passear"}]
        });
    }

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Opções</Text>
                    <Image 
                    source={require('../assets/pet.png')}/>
            </View>
            <View style={styles.container}>
                
            
                <TouchableOpacity 
                style={styles.btnSubmit}
                onPress={chamar}>
                    <Text style={styles.textSubmit}>Chamar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.btnRegister}
                onPress={passear}>
                    <Text style={styles.textRegister}>Passear</Text>
                </TouchableOpacity>
                <Pressable onPress={home}>
                    <Text style={styles.texto}>Voltar para a página inicial</Text>
                </Pressable>
                    
            </View>
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
        width: '90%',
        paddingBottom: 50
      },
      input:{
        backgroundColor: '#FFF',
        width: '90%', 
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
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