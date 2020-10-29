import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  headerWrap: {
    width: wp(100),
    height: 281,
    paddingVertical: 51,
    paddingHorizontal: 25,
  },
  backBtn: {
    width: 12,
    height: 12,
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 29,
    width: 29,
  },
  owed: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 11,
    color: 'white',
    marginTop: 37,
  },
  amtWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  amount: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    color: 'white',
  },
  amountMon: {
    fontSize: 65,
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    color: 'white',
  },
  paperWrap: {
    borderRadius: 24,
    paddingHorizontal: 24,
    //     borderWidth: 1,
    //     borderColor: 'red',
    position: 'relative',
    top: -20,
    backgroundColor: 'white',
  },
  account: {
    fontFamily: 'Raleway',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    position: 'relative',
    top: -20,
  },
  addBtnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addBtn: {
    height: 58,
    width: 58,
    position: 'relative',
    top: -20,
  },
  emptyBox: {
    width: wp(100),
    height: 54,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginTop: 11,
    alignSelf: 'center',
  },
});
