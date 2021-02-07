import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertBox from './AlertBox';
import PastAlert from './PastAlert';

export default function MCentre() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Message Centre</Text>
      <AlertBox alert="Alert Level 1" date="feb 6" content="This is an alert"></AlertBox>  
      <Text style={styles.smallheader}>Past Messages</Text>
      <PastAlert alert="Alert Level 2" date="feb 5"></PastAlert>
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
  header: {
    margin: 12,
    fontSize: 30,
    fontWeight: "700"
  },
  smallheader: {
    fontSize: 25,
    fontWeight: "600" ,
    margin: 12
  }
});