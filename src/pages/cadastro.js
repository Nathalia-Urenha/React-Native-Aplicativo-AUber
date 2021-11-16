import React from "react";
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

export default function Cadastro({navigation}){

  const Login = () =>{
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    });
  }
    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
            <Text style={styles.title}>Criar nova conta</Text>
                <Image 
                source={require('../assets/pet.png')}/>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={()=>{}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCorrect={false}
                    onChangeText={()=>{}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={()=>{}}
                />
                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.textSubmit}>Cadastrar</Text>
                </TouchableOpacity>
                <Pressable onPress={Login}>
                  <Text style={styles.texto}>Já possui conta? Login</Text>
                </Pressable>
    
            </View>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#191919'
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      texto:{
        color: "#fff",
        fontSize: 15,
        padding: 30
      }
  });