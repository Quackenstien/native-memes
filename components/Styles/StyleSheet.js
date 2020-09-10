import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  tinyLogo: {
    resizeMode: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: '10%',
    width: '100%',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
});
