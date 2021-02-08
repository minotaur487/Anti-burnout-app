import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const UserInput = ({input}) => {
    const [m, setM] = useState(input)

    return (
        <View style={styles.rectangle}>
            <TextInput placeholder='put your ideas here' style={styles.input} onChange={text => setM(text)} value={m}></TextInput>
        </View>
    )
}

export default UserInput;

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: 'rgba(88, 182, 131, 0.5)',
        width: 300,
        borderRadius: 20,
        marginBottom: 30
    },
    input: {
        fontSize: 20,
        padding: 20,
    }
})