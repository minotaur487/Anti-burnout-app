import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserInput = ({input}) => {
    return (
        <View style={styles.rectangle}>
            <TextInput placeholder='put your ideas here' style={styles.input}></TextInput>
        </View>
    )
}

export default UserInput;

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: 'rgba(88, 182, 131, 0.5)',
        width: 350,
        borderRadius: 20
    },
    input: {
        fontSize: 20,
        padding: 20
    }
})