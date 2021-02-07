import React, {useState } from 'react'; 
import PropTypes from 'prop-types';
import Track from '../track/track';
import Plan from '../plan/plan';
import MCentre from '../centre/MCentre';
import {StyleSheet, SafeAreaView, Button, Text, View, TouchableOpacity, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  aloeText: {
    fontSize: 30,
    lineHeight: 40,
    color: "#000000",
    fontWeight:"bold",

    backgroundColor: "#58B683",
    padding:5,
    width: 120,
    top: "auto",
    bottom: 10,
  },
  buttonContainer: {
    flexDirection:'row', 
    justifyContent:'space-between',
    height: 50,
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
    fontSize: 20,
    lineHeight: 30,
    color: "#000000",
    fontWeight:"bold",
  },
  buttonSelected: {
    backgroundColor: 'rgba(88, 182, 131, 0.5)',
  },
  buttonNotSelected: {
    backgroundColor: "#E5E5E5",
  },
});

export default function Home() {
    const [page, setPage] = useState(2);
  
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
          <Text style={styles.aloeText}> aloe </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toTrack} style={[styles.pageButtons, page!=0 ?  styles.buttonNotSelected : styles.buttonSelected]}>
              <Text style={styles.pageButtonText}>track</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toPlan} style={[styles.pageButtons, page!=1 ?  styles.buttonNotSelected : styles.buttonSelected]}>
              <Text style={styles.pageButtonText}>plan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toCentre} style={[styles.pageButtons, page!=2 ?  styles.buttonNotSelected : styles.buttonSelected]}>
              <Text style={styles.pageButtonText}>centre</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <SubPage page={page}/>
          </ScrollView>
        </View>
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