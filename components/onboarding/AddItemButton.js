import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import UserInput from './UserInput';

const AddItemButton = () => {
    const [items, setItems] = useState(["",""]);

    return (
        <View>
            <Button title="Add Item" onPress={addInput}></Button>
            {items.forEach((element) => (
                <UserInput input={element}/>
            ))}
        </View>
    )
}

export default AddItemButton;
