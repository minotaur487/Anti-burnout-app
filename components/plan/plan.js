import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import PlanLevel from './planLevel';
import PlanCenter from './planCenter';
import PlanContact from './planContact';


export default function Plan(){
  return (
    <ScrollView>
      <View style={styles.container}>
        <PlanCenter mission=''/>
        <Text style={styles.headers}>Contacts: </Text>
        <Text style={styles.subtitle}> Here's your reminder to reconnect with people you trust! </Text>
        <PlanContact name='therapist'/>
        <PlanContact name='friend'/>
        <Text style={styles.headers}>Reminders: </Text>
        <PlanLevel level='1' plan = 'You’re starting to feel a little bit of stress, maybe some oncoming headaches...? More scenarios here'/>
        <PlanLevel level='2' plan = 'You’re starting to feel a little bit of stress, maybe some oncoming headaches...? More scenarios here'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  headers: {
    fontSize: 25,
    paddingLeft: 25,
    paddingTop: 15,
    fontWeight: 'bold',
    alignSelf:'flex-start',
  },
  subtitle: {
    fontSize: 18,
    padding: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});