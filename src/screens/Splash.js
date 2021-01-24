import React, {useEffect} from 'react';
import {Text, ImageBackground, StyleSheet, SafeAreaView} from 'react-native';

export const Splash = ({navigation}) => {

    const image = require('../assets/musicSplash2.png');

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Songs');
        }, 2000);
    }, []);
    
    return(
        <SafeAreaView style = {styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Crown Music</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 200,
        backgroundColor: "#000000a0"
      }
})