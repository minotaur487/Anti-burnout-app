import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PlanLevel from './planLevel';
import PlanCenter from './planCenter';
import PlanContact from './planContact';
import { useNavigation } from '@react-navigation/native';


export default function Plan(){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Detail!"
        onPress={()=>navigation.navigate('DetailTester')}
      />
      <PlanCenter mission=''/>
      <Text style={styles.headers}>Contacts: </Text>
      <Text style={styles.subtitle}> Here's your reminder to reconnect with people you trust! </Text>
      <PlanContact name='therapist'/>
      <PlanContact name='friend'/>

      <Text style={styles.headers}>Reminders: </Text>
      <PlanLevel level='1' plan = 'You’re starting to feel a little bit of stress, maybe some oncoming headaches...? More scenarios here'/>
      <PlanLevel level='2' plan = 'You’re starting to feel a little bit of stress, maybe some oncoming headaches...? More scenarios here'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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