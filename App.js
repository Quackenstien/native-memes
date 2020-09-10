import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './StyleSheet';
import Header from './components/Header';
import FadeInView from 'react-native-fade-in-view';

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
    <View style={styles.container}>
      <Header title="Memes Me" />
      <View style={styles.tinyLogo}>{items}</View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text>Load Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
