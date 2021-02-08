import {StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
//import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

const AlertBox = props => {

    const [visible, setVisible] = useState(false);

    const setOverlay = () => {
        setVisible(!visible);
    }

    return (
        <View style={styles.container}>
            <View style={styles.rectangle}>
            <Text style={styles.header}>{props.alert}</Text>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.content}>{props.content}</Text>
            <Button title="Click for Plan" onPress={setOverlay}/>
            </View>
            <Overlay isVisible={visible} onBackdropPress={setOverlay}>
                <Text>Your Plan</Text>
                <View style={styles.grectangle}>
                    <Text style={styles.content}>You're starting to feel a little bit of stress. Maybe some headaches...?</Text>
                </View>
                <View style={styles.grectangle}>
                    <Text style={styles.content}>Here's what you planned for this situation:</Text>
                </View>
                <View style={styles.grectangle}>
                    <Text style={styles.content}>Here's a relevant article</Text>
                </View>
            </Overlay>
            {/* <StatusBar></StatusBar> */}
        </View>
    )
}

export default AlertBox;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: 'bold',
        margin: 12,
        marginBottom: 7
    },
    date: {
        fontSize: 18,
        textTransform: "lowercase",
        marginLeft: 12,
        marginBottom: 10
    },
    content: {
        fontSize: 20,
        marginLeft: 12,
        marginBottom: 12,
        marginRight: 12,
        padding: 10
    },
    rectangle: {
        marginTop: 20,
        width: 350,
        //height: 120,
        backgroundColor: '#FBCBCB',
        borderRadius: 20
    },
    grectangle: {
        marginTop: 20,
        width: 350,
        //height: 120,
        backgroundColor: '#7EC2A2',
        borderRadius: 20
    }
})