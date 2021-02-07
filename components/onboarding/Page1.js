import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Page1() {
    return(
        <View style={styles.container}>
            <Text style={styles.test}>All onboardddd!</Text>
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