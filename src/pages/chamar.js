import React from "react";
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity,TextInput, Pressable} from 'react-native';
import { useState, useEffect } from "react";
import Radio from "../components/Radio";

import api from "../services/api";

export default function Chamar({navigation}){

    const [nomePet, setNomePet] = useState(null)
   
    const [tempo, setTempo] = useState(null)
    const [select, setselect] = useState(null)

    const [porte, setPorte] = useState(null)
    const [selected, setSelected] = useState(null)

    // const [idGet, setIdGet] = useState(null)
    
    // useEffect(()=>{
    //   const storage = async() => {
    //     setIdGet(await AsyncStorage.getItem("idUserSession"));
    //   }
    //   storage()  
    // }, [])
    
    const cadastrarPasseio = () => {

      const dados = {
        nomeCachorro: nomePet,
        porteCachorro: porte,
        tempoPasseio: tempo,
      //  donoCachorro: idGet,
      } 
      api.post("/passeios", dados).then((response)=>{
         console.log(response.data);
         navigation.navigate('Home');
     }).catch((error)=>{console.log(JSON.stringify(error))})
    }
    
    
    const home = () =>{
        navigation.reset({
          index: 0,
          routes: [{name: "Home"}]
        });
      }
  

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Novo Passeio</Text>
                    <Image 
                    source={require('../assets/pet.png')}/>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Pet"
                       onChangeText={value=>setNomePet(value)}
                    />
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:1}}>
                            <Text style={[{fontSize: 18}, {justifyContent: 'flex-start',}]}>Porte:</Text>
                            
                            <Radio
                                selected = {selected}
                                options={['Pequeno', 'Médio', 'Grande']}
                                horizontal={false}
                                onChangeSelect={(value, i)=>{
                                    setPorte(value);
                                    setSelected(i);
                                        
                                    }
                                }
                            />
                        </View>
                        <View style={{flex:1}}> 
                            <Text style={[{fontSize: 18}, {justifyContent: 'flex-end',}]}>Tempo:</Text>
                            <Radio
                                selected = {select}
                                options={['15 minutos', '30 Minutos', '1 hora']}
                                horizontal={false}
                                onChangeSelect={(valor, x)=>{
                                    setTempo(valor);
                                    setselect(x);
                                        
                                    }
                                }
                            />
                        </View>
                    </View>
                    <TouchableOpacity 
                    style={styles.btnSubmit}
                    //enviar pra api e mudar pra tela de login - perguntar pro igor como faz 
                    onPress={cadastrarPasseio}
                    >
                        <Text style={styles.textSubmit}>Cadastrar</Text>
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
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 20
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
        fontSize: 15,
        padding: 20
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