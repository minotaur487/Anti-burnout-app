import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import AddItemButton from './AddItemButton';


export default function Page2() {
    return(
        <ScrollView>
          <KeyboardAvoidingView behavior="height" style={styles.container}>
          <View style={styles.container}>  
          <View style={styles.rectangle}>
            <Text style={styles.header}>Level 3</Text>
            <Text style={styles.big}>
              Nothing motivates you to finish the assigned tasks. You have frequent headaches or stomachaches. You have 
              little to no energy.
            </Text>
            <Text style={styles.big}>
              What do you do to take care of yourself in this situation?
            </Text>
          </View>
          <AddItemButton></AddItemButton>
          {/* <View style={styles.brectangle}>
            <Text style={styles.big}>Some Examples</Text>
            <Text style={styles.small}>Difficulty Sleeping</Text>
            <Text style={styles.small}>Headaches</Text>
            <Text style={styles.small}>Lack of Concentration</Text>
          </View> */}
          </View>
          </KeyboardAvoidingView>

        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: 'bold',
    margin: 12,
    marginBottom: 7
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
  },
  brectangle: {
    backgroundColor: 'rgba(160, 215, 245, 0.5)',
    width: 300,
    borderRadius: 20,
    padding: 15,
    margin: 10  
  }
  
});