import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { TextInput } from 'react-native-paper';

export const Buttons = ({ minutes }) =>{
    const [isCustom,setIsCustom] = useState(false)
    const [getCustomTime,setGetCustomTime] = useState(0.1)

    var time=0.1

    const customTime = () => {
        setIsCustom(true)
    }

    const addedCustomTime = () => {
        setIsCustom(false)
        minutes(getCustomTime)
    }

    const onchange = (text) => {
        for(var i=0;i<text.length;i++)
        {   
            if(text.match(/[^0-9]/g))
            {
                time=0.111
                break;
            }
            else{
                time=text
            }
        }
        setGetCustomTime(time)
    }

    return(
        <View style={styles.container}>
            {
            isCustom?
            (
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} keyboardType='numeric' label="Add time" onChangeText={onchange} />
                    <View style={styles.doneWrapper}>
                        <RoundedButton title="Done" size={60} onPress={addedCustomTime} />
                    </View>
                </View>
            ):
            ( 
                <View style={styles.buttonWrapper}>
                    <RoundedButton style={styles.button} size={60} title={10} onPress={( )=>{ minutes(10) }} />
                    <RoundedButton style={styles.button} size={60} title={15} onPress={( )=>{ minutes(15) }} />
                    <RoundedButton style={styles.button} size={60} title={20} onPress={( )=>{ minutes(20) }} />
                    <RoundedButton style={styles.button} size={60} title="+" onPress={customTime} />
                </View>
            )
            }
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
        marginHorizontal: 10
    },
    buttonWrapper:{
        flexDirection:'row'
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
        flexDirection:'row'
    },
    input:{
        flex: 0.8,
        marginVertical:20
    },
    doneWrapper:{
        justifyContent: 'center',
        alignContent:'center',
        marginLeft:20
    }
});
