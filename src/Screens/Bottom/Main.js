import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AppDimension from '../../Helper/AppDimension';
import {FlatList} from 'react-native-gesture-handler';

const KING = require('../../assets/king.png');
const BANNER = require('../../assets/Banner.png');
const SEARCH = require('../../assets/search.png');
const FILES = require('../../assets/F.png');
const Files = [
  {
    id: 1,
    img: require('../../assets/file1.png'),
    title: 'Single Scan',
  },
  {
    id: 2,
    img: require('../../assets/file2.png'),
    title: 'Batch Scan',
  },
  {
    id: 3,
    img: require('../../assets/file3.png'),
    title: 'Scan to Text',
  },
];
const Demo = [
  {
    id: 1,
    img: require('../../assets/img1.png'),
    day: '2d ago',
  },
  {
    id: 2,
    img: require('../../assets/img2.png'),
    day: '2d ago',
  },
];

const Main = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginTop: AppDimension.SPACING_X_15,
          marginHorizontal: AppDimension.SPACING_X_05,
        }}>
        <Image
          source={item.img}
          style={{
            width: AppDimension.SPACING_X_200,
            height: AppDimension.SPACING_X_200,
            borderRadius: AppDimension.SPACING_X_20,
          }}
        />

        <Text
          style={{
            bottom: AppDimension.SPACING_X_20,
            left: AppDimension.SPACING_X_10,
            zIndex: 1,
            position: 'absolute',
            backgroundColor: '#49A6FC',
            borderRadius: 5,
            paddingHorizontal: 8,
          }}>
          {item.day}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.txt1}>Good Evening</Text>
          <Text style={styles.txt2}>Welcome back</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={KING} style={styles.img} />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: AppDimension.SPACING_X_15,
        }}>
        <Image source={BANNER} />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginVertical: AppDimension.SPACING_X_10,
        }}>
        <View style={styles.inputCon}>
          <Image source={SEARCH} style={{margin: AppDimension.SPACING_X_05}} />
          <TextInput
            placeholder="Search through your scans"
            style={styles.input}
            placeholderTextColor="#606060"
            inlineImageLeft="search_icon"
          />
        </View>
      </View>

      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {Files.map(item => {
          <Text>{item.title}</Text>
        })}
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: AppDimension.SPACING_X_15,
          margin: AppDimension.SPACING_X_15,
        }}>
        {Files.map((item, index) => {
          return (
            <View
              key={index}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                style={{margin: AppDimension.SPACING_X_07}}
              />
              <Text style={{fontSize: 12, fontWeight: '700', color: '#000'}}>
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>
      <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
        Recent Scans
      </Text>
      <View>
        <FlatList
          data={Demo}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: AppDimension.SPACING_X_15,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>
          Folders
        </Text>
        <Image source={FILES} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  header: {
    marginTop: AppDimension.SPACING_X_50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt1: {
    fontSize: 33,
    fontWeight: '700',
    color: '#000',
  },
  txt2: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9B9B9B',
    fontWeight: '500',
  },
  img: {
    width: AppDimension.SPACING_X_33,
    height: AppDimension.SPACING_X_30,
  },
  inputCon: {
    height: AppDimension.SPACING_X_40,
    width: AppDimension.SPACING_X_325,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: AppDimension.SPACING_X_15,
    paddingHorizontal: AppDimension.SPACING_X_05,
  },
  input: {
    color: 'red',
  },
});
