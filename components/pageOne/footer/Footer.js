import React from 'react';
import { Text, View, Image } from 'react-native';

const styles = require('./footerStyle');

const Footer = ({ active }) => {
  return (
    <View style={styles.FootWrap}>
      <Image
        source={
          active === 1
            ? require('../../../img/active.png')
            : require('../../../img/inActive.png')
        }
        style={styles.item}
      />
      <Image
        source={
          active === 2
            ? require('../../../img/active.png')
            : require('../../../img/inActive.png')
        }
        style={styles.item}
      />
      <Image
        source={require('../../../img/inActive.png')}
        style={styles.item}
      />
      <Image
        source={require('../../../img/inActive.png')}
        style={styles.item}
      />
    </View>
  );
};

export default Footer;
