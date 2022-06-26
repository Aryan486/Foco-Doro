import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history, SetHistory }) => {

    const renderItem = ({item}) => <Text style={styles.historyList}>- {item}</Text>

    const clear = () => {
        SetHistory()
    }

    if(!history.length) 
    return (
        <View style={styles.container}>
            <Text style={{color:colors.white,textAlign:'center',fontWeight:'bold'}}>Previously focused on:</Text>
            <Text style={styles.historyList}>No item focused on!</Text>
        </View>
    )

    return(
        <View style={styles.container}>
            <Text style={{color:colors.white,textAlign:'center',fontWeight:'bold'}}>Previously focused on:</Text>
            <FlatList 
            data={history}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.buttonWrapper}>
                <RoundedButton size={50} title="Clear" onPress={clear}/>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:60,
    },
    historyList:{
        marginTop:5,
        textAlign:'center',
        color:colors.white,
    },
    buttonWrapper:{
        flex: 0.6,
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row'
    }
});