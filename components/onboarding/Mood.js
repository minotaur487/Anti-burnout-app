import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import NumberField from './input';

export default function Page1() {
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>        
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <Text style={styles.test}>
                How would you evaluate your average mood on a scale of 1-10, with 1 being an existential crisis and 10 being an
                'on-cloud-9' day? If you're calm most of the time, please input 7.
            </Text>
            {/* <Text style={styles.test}>

            </Text> */}
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