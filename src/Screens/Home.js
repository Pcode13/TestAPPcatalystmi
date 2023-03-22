import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppDimension from '../Helper/AppDimension';
import Main from './Bottom/Main';
import Add from './Bottom/Add';
import Settings from './Bottom/Settings';
const TAB1 = require('../assets/tab1.png');
const TAB2 = require('../assets/tab2.png');
const TAB3 = require('../assets/tab3.png');

const Home = () => {
  const [tab, setTab] = useState(0);
const tintColorTab =setTab ? '#49A6FC' : '#000'
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      {tab == 0 ? <Main /> : tab == 1 ? <Add /> : <Settings />}
      <View style={styles.BottomCon}>
        <TouchableOpacity
          style={styles.common}
          onPress={() => {
            setTab(0);
          }}>
          <Image
            source={TAB1}
            style={[styles.img, {tintColor: tab == 0 ? '#49A6FC' : '#000'}]}
          />
        </TouchableOpacity>
        <View style={styles.modCon}>
          <TouchableOpacity
            onPress={() => {
              setTab(1);
            }}>
            <Image source={TAB2} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.common}
          onPress={() => {
            setTab(2);
          }}>
          <Image
            source={TAB3}
            style={[styles.img, {tintColor: tab == 2 ? '#49A6FC' : '#000'}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  BottomCon: {
    width: '100%',
    height: AppDimension.SPACING_X_50,
    backgroundColor: '#F3F3F3',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  img: {
    width: AppDimension.SPACING_X_21,
    height: AppDimension.SPACING_X_23,
  },
  modCon: {
    width: AppDimension.SPACING_X_55,
    height: AppDimension.SPACING_X_55,
    backgroundColor: '#49A6FC',
    borderRadius: AppDimension.SPACING_X_30,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: AppDimension.SPACING_X_20,
  },
  common: {
    margin: AppDimension.SPACING_X_05,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
