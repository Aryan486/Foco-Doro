import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { colors } from '../utils/colors';

export const WelcomeScreen = ({ home }) => {

    const header=[
        'Name', 'Roll No'
    ]

    const DATA=[
        [
            "Viplav Shrungare", "101917197"
        ],
        [
            "Divyanshu Jain", "102097010"
        ],
        [
            "Harneet Kaur", "101917189"
        ],
        [
            "Dhruv", "101903446"
        ],
        [
            "Sourav", "101917208"
        ],
        [
            "Aryan Bhardwaj", "101917195"
        ]        
    ]

    //const renderItem = ({item}) => <Text style={styles.listStyle}>{item.Name}{'\t\t\t\t'}{item.Roll_No}{'\t\t\t\t'}{item.branch}</Text>

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Foco-Doro</Text>
            <TouchableOpacity onPress={()=>home(false)} activeOpacity={0.5} style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Start Now!!</Text>  
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <Text style={styles.tableTitle}>Submitted By:</Text>
                {/*<FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                />*/}
                <Table borderStyle={{borderWidth: 1, borderColor: colors.white}} >
                    <Row data={header} textStyle={styles.tableHeader} />
                    <Rows data={DATA} textStyle={styles.tableData} /> 
                </Table>  
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
        flex: 0.3,
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
        marginTop: 100
    },
    tableTitle:{
        textAlign:'center',
        color:colors.white,
        fontSize:17,
        marginBottom:10
    },
    tableHeader:{
        fontSize:16,
        color:colors.white,
        fontWeight:'bold',
        textAlign:'center'
    },
    tableData:{
        color:colors.white,
        textAlign:'center'
    },  
    
});