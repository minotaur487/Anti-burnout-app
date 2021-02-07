import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BigAloe from './BigAloe';


export default function FirstPage({onPress}) {
    return(
        <View style={styles.container}>
            <BigAloe/>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    Welcome!{'\n'}Let's get you setup!
                </Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        padding: 10,
        fontSize: 30,
        color: 'black',
        alignItems: 'center',
        textAlign: 'center',
    },
  });