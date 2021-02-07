import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

const InputField = () => {
    const [value, onChangeText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={text => onChangeText(text)} style={styles.input} textAlign={'center'}></TextInput> 
            <Text>tap to input</Text>
        </View>
    );
}

export default InputField;

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: 100,
        //height: 50,
        fontSize: 50,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});