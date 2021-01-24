import React from 'react';
import {FlatList, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {SongCard} from '../components/SongCard';
import {Loading} from '../components/Loading';
import {fetchData} from '../utils/util';
import {APP_COLOR} from '../utils/constant';
import {Header} from '../components/Header';

const songAPI = 'https://itunes.apple.com/search?term=Michael+jackson';

class Songs extends React.Component{

    constructor(props){
        super();
        this.state = {
            songList: [],
            isLoading: true
        }
    }

    async componentDidMount(){
        await this.getSongData()        
    }

    getSongData = async () => {
        let response = await fetchData(songAPI);
        if(response.success){
            this.setState({songList: response.data, isLoading: false});
        }
    }

    onRefresh = () => {
        this.setState({isLoading: true}, 
            async () => {this.getSongData()});
    }

    moveToSong = (item) => {
        this.props.navigation.navigate('SongDetails', {song: item});
    }

    render(){
        let {songList, isLoading} = this.state;
        
        return(
            <>
            <StatusBar backgroundColor={APP_COLOR.DODGER_BLUE} />
            <SafeAreaView style = {styles.container}>
                <Header title='SONGS' titleColor='#FFF' showBackBtn={false} />
                {isLoading ?
                <Loading />
                :
                <FlatList 
                    data={songList}
                    renderItem={({item}) => {
                        return(
                            <SongCard 
                                item = {item}
                                moveToSong={this.moveToSong} />
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    onRefresh={() => this.onRefresh()}
                    refreshing={isLoading}
                    />
                }
            </SafeAreaView>
            </>
        )
    } 
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default Songs;