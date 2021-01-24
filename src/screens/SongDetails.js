import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {APP_COLOR} from '../utils/constant';

export const SongDetails = ({route, navigation}) => {
    const {song} = route.params,
          {artworkUrl100, artistName, collectionName, trackName, collectionArtistName, collectionPrice, 
            country, currency, primaryGenreName} = song;
    const background = require('../assets/background1.jpg');
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        async function trackSetup(){
            const {trackId, previewUrl, trackName, artistName, artworkUrl100} = song;
            await TrackPlayer.setupPlayer();
        
            await TrackPlayer.add({
                id: trackId,
                url: previewUrl,
                title: trackName,
                artist: artistName,
                artwork: artworkUrl100
            });
        }
        trackSetup();
    }, [])

    const start = async () => {
        setPlaying(true);
        await TrackPlayer.play();
    };

    const stop = async () => {
        setPlaying(false);
        await TrackPlayer.stop();
    }

    return(
        <View style = {{flexDirection: 'column'}}>
            <ImageBackground source={background} style={{height: 180, width: '100%'}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: artworkUrl100}} style={styles.image} />
                </View>
            </ImageBackground>

            <View style={styles.container}>
                <Text style = {{fontSize: 26, color: '#000'}}>{trackName}</Text>
                <Text style = {styles.content}>Collection: {collectionName}</Text>
                <Text style = {styles.content}>Artist: {collectionArtistName || artistName}</Text>
                <Text style = {styles.content}>Genre: {primaryGenreName}</Text>
                <Text style = {styles.content}>{collectionPrice} {currency}</Text>
                <Text style = {styles.content}>{country}</Text>
            </View>
            
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity 
                    onPress={() => {!playing ? start() : stop()}} 
                    style={[styles.playBtn, {backgroundColor: playing ? 'red' : APP_COLOR.DODGER_BLUE}]}>
                    <Text style={{fontSize: 16, color: '#FFF'}}>{!playing ? 'Play Preview' : 'Stop Preview'}</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-around', 
        marginVertical: 100, 
        marginHorizontal: 10
    },
    image: {
        height: 200,
        width: '60%',
        marginTop: 30,
    },
    content: {
        fontSize: 18, 
        color: '#808080'
    },
    playBtn:{
        backgroundColor: APP_COLOR.DODGER_BLUE,
        width: '30%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})