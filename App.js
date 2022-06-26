import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory'
import { WelcomeScreen } from './src/features/WelcomeScreen';

export default function App() {
  const [currSubject,setCurrSubject] = useState(null)
  const [history,setHistory]=useState([])
  const [isHome,setIsHome] = useState(true)   

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#000' />
      {
        isHome?
        (
          <WelcomeScreen home={setIsHome}/>
        ):
        (
          <>
            { 
              !currSubject ?  
              ( 
              <>
                <Focus newSubject={setCurrSubject} />   
                <FocusHistory history={history} SetHistory={()=> setHistory([])}/>
              </>  
              ) :
              (
                <Timer subject={currSubject} onTimerEnd={(subject) => {setHistory([...history,subject])}} clearSubject={setCurrSubject} />
              )
            }    
          </>
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.blue,
  }
});
