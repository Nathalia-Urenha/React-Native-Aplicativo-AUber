import React, { useState, useEffect } from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';



import api from "../services/api";

export default function perfil({ navigation }) {

  const home = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }]
    });
  }

  const Logout = async () => {

    await AsyncStorage.removeItem("idUserSession")

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    });
  }

  const [showAlert, setShowAlert] = useState(false)

  const [usuarios, setUsuarios] = useState([]);

  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [cep, setCep] = useState(null)
  const [Logradouro, setLogradouro] = useState(null)
  const [Numero, setNumero] = useState(0)
  const [Bairro, setBairro] = useState(null)
  const [Localidade, setLocalidade] = useState(null)
  const [UF, setUF] = useState(null)

  const atualizar = async () => {
    const idGet = await AsyncStorage.getItem("idUserSession");

    const dados = {
      "nome": nome,
      "email": email,
      "password": password,
      "cep": cep,
      "logradouro": Logradouro,
      "numero": Numero,
      "bairro": Bairro,
      "localidade": Localidade,
      "uf": UF

    }

    api.put(`/usuarios/${idGet}`, dados).then((response) => {
      setUsuarios(response.data);
      console.log(response.data);
      setShowAlert(true)
    }).catch((error) => { console.log(JSON.stringify(error)) })
  }

  useEffect(() => {
    const storage = async () => {
      const idGet = await AsyncStorage.getItem("idUserSession");

      api.get(`/usuarios/${idGet}`).then((response) => {
        setUsuarios(response.data);
        setNome(response.data.nome)
        setEmail(response.data.email)
        setPassword(response.data.password)
        setCep(response.data.cep)
        setLogradouro(response.data.logradouro)
        setNumero(response.data.numero)
        setBairro(response.data.bairro)
        setLocalidade(response.data.localidade)
        setUF(response.data.uf)
      }).catch((error) => { console.log(JSON.stringify(error)) })
    }
    storage()
  }, [])


  return (
    <KeyboardAvoidingView style={styles.background}>
       <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Eba!"
          message="Perfil atualizado com sucesso!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Entendi"
          confirmButtonColor="#fe76a8"
          onConfirmPressed={() => setShowAlert(false)}
          
        />
      <View style={styles.containerLogo}>
        <Text style={styles.title}>Perfil</Text>
        <Image
          source={require('../assets/pet.png')} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={value => setNome(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          value={email}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <TextInput
              style={[styles.input, { justifyContent: 'flex-start', },]}
              placeholder="Cep"
              keyboardType='number-pad'
              autoCorrect={false}
              value={cep}
              onChangeText={value => setCep(value)}

            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[styles.input, { justifyContent: 'flex-end', }, { marginLeft: 5 }]}
              placeholder="Logradouro"
              autoCorrect={false}
              value={Logradouro}
              onChangeText={value => setLogradouro(value)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.3 }}>
            <TextInput
              style={[styles.input, { justifyContent: 'flex-start', },]}
              placeholder="Numero"
              autoCorrect={false}
              value={JSON.stringify(Numero)}
              onChangeText={value => setNumero(value)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[styles.input, { justifyContent: 'flex-end', }, { marginLeft: 5 }]}
              placeholder="Bairro"
              autoCorrect={false}
              value={Bairro}
              onChangeText={value => setBairro(value)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={[styles.input, { justifyContent: 'flex-start', },]}
              placeholder="Cidade"
              autoCorrect={false}
              value={Localidade}
              onChangeText={value => setLocalidade(value)}
            />
          </View>
          <View style={{ flex: 0.2 }}>
            <TextInput
              style={[styles.input, { justifyContent: 'flex-end', }, { marginLeft: 5 }]}
              placeholder="UF"
              autoCorrect={false}
              value={UF}
              onChangeText={value => setUF(value)}

            />
          </View>
        </View>
        <TouchableOpacity style={styles.btnSubmit} onPress={atualizar}>
                <Text style={styles.textSubmit}>Atualizar Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRegister} onPress={Logout}>
                <Text  style={styles.textRegister}>Logout </Text>
            </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFE4E1'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: "#fe76a8",
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textSubmit: {
    color: "#fff",
    fontSize: 18
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
  title: {
    color: '#fe76a8',
    fontSize: 25,
    paddingBottom: 30,
    padding: 30
  },
  containerLogo: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: "#000",
    fontSize: 15,
    padding: 20
  },

});