import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// make sure to input the useNavigation hook, in the detail and host view
import { useNavigation } from '@react-navigation/native';


// use the hook in the detailView to goBack
// use the hook in the base view to navigation.navigate('detailLabel')

// MAKE SURE NOT TO NAVIGATE DIRECTLY TO OR ADD THE BASE VIEW TO THE APP.JS PAGE!
// THIS WILL MESS UP THE NAVIGATION OF THE HOME VIEW
export default function detailTester() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>I'm a detail view!</Text>
      <Button
        title="I'm done now"
        onPress={()=>navigation.goBack()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});