import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { colors } from '../utils/colors';

export const WelcomeScreen = ({ home }) => {

    const DATA=[
        {
            Name:"ABC",
            Roll_No:"123",
            branch:"CSE"
        },
        {
            Name:"DEF",
            Roll_No:"456",
            branch:"CSE"
        },
        {
            Name:"GHI",
            Roll_No:"789",
            branch:"CSE"
        },
    ]

    const renderItem = ({item}) => <Text style={styles.listStyle}>{item.Name}{'\t\t\t\t'}{item.Roll_No}{'\t\t\t\t'}{item.branch}</Text>

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Focus Feature App</Text>
            <TouchableOpacity onPress={()=>home(false)} activeOpacity={0.5} style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Start Focusing Now!!</Text>  
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Submitted By:</Text>
                <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center'
    },
    title:{
        flex: 0.4,
        color:colors.grey,
        textAlign:'center',
        marginVertical: 40,
        fontWeight:'bold',
        fontSize:50,
        fontFamily:'serif'
    },
    buttonWrapper:{
        padding: 20,
        backgroundColor:colors.green,
        marginHorizontal: 64,
        borderRadius:20
    },  
    buttonText:{
        color:colors.white,
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily:'sans-serif-medium'
    },
    listContainer:{
        flex: 0.7,
        marginTop: 110 
    },
    listStyle:{
        textAlign:'center',
        color:colors.white,
        fontSize:15
    },
    listTitle:{
        textAlign:'center',
        color:colors.white,
        fontSize:17,
        marginBottom:10
    }
});