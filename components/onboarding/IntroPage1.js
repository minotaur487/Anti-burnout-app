import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Page1() {
    return(
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.test}>When life gets stressful, we want to help you predict and protect yourself</Text>
          </View>
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
    fontSize: 20,
    color: '#000000',
    marginTop: 20,
    marginBottom: 20
  },
  rectangle: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    width: 300,
    borderRadius: 20,
    padding: 15
  }
  
});