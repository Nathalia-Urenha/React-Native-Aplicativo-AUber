import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function Chama() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Chamar" component={Chamar} />
    </Stack.Navigator>
  );
}

export default function ChamarRoute(){
    return(
      <NavigationContainer>
        <Chama />
      </NavigationContainer>
    ) 
    
  }