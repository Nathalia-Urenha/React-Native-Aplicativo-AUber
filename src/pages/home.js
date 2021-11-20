import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FabButton from "../components/FabButton";

export default function Home({navigation}){
    const chamar =  () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Chamar"}]
        });
    }

    return(
        <View style={styles.container}>
            <FabButton 
                style={{bottom: 80, right: 60}}
                
            />
            <TouchableOpacity onPress={chamar}>
                <Text>Chamar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFE4E1',
    }
})