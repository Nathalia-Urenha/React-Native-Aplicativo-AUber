import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Notificacao() {

    const [mensagem, setMensagem] = useState("Bem-Vindo!");
//    const navigation = useNavigation();
useEffect(()=>{
    const storage = async() => {
        const idGet = await AsyncStorage.getItem("idUserSession");
      api.get(`/passeios/ativos/dono/${idGet}`).then((response)=>{
        const statusAtual = (response.data[Number((response.data).length) - 1].status)
        if (Number(statusAtual) === 0) {
            setMensagem("Bem-Vindo!")
        } else if (Number(statusAtual) === 1) {
            setMensagem("A caminho!")
        } else if (Number(statusAtual) === 2) {
            setMensagem("Cheguei!")
        } else {
            console.log("Jose")
        }
     }).catch((error)=>{console.log(JSON.stringify(error))})
    }
    storage()
  }, [])

    return (
            <View style={styles.card}>
                    <View style={styles.containerLogo}>
                            <Image 
                            source={require('../assets/pet.png')}/>
                            <TouchableOpacity disabled style={styles.btnSubmit}>
                                <Text style={styles.title}>{mensagem}</Text>
                            </TouchableOpacity>
                    </View>
            </View>
    )
}

const styles = StyleSheet.create({
card: {
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#fe76a8",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: "100%",
    flex: 0.65, 
    alignItems: 'center'
},
  title:{
    color: '#000',
    fontSize: 25,
  },
  containerLogo:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,
    },
    btnSubmit:{
        marginTop: 30,
        backgroundColor: "#FFE4E1",
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        paddingLeft: 30,
        paddingRight: 30,
      },
});