import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


export default function PlanLevel({level, plan}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LEVEL {level}</Text>
      <Text style={styles.description}> {plan} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#DEDEDE',
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    padding: 10,
  }
});

PlanLevel.propTypes = {
    level: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
}