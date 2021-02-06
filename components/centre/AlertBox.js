import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const AlertBox = props => {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
            <Text style={styles.header}>{props.alert}</Text>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.content}>{props.content}</Text>
            </View>
            {/* <StatusBar></StatusBar> */}
        </View>
    )
}

export default AlertBox;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: 'bold',
        margin: 12,
        marginBottom: 7
    },
    date: {
        fontSize: 18,
        textTransform: "lowercase",
        marginLeft: 12,
        marginBottom: 10
    },
    content: {
        fontSize: 20,
        marginLeft: 12,
        marginBottom: 12,
        marginRight: 12
    },
    rectangle: {
        marginTop: 20,
        width: 350,
        //height: 120,
        backgroundColor: '#FBCBCB',
        borderRadius: 20
    }
})