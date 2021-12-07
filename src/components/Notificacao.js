import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import Valores from './valores';


export default function Notificacao() {

    const [mensagem, setMensagem] = useState("Bem-Vindo!");
    
    const [valor, setValor] = useState("");
    const [pagamento, setPagamento] = useState("");
    const [paguei, setPaguei] = useState("");
    
    const [id, setId] = useState(null)

    //aq tem q ser o id do passeio 
    const atualizarStatus = async() => {
        
        const dados = {
            "status": 4
        }
        api.put(`/passeios/${id}`, dados).then((response)=>{
            
            setMensagem("Bem-Vindo!")
            setPagamento("")
            setPaguei("")
            
        }).catch((error)=>{console.log(JSON.stringify(error))})
    }


    useEffect(()=>{
        const storage = async() => {

            const idGet = await AsyncStorage.getItem("idUserSession");

            api.get(`/passeios/ativos/dono/${idGet}`).then((response)=>{
            const statusAtual = (response.data[Number((response.data).length) - 1].status)
            const tempo = (response.data[Number((response.data).length) - 1].tempoPasseio)
            setId(response.data[Number((response.data).length) - 1]._id)
            if (Number(statusAtual) === 0) {
                setMensagem("Bem-Vindo!")
            } else if (Number(statusAtual) === 1) {
                setMensagem("A caminho!")
            } else if (Number(statusAtual) === 2) {
                setMensagem("Cheguei!")
            } else if (Number(statusAtual) === 3) {
                setPagamento("Realize o Pagamento")
                setPaguei("Paguei")
                if(Number(tempo) === 15){
                    setMensagem("   R$15,00   ")
                } 
                else if(Number(tempo) === 30){
                    setMensagem("   R$30,00   ");
                } 
                else if(Number(tempo) === 60){
                    setMensagem("   R$60,00   ");
                }
                   
            } else if (Number(statusAtual) === 4) {
                setMensagem("Bem-Vindo!")
                setPagamento("")
                setPaguei("")
            }
            else {
                console.log("Jose")
            }
        }).catch((error)=>{console.log(JSON.stringify(error))})
        }
        storage()
    }, [])

    return (
            <View>
                <View style={styles.card}>
                    <View style={styles.containerLogo}>
                            <Image 
                            source={require('../assets/pet.png')}/>
                            <Text style={styles.title}>{pagamento}</Text>
                            <TouchableOpacity disabled style={styles.btnSubmit}>
                                <Text style={styles.title}>{mensagem}</Text>
                            </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnPagar} onPress={atualizarStatus}>
                    <Text style={styles.title}>{paguei}</Text>
                </TouchableOpacity>
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
    flex: 0.85, 
    alignItems: 'center',
    
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
      btnPagar:{
        marginTop: 30,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        paddingLeft: 30,
        paddingRight: 30,
      },
});