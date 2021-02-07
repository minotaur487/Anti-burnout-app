import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Page1() {
    return(
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.big}>For the following questions, please be as honest and realistic as possible. Remember, 
              we are here to help you help yourself.
            </Text>
          </View>
          <View style={styles.rectangle}>
            <Text style={styles.small}>This is not a substitute for medical help or a therapist. If you are dealing with serious
              mental health issues, we recommend reaching out to medical care providers.
            </Text>
          </View>

          <Text style={styles.small}>Phone lines/resources</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big: {
    fontSize: 20,
    color: '#000000',
    marginTop: 20,
    marginBottom: 20
  },
  rectangle: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    width: 300,
    borderRadius: 20,
    padding: 15,
    margin: 10
  },
  small: {
    fontSize: 15,
    color: '#000000',
    marginTop: 10,
    marginBottom: 10
  }
  
});