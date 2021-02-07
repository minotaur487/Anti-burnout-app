import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import UserInput from './UserInput';

const AddItemButton = () => {
    const [items, setItems] = useState([]);

    const addInput = () => {
        setItems([...items, ""]);
    }

    return (
        <View>
            <Button title="Add Item" onPress={addInput} ></Button>
            {items.map((element) => (
                <UserInput input={element} style={styles.input}/>
            ))}
        </View>
    )
}

export default AddItemButton;

const styles = StyleSheet.create({
    input: {
        marginBottom: 30
    }
})