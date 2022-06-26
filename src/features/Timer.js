import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { Buttons } from "./Buttons";

export const Timer = ({ subject, onTimerEnd, clearSubject }) =>{
    useKeepAwake();
    const [startTimer,setStartTimer] = useState(false)
    const [progress,setProgress] = useState(1)
    const [minutes,setMinutes] = useState(0.1)
    const [isReset,setIsReset] = useState(false)
    
    const ONE_SECOND_IN_MS = 1000;
    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      2 * ONE_SECOND_IN_MS,
      3 * ONE_SECOND_IN_MS,
      4 * ONE_SECOND_IN_MS,
      5 * ONE_SECOND_IN_MS
    ];

    const onReset = () => {
        setStartTimer(false)
        setProgress(1)
        setIsReset(true)
    }

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setStartTimer(false);
        setProgress(1);
        reset();
        onTimerEnd(subject)
    }
     
    async function atReset(reset){
        const res=await setIsReset(false);
        //console.log(isReset)
        reset();
    }

    return(
       <View style={styles.container}>   

        <View style={styles.timer}>
            <Countdown minutes={minutes} isPaused={!startTimer} onProgress={setProgress} Reset={isReset} atReset={atReset} onEnd={onEnd}/> 
        </View>

        <View style={styles.text}>
            <Text style={{color:colors.white,fontSize:16,fontWeight:'bold'}}>Focusing on: {subject}</Text>
        </View>

        <View style={styles.progress}>
            <ProgressBar style={{height:8}} color={colors.green} progress={progress} />
        </View>

        <View style={styles.minButtons}>
            <Buttons minutes={setMinutes}/>
        </View>

        <View style={styles.button}>
            {
                startTimer ?
                (
                    <RoundedButton size={125} onPress={() => setStartTimer(false)} title="Pause" />
                ) : 
                (
                    <RoundedButton size={125} onPress={() => setStartTimer(true)} title="Start" />
                )
            }
        </View>

        <View style={styles.footer}>
            <RoundedButton size={50} title="Clear" onPress={()=>clearSubject(null)} />
            <RoundedButton style={{marginLeft: 225}} size={50} title="Reset" onPress={onReset} />
        </View>

       </View>
    ); 
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    timer:{
        flex:0.3,
        justifyContent:'center',
        alignContent:'center',
        padding: 32
    },
    button:{
        flex:0.2,
        flexDirection:'row',
        alignContent:'center',
        padding: 12,
        justifyContent:'center'
    },
    text:{
        flex:0.1,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    progress:{
        paddingVertical: 10
    },
    minButtons:{
        flex:0.3
    },
    footer:{
        marginTop: 16,
        flex: 0.1,
        flexDirection: 'row'
    }
})