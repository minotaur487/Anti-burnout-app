import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import NumberField from './input';

export default function Page1() {
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>        
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.test}>Sleep is important. Too much or too little can be indicators of stress.
                How much sleep are you getting on average each night?</Text>
          </View>
          <NumberField/>
        </View>
        </KeyboardAvoidingView>

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
    padding: 15,
    marginBottom: 45
  }
  
});