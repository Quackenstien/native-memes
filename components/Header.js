import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Styles/StyleSheet';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
