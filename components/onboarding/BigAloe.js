import React from 'react';
import { Text,  StyleSheet, View } from 'react-native';

export default function BigAloe() {
    return(
        <View style={styles.aloeContainer}>
            <Text style={styles.aloeText}> aloe </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    aloeText: {
        fontSize: 50,
        lineHeight: 57,
        color: "#000000",
        fontWeight:"bold",
        textAlignVertical: 'center',
    },
    aloeContainer: {
        padding: 20,
        width: 250,
        borderRadius: 50,
        backgroundColor: "#58B683",
        margin: 10,
    },
  });