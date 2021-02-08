import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AddItemButton from './AddItemButton';


export default function Page1() {
    return(
        <ScrollView>
          <View style={styles.container}>  
          <View style={styles.rectangle}>
            <Text style={styles.big}> What indicators do you think appear when you are feeling stressed? Please add as many as you like.
            </Text>
          </View>
          <AddItemButton></AddItemButton>
          <View style={styles.brectangle}>
            <Text style={styles.big}>Some Examples</Text>
            <Text style={styles.small}>Difficulty Sleeping</Text>
            <Text style={styles.small}>Headaches</Text>
            <Text style={styles.small}>Lack of Concentration</Text>
          </View>
          </View>

        </ScrollView>
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
  },
  brectangle: {
    backgroundColor: 'rgba(160, 215, 245, 0.5)',
    width: 300,
    borderRadius: 20,
    padding: 15,
    margin: 10  
  }
  
});