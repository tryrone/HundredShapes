import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  item: {
    height: 34,
    width: 43,
  },
  FootWrap: {
    height: 80,
    width: wp(100),
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 41,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
