import React, {useState } from 'react'; 
import PropTypes from 'prop-types';
import Track from '../track/track';
import Plan from '../plan/plan';
import MCentre from '../centre/MCentre';
import {StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  aloeText: {
    fontSize: 30,
    lineHeight: 40,
    color: "#000000",
    fontWeight:"bold",
  },
  aloeContainer: {
    alignItems: 'flex-start',
    padding: 5,
    width: 120,
    borderRadius: 50,
    backgroundColor: "#58B683",
},
  buttonContainer: {
    flexDirection:'row', 
    justifyContent:'space-between',
    height: 50,
    marginTop: 10,
    marginBottom: 5,
  },
  pageButtons: {
    padding: 5,
    width: 120,
    height: 40,
    top: 10,
    alignItems:'center', 
    justifyContent: 'center',
  },
  pageButtonText: {
    lineHeight: 30,
    fontWeight:"bold",
  },
  buttonSelected: {
    color: "#58B683",
    fontSize: 25,
  },
  buttonNotSelected: {
    color: 'rgba(88, 182, 131, 0.5)',
    fontSize: 20,
  },
});

export default function Home() {
    const [page, setPage] = useState(1);
  
    const toTrack = () => {
      setPage(0);
    }
  
    const toPlan = () => {
      setPage(1);
    }
  
    const toCentre = () => {
      setPage(2)
    }
  
    return (
      <SafeAreaView>
        <View style={{flexDirection:'column', padding:10}}>
          <View style={styles.aloeContainer}>
            <Text style={styles.aloeText}> aloe </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toTrack} style={styles.pageButtons}>
              <Text style={[styles.pageButtonText, page!=0 ?  styles.buttonNotSelected : styles.buttonSelected]}>| track</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toPlan} style={styles.pageButtons}>
              <Text style={[styles.pageButtonText, page!=1 ?  styles.buttonNotSelected : styles.buttonSelected]}>| plan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toCentre} style={styles.pageButtons}>
              <Text style={[styles.pageButtonText, page!=2 ?  styles.buttonNotSelected : styles.buttonSelected]}>| alerts</Text>
            </TouchableOpacity>
          </View>
          <Divider style={{backgroundColor: 'rgba(88, 182, 131, 0.5)', height: 3,}}/>
          <ScrollView>
            <SubPage page={page}/>
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  
  function SubPage({page}) {
    switch(page) {
      case 0:
        return <Track/>
        break;
      case 1:
        return <Plan/>
        break;
      case 2:
        return <MCentre/>
        break;
      default:
        return <Text> Something funky going on</Text>
        break;
    }
  }
  
  SubPage.propTypes = {
    page: PropTypes.number.isRequired,
  }