import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import { SharedElement } from 'react-navigation-shared-element';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from './footer/Footer';

const styles = require('./PageOneStyle');

const amounArray = [
  { item: 45, id: 'ndj35' },
  { item: 350, id: 'ndj3d5' },
  { item: 120, id: 'ndj3uy5' },
  { item: 42, id: 'ndj325' },
  { item: 30, id: 'ndj3125' },
];
const emptyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SmallCard = ({ item, navigate }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Detail', item);
      }}
      key={item.id}
    >
      {/* <SharedElement id={item.id}> */}
      <View style={styles.smallCardWrap}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(76,84,225,1)', 'rgba(102,82,226,1)']}
          style={{
            position: 'absolute',
            borderRadius: 8,
            left: 0,
            right: 0,
            top: 0,
            height: 157,
          }}
        />

        <Text style={styles.owed}>You're owed</Text>

        <View style={styles.amtWrap}>
          <Text style={styles.amount}>£</Text>
          <Text style={styles.amountMon}>{item.item}</Text>
        </View>

        <Image
          source={require('../../img/Profile.png')}
          style={styles.profileAmt}
        />
      </View>
      {/* </SharedElement> */}
    </TouchableOpacity>
  );
};

const LoadingList = ({ item }) => {
  return <TouchableOpacity style={styles.emptyBox} />;
};

const PageOne = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <View />
          <Image
            source={require('../../img/Profile.png')}
            style={styles.profileImg}
          />
        </View>

        <Text style={styles.greeting}>Morning Lee</Text>

        <Text style={styles.account}>Your accounts</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.cardWrap}
        >
          {amounArray.map((item) => {
            return <SmallCard item={item} key={item.id} navigate={navigate} />;
          })}
        </ScrollView>

        <Text style={styles.account}>Transactions</Text>

        <FlatList
          style={{ height: hp(51) }}
          showsVerticalScrollIndicator={false}
          data={emptyArray}
          keyExtractor={(item) => `${item}`}
          renderItem={({ item, index, separators }) => (
            <LoadingList item={item} />
          )}
        />
        <Footer active={1} />
      </View>
    </SafeAreaView>
  );
};
export default PageOne;
