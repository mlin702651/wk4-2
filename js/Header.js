import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
        <Image style={styles.navbar} source={{uri:'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/0C4B3F2A-BEAF-40EC-B944-3E7CD256A251.svg'}}/>
        <Text style={styles.textStyle}>
            My Book
        </Text>
        <Image style={styles.search} source={{uri:'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/D8D334F5-AE95-43AA-93D5-C728A255E49E.svg'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor:'#00b49f',
    height:56,
    width:360,
    flexDirection:'row',
    
    


    
  },
  textStyle:{
      fontSize:20,
      color:'#ffffff',
  },
  navbar:{
    height:40,
    width:40,
   
  },
  search:{
    height:40,
    width:40,
  }
});

export default Header;