import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


// Use this header for any onboarding or navigation views 
// it has the logo and a button to navigate, set the onPress and label accordingly
export default function Header({onPress, buttonLabel}) {
    return(
        <View style={styles.container}>
            <View style={styles.aloeContainer}>
                <Text style={styles.aloeText}> aloe </Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {buttonLabel}
                </Text>
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 20,
        height: 'auto',
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingBottom: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
    },
    aloeText: {
        fontSize: 30,
        lineHeight: 40,
        color: "#000000",
        fontWeight:"bold",
        textAlignVertical: 'center',
    },
    aloeContainer: {
        alignItems: 'flex-start',
        padding: 5,
        width: 120,
        borderRadius: 50,
        backgroundColor: "#58B683",
    },
  });