import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React, {useState } from 'react'; 
import { SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function MoodSummary() {
    const [but, buttonToggle] = useState(1);
    const navigation = useNavigation();

    const toWeek = () => {
      buttonToggle(0);
    }
  
    const toMonth = () => {
      buttonToggle(1);
    }
  
    const toYear = () => {
      buttonToggle(2)
    }

    return (
      <SafeAreaView style={{flexDirection: 'column', flex: 1, backgroundColor: '#ffffff'}}>
        <View style={styles.header}>
          <Card containerStyle={styles.aloeCard}>
            <Text style={styles.aloeText}> aloe </Text>
          </Card>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.BackButton}>
              back
            </Text>
          </TouchableOpacity>
          </View>

        <View style={styles.scaffold}>
          <View style={styles.data}>
            <Text style={{fontSize: 30}}>
              Mood
            </Text>
            <Image style={styles.graph} resizeMode='contain' source={require('./6.png')}/>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={toWeek} style={[styles.button, but!=0 ?  styles.button : styles.buttonSelected]}>
              <Text style={[styles.text, but!=0 ?  styles.buttonNotSelected : styles.buttonSelected]}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toMonth} style={[styles.button, but!=1 ?  styles.button : styles.buttonSelected]}>
              <Text style={[styles.text, but!=1 ?  styles.buttonNotSelected : styles.buttonSelected]}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toYear} style={[styles.button, but!=1 ?  styles.button : styles.buttonSelected]}>
              <Text style={[styles.text, but!=2 ?  styles.buttonNotSelected : styles.buttonSelected]}>Year</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.messages}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Summary
            </Text>
            <Text style={{fontSize: 15, padding: 30}}>
                 ~ Start using the app first
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  function buttonToggle({but}) {
    switch(but) {
      case 0:
        return
        break;
      case 1:
        return
        break;
      case 2:
        return
        break;
      default:
        return <Text> Something funky going on</Text>
        break;
    }
  }
  
  buttonToggle.propTypes = {
    but: PropTypes.number.isRequired,
  }


  const styles = StyleSheet.create(
  {
    graph: {
      padding:50,
      width: 400,
      height: 200
    },
    text: {
      color: '#000000',
      fontSize: 12,
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
      flex: 50,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '90%',
      backgroundColor: '#E5E5E5',
    },
    messages: {
      flex: 35,
      width: '90%',
      padding: 10,
      // alignItems: 'flex-start',
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
      justifyContent: 'center',
      height: 40,
      width: 75,
      borderRadius: 10,
      // padding: 20,
      backgroundColor: '#E5E5E5',
    },
    BackButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    MoodText: {
      fontSize: 30,
    },
    buttonSelected: {
      backgroundColor: "#58B683",
      color: '#000000',
      fontSize: 25,
      borderRadius: 10,
    },
    buttonNotSelected: {
      color: '#000000',
      fontSize: 20,
      borderRadius: 10,
    },
  });