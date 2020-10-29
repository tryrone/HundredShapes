import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  header: {
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 29,
    width: 29,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    marginLeft: 24,
    fontStyle: 'normal',
  },
  account: {
    fontFamily: 'Raleway',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    marginTop: 21,
    marginLeft: 24,
  },
  smallCardWrap: {
    height: 157,
    width: 132,
    borderRadius: 8,
    marginRight: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    position: 'relative',
  },
  cardWrap: {
    marginLeft: 24,
    marginTop: 13,
  },
  owed: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    color: 'white',
  },
  amtWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  amount: {
    fontSize: 19,
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    color: 'white',
  },
  amountMon: {
    fontSize: 38,
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    color: 'white',
  },
  profileAmt: {
    height: 20,
    width: 20,
    marginTop: 41,
  },
  emptyBox: {
    width: wp(90),
    height: 54,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginTop: 11,
    alignSelf: 'center',
  },
});
