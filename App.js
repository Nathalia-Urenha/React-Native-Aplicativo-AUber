import React, {useState} from 'react';
import {Text} from 'react-native'
import Cadastro from './src/pages/cadastro';
import Home from './src/pages/home';
import Inicio from './src/pages/inicio';
import Login from './src/pages/login';
import Chamar from './src/pages/chamar';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './src/pages/perfil';
import Acao from './src/pages/acao';
import Passear from './src/pages/passear';
import informacoes from './src/pages/informacoes';
import Finalizar from './src/pages/finalizar';




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Chamar" component={Chamar} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Acao" component={Acao} />
      <Stack.Screen name="Passear" component={Passear} />
      <Stack.Screen name="Informacoes" component={informacoes} />
      <Stack.Screen name="Finalizar" component={Finalizar} />
    </Stack.Navigator>
  );
}

export default function App(){
    return(
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    ) 
    
  }