import React, {useState, useEffect} from 'react';
import {
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, Animated,
  Pressable,
  AppRegistry

} from 'react-native';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () =>{
    navigation.reset({
      index: 0,
      routes: [{name: "Home"}]
    });
  }
  const cadastrar = () =>{
    navigation.reset({
      index: 0,
      routes: [{name: "Cadastro"}]
    });
  }


  // handleSignClick = aync () => {
  //   if(email != '' && password != ''){

  //     console.log("campos preenchidos");
  //     let res = json = await Api.signIn(email, password);
  //     if(json.token){
  //       alert("Deu certo")

  //     }else{
  //       alert("E-mail e/senha errados!");
  //     }

  //   }else{
  //     alert("Preencha os campos!")
  //   }
  // }


  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const[opacity] = useState(new Animated.Value(0));
 

  useEffect(()=>{
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true 
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true 
      })
    ]).start();
  }, []);

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        source={require('../assets/logo.png')}
        />
        <Text style={styles.title}>AUber</Text>
      </View>
      <Animated.View 
      style={[styles.container,
        {
          opacity: opacity,
          transform: [
            {translateY: offset.y}
          ]
        }
      ]}
      >
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCorrect={false}
        onChangeText={value=>setEmail(value)}
        keyboardType="email-address"
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={value=>setPassword(value)}
        secureTextEntry={true}
        />
        <TouchableOpacity 
        style={styles.btnSubmit}
        onPress={entrar}
        
        >
          <Text style={styles.textSubmit}>Acessar</Text>
        </TouchableOpacity>
        <Pressable onPress={cadastrar}>
          <Text style={{color:"#000"}, {padding:10}}>Criar conta gratuita</Text>
        </Pressable>

      </Animated.View>
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
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    flex:0.8,
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
    fontSize: 50
  }
});