import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState, setState} from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import UserInput from './UserInput';

const AddItemButton = () => {
    

    
    return (
        <View>
            
            <Button title="Add Item" onPress={addInput}></Button>
        </View>
    )
}

export default AddItemButton;

// export default class App extends Component
// {
//     constructor()
//     {
//         super();

//         this.state = { valueArray: [], disabled: false }

//         this.index = 0;

//         this.animatedValue = new Animated.Value(0);
//     }

//     addMore = () =>
//     {
//         // Code to add new values in array and perform animation.  
//     }

//     render()
//     {
//         // Set design
//     }
// }