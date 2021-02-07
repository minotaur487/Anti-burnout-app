import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Page2() {
    return(
        <View style={styles.container}>
            <Text style={styles.test}>Another Page!</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    test: {
      fontSize: 40,
      color: '#000000',
    }
  
  });