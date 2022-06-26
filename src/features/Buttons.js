import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Buttons = ({ minutes }) =>{

    return(
        <View style={styles.container}>
            <RoundedButton style={styles.button} size={70} title={10} onPress={( )=>{ minutes(10) }} />
            <RoundedButton style={styles.button} size={70} title={15} onPress={( )=>{ minutes(15) }} />
            <RoundedButton style={styles.button} size={70} title={20} onPress={( )=>{ minutes(20) }} />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 40,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    button:{
        marginHorizontal: 20
    }
});