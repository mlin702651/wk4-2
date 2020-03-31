import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Contain = props => {
    let { list } = props;
    return (
        <View>
            <View style={styles.box}>
                <View style={styles.imgbackground}>
                    <Image
                        style={styles.img}
                        source={{ uri: list.image }}
                    />
                </View>
                <View style={styles.right}>
                    <Text>{list.title}</Text>
                    <Text>{list.p1}</Text>
                    <Text>{list.p2}</Text>
                    <Text>{CheckPercentage(list.rate)}</Text>
                </View>
            </View>
            
            <View style={styles.line}></View>

        </View>
        
    )
};

function CheckPercentage(i) {
    console.log(i);
    if (i == 0) {
        return ('start read');
    }
    else {
        return (i + '% completed');
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection:'row',
        width:360,
        height:170,
        backgroundColor:'#f8f8f8',
        paddingTop:12,
        justifyContent:'center'
    },
    right:{
        width:194,
        left:24,
    },
    imgbackground:{
        padding:3,
        height: 146,
        width: 99,
        borderWidth:0.5,
        borderColor:'#d1d1d1',
        shadowColor: "#000",
        shadowOffset: {width:0,height: 0,},
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    img: {
        height: 140,
        width: 93,
    },
    line:{
        height: 1,
        backgroundColor :'#d1d1d1',
    }
});

export default Contain;