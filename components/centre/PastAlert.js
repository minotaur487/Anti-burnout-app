import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PastAlert = props => {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
            <Text style={styles.header}>{props.alert}</Text>
            <Text style={styles.date}>{props.date}</Text>
            </View>
            {/* <StatusBar></StatusBar> */}
        </View>
    )
}

export default PastAlert;

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
    rectangle: {
        marginTop: 20,
        width: 350,
        //height: 120,
        backgroundColor: "rgba(251, 203, 203, 0.5)",
        borderRadius: 20
    }
})