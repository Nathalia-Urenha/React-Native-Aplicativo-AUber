import React, {useState, useEffect} from "react";
import {
    KeyboardAvoidingView,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet, 
    Image, 
    Pressable,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


import api from "../services/api";

export default function informacoes({navigation, route}){

    const {idCachorro} = route.params;  
    const [estadoBotao, setEstadoBotao] = useState("");

    const home = () =>{
        navigation.reset({
        index: 0,
        routes: [{name: "Home"}]
        });
    }

    const [information, setInformation] = useState({"infoDono": {"__v": 0, "_id": "", "bairro": "", "cep": "", "email": "", "localidade": "", "logradouro": "", "nome": "", "numero": 0, "password": "", "uf": ""}, "infoPasseio": {"__v": 0, "_id": "", "donoCachorro": "", "nomeCachorro": "", "porteCachorro": "", "tempoPasseio": 0, "status": 0}});
    const [infoStatus, setInfoStatus] = useState(0);

    useEffect(()=>{
      const storage = async() => {
        api.get(`/passeios/ativos/${idCachorro}`).then((response)=>{
            setInformation(response.data);
            setInfoStatus(response.data.infoPasseio.status)
            if(Number(response.data.infoPasseio.status) === 0) {
                setEstadoBotao("Aceitar")
            } if(Number(response.data.infoPasseio.status) === 1) {
                setEstadoBotao("Cheguei")
            } else if(Number(response.data.infoPasseio.status) === 2) {
                setEstadoBotao("Finalizar")
            } else if(Number(response.data.infoPasseio.status) >= 3) {
                setEstadoBotao("Finalizado");
            }
            else {
                console.log("JOSE")
            }
       }).catch((error)=>{console.log(JSON.stringify(error))})
      }
      storage()
    }, [])

    const atualizarPasseador = async() => {
        const idGet = await AsyncStorage.getItem("idUserSession");
        const dados = {
            "passeador": idGet,
            "status": (Number(infoStatus) + 1)
        }
    api.put(`/passeios/${information.infoPasseio._id}`, dados).then((response)=>{
            setInfoStatus(response.data.status)
            if(Number(response.data.status) === 1) {
                setEstadoBotao("Cheguei")
            } else if(Number(response.data.status) === 2) {
                setEstadoBotao("Finalizar")
            } else if(Number(response.data.status) >= 3) {
                setEstadoBotao("Finalizado");
                navigation.navigate("Finalizar");
            }
       }).catch((error)=>{console.log(JSON.stringify(error))})
      }


    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                    <Image 
                    source={require('../assets/pet.png')}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Informações do Pet</Text>
                <TextInput
                    style={styles.input}
                    value={information.infoPasseio.nomeCachorro} // nome do cachorro
                />
                 <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Porte"
                          value={information.infoPasseio.porteCachorro}
                    />
                  </View>
                  
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="Tempo"
                          autoCorrect={false}
                          value={`${JSON.stringify(information.infoPasseio.tempoPasseio)} minutos`}
                      />
                  </View>
                </View>
               
                <Text style={styles.title}>Informações do Dono</Text>
                <TextInput
                    style={styles.input}
                    value={information.infoDono.nome} // nome do cachorro
                />
                <View style={{flexDirection:"row"}}>
                    <TextInput
                        style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                        placeholder="Logradouro"
                        autoCorrect={false}
                        value={information.infoDono.logradouro}
                    />
                </View>
              
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:0.3}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Numero"
                          value={`${JSON.stringify(information.infoDono.numero)}`}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="Bairro"
                          autoCorrect={false}
                          value={information.infoDono.bairro}
                      />
                  </View>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Cidade"
                          autoCorrect={false}
                          value={information.infoDono.localidade}
                      />
                  </View>
                </View>
                <TouchableOpacity 
                style={styles.btnSubmit}
                onPress={atualizarPasseador}
                disabled={(estadoBotao === "Finalizado" ? true : false)}
                >
                    <Text style={styles.textSubmit}>{estadoBotao}</Text>
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
      justifyContent: 'flex-start',
      backgroundColor: '#FFE4E1'
    },
    container:{
      flex:1.3,
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
       paddingBottom: 5,
       padding: 5
    },
    containerLogo:{
        flex:0.3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      texto:{
        color: "#000",
        fontSize: 15,
        padding: 10
      }
  });