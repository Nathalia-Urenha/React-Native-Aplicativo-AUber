import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Valores() {

    const [valor, setValor] = useState("");

    useEffect(()=>{
        const storage = async() => {
        const idGet = await AsyncStorage.getItem("idUserSession");
          api.get(`/passeios/ativos/meus/${idGet}`).then((response)=>{
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

   

    return (
            <View style={styles.card}>
                    <View style={styles.containerLogo}>
                        <Text style={styles.title}>Valor Total</Text>
                        <TouchableOpacity disabled style={styles.btnSubmit}>
                            <Text style={styles.textSubmit}>{valor}</Text>
                        </TouchableOpacity>
                        <Text style={styles.texto}>Receba o pagamento do Tutor</Text>
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
    alignItems: 'center',
   
},
  title:{
    color: '#000',
    fontSize: 25,
    marginTop: 20
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
      texto:{
        color: "#000",
        fontSize: 15,
        padding: 20,
        marginTop: 20
       
      },
      textSubmit:{
        color:"#000",
        fontSize: 18
      },
});