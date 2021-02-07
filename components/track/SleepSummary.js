import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

export default function SleepSummary() {
    return (
      <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
        <View style={styles.header}>
          <Card containerStyle={styles.aloeCard}>
            <Text style={styles.aloeText}> aloe </Text>
          </Card>
          <TouchableOpacity>
            <Text style={styles.BackButton}>
              back
            </Text>
          </TouchableOpacity>
          </View>

        <View style={styles.scaffold}>
          <View style={styles.data}>
            <Text styles={styles.SleepText}>
              Sleep
            </Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Year</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.messages}>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const displayWeek = () => {}
  const displayMonth = () => {}
  const displayYear = () => {}

  const styles = StyleSheet.create(
  {
    text: {
      color: '#000000',
      fontSize: 12,
      fontFamily: 'Roboto',
    },
    aloeCard:
    {
      lineHeight: 40,
      color: "#58B683",
      backgroundColor: "#58B683",
      padding:10,
      width: 120,
      top: "auto",
      borderRadius:100,
      bottom: 10,
      alignItems: 'flex-start',
    },
    aloeText: {
      fontSize: 30,
      color: "#000000",
      fontWeight:"bold",
    },
    header: {
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    scaffold: {
      flexDirection: 'column',
      padding: 10,
      flex: 1,
      alignItems: 'center',
    },
    data: {
      flex: 60,
      width: '90%',
      backgroundColor: '#E5E5E5',
    },
    messages: {
      flex: 35,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#C4C4C4'
    },
    row: {
      flex: 5,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-evenly',
    },
    button: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#E5E5E5',
    },
    BackButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    SleepText: {
      fontFamily: 'Roboto',
      textAlign: 'center',
      fontSize: 30,
    },
  });