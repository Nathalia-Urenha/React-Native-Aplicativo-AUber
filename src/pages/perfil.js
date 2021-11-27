import React, {useState, useEffect} from "react";
import {
    KeyboardAvoidingView,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet, 
    Image, 
    Pressable
} from 'react-native'

import api from "../services/api";

export default function perfil({navigation}){

    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        api.get("/usuarios").then((response)=>{
           setUsuarios(response.data);
            console.log(response.data);
        }).catch((error)=>{console.log(JSON.stringify(error))})
    }, [])


    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Perfil</Text>
                    <Image 
                    source={require('../assets/pet.png')}/>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={usuarios[0].nome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCorrect={false}
                    value={usuarios[0].email}
                    keyboardType="email-address"
                />
                 <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Cep"
                          keyboardType='number-pad'
                          autoCorrect={false}
                          onChangeText={()=>{}}

                      />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="Logradouro"
                          autoCorrect={false}
                          value={usuarios[0].endereco}
                      />
                  </View>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Numero"
                          autoCorrect={false}
                          onChangeText={()=>{}}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="Bairro"
                          autoCorrect={false}
                          value={()=>{}}
                      />
                  </View>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Cidade"
                          autoCorrect={false}
                          value={()=>{}}
                      />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="UF"
                          autoCorrect={false}
                          value={()=>{}}
                          
                      />
                  </View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={usuarios[0].password}
                />
                
            </View>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#FFE4E1'
    },
    container:{
      flex:1,
      alignItems: 'center',
      padding: 20,
      width: '90%',
      paddingBottom: 50
    },
    input:{
      backgroundColor: '#FFF',
      width: '100%', 
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
    textSubmit:{
      color:"#FFF",
      fontSize: 18
    },
    btnRegister:{
      marginTop: 10,
    },
    textRegister:{
      color: '#fff',
      fontSize: 15
    },
    title:{
      color: '#fe76a8',
      fontSize: 25,
      paddingBottom: 30,
      padding: 30
    },
    containerLogo:{
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      texto:{
        color: "#000",
        fontSize: 15,
        padding: 20
      }
  });