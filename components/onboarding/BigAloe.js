import React from 'react';
import { Text,  StyleSheet } from 'react-native';

export default function BigAloe() {
    return(
        <Text style={styles.aloeText}> aloe </Text>
    );
}

const styles = StyleSheet.create({
    aloeText: {
        fontSize: 50,
        lineHeight: 57,
        color: "#000000",
        fontWeight:"bold",
        textAlignVertical: 'center',

        padding: 20,
        width: 250,
        borderRadius: 50,
        backgroundColor: "#58B683",
        margin: 10,
    },
  });