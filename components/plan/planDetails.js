import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';

export default function PlanDetails() {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex:1}}>
            <Header buttonLabel="back" onPress={() => {navigation.goBack()}}/>
          <View style={styles.container}>
            <Text style={styles.header}>Level 1</Text>
            <Button style={styles.actionButton} title="Add Item" onPress={()=> true} ></Button>            
            <View style={styles.actionCard}>
              <Text style={styles.actionText}> go for a walk </Text>
            </View>
            <View style={styles.actionCard}>
              <Text style={styles.actionText}> drink a coffee </Text>
            </View>
            <View style={styles.actionCard}>
              <Text style={styles.actionText}> take a nap </Text>
            </View>
          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 40,
      color: '#000000',
      textAlign: 'left',
    },
    actionCard: {
      backgroundColor: 'rgba(88, 182, 131, 0.5)',
      borderRadius: 20,
      padding: 20,
      marginTop: 10,
    },
    actionText: {
      fontSize: 20,
    },
  });