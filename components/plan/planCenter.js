import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';


export default function PlanCenter({mission}) {
    const [m, setM] = React.useState(mission);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Your Center:</Text>
      <TextInput 
        style={styles.description}
        onChangeText={text => setM(text)}
        value={m=='' ? 'Write down something that motivates you here!' : m}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 25,
    padding: 15,
    textAlign: 'center',
  }
});

PlanCenter.propTypes = {
    mission: PropTypes.string.isRequired,
}