import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BigAloe from './BigAloe';


export default function LastPage({onPress}) {
    return(
        <View style={styles.container}>
            <BigAloe/>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    done!
                </Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: 'black',
        alignItems: 'center',
    },
  });