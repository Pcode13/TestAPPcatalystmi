import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppDimension from '../Helper/AppDimension';

const data = [
  {
    id: 1,
    img: require('../assets/First.png'),
    title: 'Scan anything in HD, wherever you are...',
    subtitle:
      'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',
  },
  {
    id: 2,
    img: require('../assets/Second.png'),
    title: 'Navigate work documents like a Pro',
    subtitle:
      'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. ',
  },
  {
    id: 3,
    img: require('../assets/Third.png'),
    title: 'Less time scanning homework = more time for fun',
    subtitle:
      'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
  },
  {
    id: 4,
    img: require('../assets/Four.png'),
    title: 'Covert Pictures to Text with our next generation offline OCR',
    subtitle:
      'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
  },
];
const Arrow=require('../assets/Vector.png')

const Nextbutton = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btncontainer}
      onPress={onPress}>
      <Image source={Arrow} />
    </TouchableOpacity>
  );
};

const OnBording = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onChange = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const onConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const slidesRef = useRef(null);

  const onPressNext = () => {
    if (currentIndex < data.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const imgwidth = scrollX.interpolate({
            inputRange,
            outputRange: [0, width, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.Image
              style={[
                styles.img,
                {width: imgwidth, height: width - AppDimension.SPACING_X_200},
              ]}
              source={currentIndex == index ? item?.img : null}
            />
          );
        })}
      </View>
      {/* <View style={styles.maincontainer}> */}
      {/* dot */}

      {/* flatlist data */}
      <View
        style={{
          height: AppDimension.SPACING_X_200,
        }}>
        <FlatList
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          ref={slidesRef}
          scrollEventThrottle={32}
          onViewableItemsChanged={onChange}
          viewabilityConfig={onConfig}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.cardcontainer,
                {width: AppDimension.DEVICE_WIDTH},
              ]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          )}
          pagingEnabled
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: AppDimension.SPACING_X_50,
          bottom: 0,
          
        }}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const dotwidth = scrollX.interpolate({
            inputRange,
            outputRange: [7.5, 7.5, 7.5],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <View style={styles.dotcontainer}>
              <Animated.View
                style={[
                  styles.dot,
                  {
                    width: dotwidth,
                    opacity: opacity,
                    backgroundColor: '#49A6FC',
                  },
                ]}
                key={index.toString()}
              />
            </View>
          );
        })}

        {currentIndex == 3 ? <Nextbutton onPress={onPressNext} /> : null}
      </View>

      {/* </View> */}
    </View>
  );
};

export default OnBording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  maincontainer: {
    height: AppDimension.DEVICE_HEIGHT / AppDimension.SPACING_X_02P3,
    borderTopRightRadius: AppDimension.SPACING_X_30,
    borderTopLeftRadius: AppDimension.SPACING_X_30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: AppDimension.SPACING_X_18,
    margin: AppDimension.SPACING_X_15,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: AppDimension.SPACING_X_14,
    paddingHorizontal: AppDimension.SPACING_X_24,
    color: '#000',
    textAlign: 'center',
    lineHeight: AppDimension.SPACING_X_24,
  },
  dotcontainer: {
    justifyContent: 'flex-end',

    paddingHorizontal: AppDimension.SPACING_X_05,
    paddingVertical: AppDimension.SPACING_X_05,
  },
  dot: {
    height: AppDimension.SPACING_X_08,
    backgroundColor: '#9B9B9B',
    borderRadius: AppDimension.SPACING_X_04,
  },
  btncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#49A6FC',
    width: AppDimension.SPACING_X_50,
    height: AppDimension.SPACING_X_50,
    borderRadius: AppDimension.SPACING_X_25,
    left: AppDimension.SPACING_X_50,
  },
  btntext: {
    fontFamily: 'ProductSans-Regular',
    fontSize: AppDimension.SPACING_X_18,
    color: '#ECECEC',
  },
});
