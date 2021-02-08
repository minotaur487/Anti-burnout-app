import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useNavigation } from '@react-navigation/native';


import Header from '../Header';

//add imports for all onboarding pages
// Page1 and Page 2 are tester pages that can be deleted whenever
import IntroPage1 from './IntroPage1';
import IntroPage2 from './IntroPage2';

import StressIndicators from './StressIndicators';
import HowMuchSleep from './HowMuchSleep';
import Mood from './Mood';

import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';

import Contacts from './Contacts';

import FirstPage from './FirstPage';
import LastPage from './LastPage';


export default function Onboarding() {
  const navigation = useNavigation();
  const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  // then add the page as a view in the pager with the appropriately ordered key
  // include a header after with onPress set to change to the next page
  // the keys are numbered 1->, but page changes are 0->
  return (
    <SafeAreaView style={styles.container}>
      <ViewPager style={{flex: 1}} initialPage={0} ref={pagerRef}>
        <View key ="1" style={styles.container}>
          <FirstPage onPress={() => {handlePageChange(1);}}/>
        </View>
        <View key="2" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(2);}}/>
          <IntroPage1/>
        </View>
        <View key ="3" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(3);}}/>
          <IntroPage2/>
        </View>
        <View key="4" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(4)}}/>
          <StressIndicators/>
        </View>
        <View key="5" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(5)}}/>
          <HowMuchSleep/>
        </View>
        <View key="6" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(6)}}/>
          <Mood/>
        </View>
        <View key="7" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(7)}}/>
          <Level1/>
        </View>
        <View key="8" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(8)}}/>
          <Level2/>
        </View>
        <View key="9" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(9)}}/>
          <Level3/>
        </View>
        <View key="10" style={styles.container}>
          <Header buttonLabel="next" onPress={() => {handlePageChange(10)}}/>
          <Contacts/>
        </View>
        <View key="11" style={styles.container}>
          <LastPage onPress={() => {navigation.navigate('Home');}}/>
        </View>
      <StatusBar style="auto" />
      </ViewPager>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    fontSize: 40,
    color: '#000000',
  }
});