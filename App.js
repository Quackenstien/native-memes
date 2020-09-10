import React, {useState} from 'react';
import Header from './components/Header';
import FadeInView from 'react-native-fade-in-view';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './components/Styles/StyleSheet';

const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [items, setItems] = useState();

  const onPress = () =>
    setItems(
      <FadeInView
        style={styles.tinyLogo}
        duration={5000}
        onFadeComplete={() =>
          Alert.alert('Welcome', 'Ya Nasty Bitch!', [
            {text: 'Take Me To Memes', onPress: () => console.log('success')},
          ])
        }>
        <Image
          source={{
            uri:
              'https://i.kym-cdn.com/entries/icons/mobile/000/034/065/terio.jpg',
          }}
          style={styles.tinyLogo}
        />
      </FadeInView>,
    );

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title="Memes Me" />
        <View style={styles.tinyLogo}>{items}</View>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text>Load Image</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

export default App;
