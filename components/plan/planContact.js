import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


export default function PlanContact({name}) {
 
  return (
    <View style={styles.container}>
        <Text style={styles.description}>{name} </Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    borderRadius: 20,
    width: 350,
    backgroundColor: 'rgba(88, 182, 131, 0.5)',
    marginTop: 10,
  },
  description: {
    fontSize: 25,
    padding: 15,
    textAlign: 'center',
  }
});

PlanContact.propTypes = {
    name: PropTypes.string.isRequired,
}