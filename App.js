import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,  } from '@react-navigation/drawer';
import { Tile } from 'react-native-elements';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Header from './js/Header';
import Contain from './js/Contain';
import Containlist from './list.json';
import Bottombar from './js/Bottombar';
import MeScreen from './js/Drawer';

const Drawer = createDrawerNavigator();

const AlbumStack = () => {
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

const CustomDrawerAnimatedContent = ({ progress, ...rest }) => {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItemList {...rest} />
        
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const CustomDrawerContent = ({ progress, ...rest }) => {
  return (
    <DrawerContentScrollView {...rest}>
      <Tile
        imageSrc={{uri:'https://cdn.zeplin.io/5e6edfd117dbf813ddad315b/assets/6FA2E86D-64B3-4F7D-8CA4-9C5F444C0A1B.png'}}
        containerStyle={{
          height:240,
          backgroundColor:'#00b49f',
          marginTop:-40,
          paddingTop:60,
          paddingLeft:20
        }}
        imageContainerStyle={{
          width:100,
          height:100,
          marginTop:200
        }}
        featured
      />
      <View>
        <Text style={{ fontSize:20,color:'#ffffff',marginTop:-65,marginLeft:26 }}>GamexHCl</Text>
        <Text style={{ fontSize:20,color:'#ffffff',marginLeft:26 }}>gdlab2017@gmail.com</Text>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}
//主體
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerStyle={
        {                                                                                                                                                     
          width: 320,
        }
      }
      drawerContentOptions={{
        activeBackgroundColor: '#00b49f',
        activeTintColor:'#fff',
        itemStyle: { marginLeft: 0, marginRight: 0 },     
        labelStyle: { fontSize: 20 },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
        name="Home" 
        component={AlbumStack} 
        options={{
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./js/img/icon_drawer_home.png')}
                  style={{width:36, height: 36, tintColor: tintColor,marginLeft:26 }}
                />
                
              ),

        }}
        />
        <Drawer.Screen 
        name="My Book" 
        component={AlbumStack} 
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./js/img/icon_bottomnav_mybook.png')}
              style={{width:36, height: 36, tintColor: tintColor,marginLeft:26 }}
            />
          ),
    }}
        />
        <Drawer.Screen
        name="Favorites"
        component={AlbumStack} 
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./js/img/icon_drawer_favorites.png')}
              style={{width:36, height: 36, tintColor: tintColor,marginLeft:26 }}
            />
          ),
    }}
          />
        <Drawer.Screen
         name="Settings"
         component={AlbumStack}
         options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./js/img/icon_drawer_setting.png')}
              style={{width:36, height: 36, tintColor: tintColor,marginLeft:26 }}
            />
          ),
    }}
         />
        <Drawer.Screen 
        name="About us" 
        component={AlbumStack}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./js/img/icon_drawer_aboutus.png')}
              style={{width:36, height: 36, tintColor: tintColor,marginLeft:26 }}
            />
          ),
    }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f8f8',
    flex:1
  },
});
