import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { ModalDatePicker } from "react-native-material-date-picker";
import { useNavigation } from '@react-navigation/native';


export default function Track() {

  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return month + '-' + date + '-' + year;//format: dd-mm-yyyy;
  }
  const date = getCurrentDate();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <ModalDatePicker 
            button={
              <View style={{flexDirection: 'row'}}>
                <Icon name='caretdown'></Icon>
                <Text>date: {date}</Text>
              </View>}
            onSelect={(date) => console.log(date) }
            isHideOnSelect={true}
            initialDate={new Date()}
        />           
        <Text style={styles.headerText}> summary </Text>
      </View>
      <CustomCardMood text="Mood" text2="Hello! How are you feeling today?">
        </CustomCardMood>
      <CustomCardSleep text="Sleep" text2="How many hours of shuteye did you get?">
      </CustomCardSleep>
    </View>
  );
}

const CustomCardMood = (props) =>
{
  return(
    <Card containerStyle={styles.cardContainer}>
        <Card.Title style={{fontSize: 20 }}>{props.text}</Card.Title>
        <View style={styles.ButtonRow}>
              <MoodButtons image={require('./1.png')}>
              </MoodButtons>
              <MoodButtons image={require('./2.png')}>
              </MoodButtons>
              <MoodButtons image={require('./3.png')}>
              </MoodButtons>
              <MoodButtons image={require('./4.png')}>
              </MoodButtons>
              <MoodButtons image={require('./5.png')}>
              </MoodButtons>
        </View>
        <Text style={styles.text}>{props.text2}</Text>
    </Card>
    );
}
const func = () => {}
const MoodButtons = (props) =>
{
  return(
      <TouchableOpacity style={styles.moodIndicator} onPress={func}>
              <Image style={styles.moodIndicator} resizeMode="contain" source={props.image}/>
        </TouchableOpacity>
  );
}




const CustomCardSleep = (props) =>
{
  const navigation = useNavigation();

  const [hours, setHour] = useState(0);
  const incrementHours = () => {
  if (hours < 24)
    setHour(hours + 1);
  }
  
  const decrementHours = () => {
    if (hours > 0)
      setHour(hours - 1);
  }
  return(
    <Card containerStyle={styles.cardContainer} onStartShouldSetResponder={()=>navigation.navigate('SleepSummary')}>
        <Card.Title style={{fontSize: 20 }}>{props.text}</Card.Title>
        <View style={styles.SleepRow}>
            {/* <TouchableOpacity style={styles.sleepButton} onPress={decrementHours}>
            </TouchableOpacity> */}
            <Icon.Button name="left" backgroundColor='#3284BF' color='#ffffff' size={16} onPress={decrementHours}></Icon.Button>
            <View style={styles.hoursSlept}>
                <Text style={styles.SleepText}>{hours}</Text>
            </View>
            <Icon.Button name="right"  backgroundColor='#3284BF' color='#ffffff' size={16} onPress={incrementHours}></Icon.Button>
            {/* <TouchableOpacity style={styles.sleepButton} onPress={incrementHours}>
            </TouchableOpacity> */}
        </View>
        <Text style={styles.text}>{props.text2}</Text>
    </Card>
    );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 250,
    borderRadius: 45,
    flexDirection: 'column',
    backgroundColor: '#3284BF',
    marginBottom: 50,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  ButtonRow: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  moodIndicator: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  SleepText: {
    textAlign: 'center',
    fontSize: 30,
  },
  SleepRow: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
  },
  hoursSlept: {
    width: 75,
    height: 75,
    fontWeight: 'bold',
    alignItems: 'center',
    borderRadius: 200,
    justifyContent:'center',
    backgroundColor: "#ffffff",
  },
  sleepButton: {
    width: 50,
    height: 50,
    backgroundColor: "#a83258",
  },
  text: {
    fontSize: 16,
    alignItems: "center",
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
  }
});
