import React from 'react';
import {Text} from 'react-native'
import Cadastro from './src/pages/cadastro';
import Home from './src/pages/home';
import Inicio from './src/pages/inicio';
import Login from './src/pages/login';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


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