import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function MeusPasseios() {

   const navigation = useNavigation();

    const [passeiosAtivos, setPasseiosAtivos] = useState([]);

    useEffect(()=>{
        const storage = async() => {
        const idGet = await AsyncStorage.getItem("idUserSession");
          api.get(`/passeios/ativos/meus/${idGet}`).then((response)=>{
            setPasseiosAtivos(response.data);
         }).catch((error)=>{console.log(JSON.stringify(error))})
        }
        storage()
      }, [])
    return (
        <ScrollView>
            <View style={{flex: 0.6}}>
                {passeiosAtivos.map((item, index) => {
                    return(
                        <TouchableOpacity style={styles.card} key={index} onPress={() => navigation.navigate('Informacoes', {idCachorro: item._id})}>
                            <View style={{flex: 1, justifyContent: 'center'}} >
                                <Text style={styles.title}>Nome</Text>
                                <Text style={styles.info}>{item.nomeCachorro}</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center'}} >
                                <Text style={styles.title}>Porte</Text>
                                <Text style={styles.info}>{item.porteCachorro}</Text>
                                </View>
                            <View style={{flex: 1, justifyContent: 'center',}}>
                                <Text style={styles.title}>Tempo</Text>
                                <Text style={styles.info}>{`${item.tempoPasseio} minutos`}</Text>
                            </View>
                    </TouchableOpacity>
                    );
                })}

        
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: '80%',
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  title:{
    color: '#fe76a8',
    fontSize: 17,
    fontWeight: "bold",
    
  },
  info:{
    color: "#000", 
    fontSize: 17
  }
});