import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import { SharedElement } from 'react-navigation-shared-element';
import Footer from '../pageOne/footer/Footer';

const styles = require('./pagetwoStyle');

const emptyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const LoadingList = ({ item }) => {
  return <TouchableOpacity key={item} style={styles.emptyBox} />;
};

const PageTwo = ({ navigation }) => {
  const { goBack, state } = navigation;
  const { item, id } = state.params;
  console.log(navigation.state.params);
  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {/* view to be shared */}
      {/* <SharedElement id={id}> */}
      <View style={styles.headerWrap}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(76,84,225,1)', 'rgba(102,82,226,1)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 281,
          }}
        />

        <View style={styles.headerRow}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Image
              source={require('../../img/backBtn.png')}
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <Image
            source={require('../../img/Profile.png')}
            style={styles.profileImg}
          />
        </View>

        <Text style={styles.owed}>You're owed</Text>

        <View style={styles.amtWrap}>
          <Text style={styles.amount}>£</Text>
          <Text style={styles.amountMon}>{item}</Text>
        </View>
      </View>
      {/* </SharedElement> */}
      {/* view to be shared */}

      <View style={styles.paperWrap}>
        <View style={styles.addBtnRow}>
          <View />
          <Image
            source={require('../../img/addBtn.png')}
            style={styles.addBtn}
          />
        </View>
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
      </View>
      <Footer active={2} />
    </View>
  );
};

// PageTwo.sharedElements = (navigation) => {
//   const { state } = navigation;
//   const { item, id } = state.params;
//   return [id];
// };
export default PageTwo;
