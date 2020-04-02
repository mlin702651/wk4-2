import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from './js/Header';
import Contain from './js/Contain';
import Containlist from './list.json';
import Bottombar from './js/Bottombar';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={Containlist}
        renderItem={({ item }) => <Contain list={item} />}
        keyExtractor={item => item.title} />
    <Bottombar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f8f8',
    flex:1
  },
});
