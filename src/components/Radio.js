import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const Radio = ({options = [], horizontal=false, onChangeSelect, selected}) => {
    return(
        <View>
            {
                options.map((opt, index)=>(
                    <TouchableOpacity
                    key={index}
                    onPress={()=>onChangeSelect(opt, index)}
                    style={styles.optContainer}
                    >
                        <View style={styles.outlineCircle}>
                            {selected == index && <View style={styles.innerCircle}/>  }                      
                        </View>
                        <Text style={[styles.txt, {color:selected == index ?'#444' : '#777'}]}>{opt}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    optContainer:{
        flexDirection:'row',
        alignItems: 'center'
    },
    outlineCircle:{
        width:20,
        height:20,
        borderRadius:10,
        borderColor: "#777",
        borderWidth: 2,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 3

    },
    innerCircle:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor: "#444",
    },
    txt:{
        fontSize:17,
        marginLeft: 7,
    }
    
})

export default Radio;