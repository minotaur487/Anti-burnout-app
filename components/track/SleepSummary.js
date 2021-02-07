import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

export default function SleepSummary() {
    return (
      <SafeAreaView>
      <View style={styles.header}>
        <Card containerStyle={styles.aloeCard}>
          <Text style={styles.aloeText}> aloe </Text>
        </Card>
        <TouchableOpacity>
          <Text style={styles.button}>
            back
          </Text>
        </TouchableOpacity>
        </View>
      <View style={styles.scaffold}>
        <View style={styles.data}>
          <Text>
            Sleep
          </Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Year</Text>
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
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    scaffold: {
      flexDirection: 'column',
      padding: 10,
      alignItems: 'center',
    },
    data: {
      flex: 60,
      width: '80%',
      backgroundColor: '#a6a6a6',
    },
    messages: {
      flex: 10,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    row: {
      flex: 30,
      color: '#6b6b6b',
      flexDirection: 'row',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }
  });