import React from 'react';
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