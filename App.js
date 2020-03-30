import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Header from './js/Header';
import Contain from './js/Contain';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Contain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});
