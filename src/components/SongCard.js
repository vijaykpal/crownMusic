import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Separator} from '../components/Separator';
import {getMinuteFromMilliSec} from '../utils/util';
import {APP_COLOR} from '../utils/constant';

export const SongCard = ({item, moveToSong}) => {
    const {trackName, artistName, trackTimeMillis, artworkUrl100} = item;
    let trackTime = getMinuteFromMilliSec(trackTimeMillis);

    if(trackName){
        return(
            <View>
                <TouchableOpacity onPress = {() => {moveToSong(item)}} style={styles.container}>
                    <View style={{flex: 2}}>
                        <Image source={{uri: artworkUrl100}} style={styles.image} />
                    </View>
    
                    <View style={{marginHorizontal: 10, marginLeft: 20, flex: 5, justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20, color: APP_COLOR.DODGER_BLUE}}>{trackName}</Text>
                        <View style = {{flexDirection: 'row'}}>
                            <Text style={{width: '50%', color: APP_COLOR.DODGER_BLUE, fontWeight: 'bold', fontSize: 16}}>{artistName}</Text>
                            <Text style={{paddingHorizontal: 10, color: APP_COLOR.DODGER_BLUE, fontSize: 16}}>{trackTime}m</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Separator/>
            </View>
        )
    }
    return null;  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        height: 100,
        width: 90
    }
})