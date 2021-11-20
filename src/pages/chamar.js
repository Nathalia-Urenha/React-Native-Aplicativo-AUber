import React from "react";
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import { useState } from "react";
import Radio from "../components/Radio";

export default function Chamar({navigation}){

    const [porte, setPorte] = useState(null)
    const [selected, setSelected] = useState(null)
    console.log(porte)
    console.log(selected)
  

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Text style={styles.title}>Novo Passeio</Text>
                    <Image 
                    source={require('../assets/pet.png')}/>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={[styles.input, {width: "50%"}, ]}
                        placeholder="Quantidade de Pets"
                        keyboardType='number-pad'
                    // onChangeText={value=>setNome(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                       // onChangeText={value=>setNome(value)}
                    />
                    <Text style={{fontSize: 18}}>Porte:</Text>
                    
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
        alignItems: 'flex-start',
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
      }
});