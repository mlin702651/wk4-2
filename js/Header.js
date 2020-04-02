import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
        <Image style={styles.navbar} source={require('./img/btn_navbar_mobile.png')}/>
        <Text style={styles.textStyle}>My Book</Text>
        <Image style={styles.search} source={require('./img/btn_search.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
    height:110,
    paddingTop:30,
    elevation:2,
    backgroundColor:'#00b49f',
    zIndex:2
  },
  textStyle:{
      fontSize:24,
      color:'#ffffff',
      
  },
  navbar:{
    height:50,
    width:50,
    
  },
  search:{
    height:50,
    width:50,
   
  }
});

export default Header;