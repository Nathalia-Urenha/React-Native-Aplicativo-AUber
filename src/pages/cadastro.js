import React, {useState} from "react";
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

  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [cep, setCep] = useState(null)
  const [Logradouro, setLogradouro] = useState(null)
  const [Numero, setNumero] = useState(null)
  const [Bairro, setBairro] = useState(null)
  const [Localidade, setLocalidade] = useState(null)
  const [UF, setUF] = useState(null)

  async function chamarCep(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let req = await fetch(url);
    let res = await req.json();
    console.log(res);

    setBairro(res.bairro);
    setLocalidade(res.localidade);
    setLogradouro(res.logradouro);
    setUF(res.uf)
    setCep(res.cep)
  }


  dados = {
    nome: nome,
    email: email,
    password: password,
  }

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
                    onChangeText={value=>setNome(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCorrect={false}
                    onChangeText={value=>setEmail(value)}
                    keyboardType="email-address"
                />
                 <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Cep"
                          keyboardType='number-pad'
                          autoCorrect={false}
                          onChangeText={value=>{
                              if(value.length == 8){
                                chamarCep(value);
                              }
                            }
                          }

                      />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="Logradouro"
                          autoCorrect={false}
                          value={Logradouro}
                      />
                  </View>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Numero"
                          autoCorrect={false}
                          onChangeText={value=>setNumero(value)}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="Bairro"
                          autoCorrect={false}
                          value={Bairro}
                      />
                  </View>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-start',},]}
                          placeholder="Cidade"
                          autoCorrect={false}
                          value={Localidade}
                      />
                  </View>
                  <View style={{flex:1}}>
                    <TextInput
                          style={[styles.input, {justifyContent: 'flex-end',}, {marginLeft: 5}]}
                          placeholder="UF"
                          autoCorrect={false}
                          value={UF}
                          
                      />
                  </View>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={value=>setPassword(value)}
                />
                <TouchableOpacity 
                style={styles.btnSubmit}
                //enviar pra api e mudar pra tela de login - perguntar pro igor como faz 
                onPress={() => {
                  fetch('https://reqres.in/api/posts', dados).then( (resposta) => console.log(resposta))}
                }
                >
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