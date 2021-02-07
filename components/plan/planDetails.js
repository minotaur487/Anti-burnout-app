import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';

export default function PlanDetails() {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <Header buttonLabel="back" onPress={() => {navigation.goBack()}}/>
            <Text style={styles.test}>So here's the plan!</Text>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    test: {
      fontSize: 40,
      color: '#000000',
      textAlign: 'center',
    }
  
  });