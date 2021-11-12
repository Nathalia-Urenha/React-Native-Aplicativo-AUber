import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import FabButton from "../components/FabButton";

export default function Home(){
    return(
        <View style={styles.container}>
            <FabButton 
                style={{bottom: 80, right: 60}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
})