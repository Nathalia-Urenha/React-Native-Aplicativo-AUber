import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native'
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator  screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if(route.name === 'Home'){
          iconName = 'ios-home';
        }
        else if(route.name == 'Perfil'){
          iconName = 'md-person';
        }
        return <Ionicons name={iconName} size={size} color = {color} />
      },
      headerShown: false 
    })}
    tabBarOptions={{
      activeTintColor: '#D13ABD',
      inactiveTintColor: '#777',
      showLabel: false,
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Acao" component={Acao} options={() => ({
						tabBarIcon: ({tintColor}) => (
							<View>
								<LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#EEBD89', '#D13ABD']}>
									<Text style={{fontSize: 30, color: "#fff"}}>+</Text>
								</LinearGradient>
							</View>
						),
					})} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  )
      
}

function MyStack(){
  return(
    <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Chamar" component={Chamar} />
          <Stack.Screen name="Perfil" component={MyTabs} />
          <Stack.Screen name="Acao" component={MyTabs} />
          <Stack.Screen name="Passear" component={Passear} />
          <Stack.Screen name="Informacoes" component={informacoes} />
          <Stack.Screen name="Finalizar" component={Finalizar} />
        </Stack.Navigator>
        

  )
}



export default function App(){
    return(
      <NavigationContainer>
       <MyStack />
      </NavigationContainer>
     
    ) 
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconTabRound: {
          width: 60,
          height: 60,
          borderRadius: 30,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 6,
          shadowColor: '#9C27B0',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
      }
  });
