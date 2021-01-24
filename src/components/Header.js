import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_COLOR} from '../utils/constant';

export const Header = (props) => {
    const {title, titleColor, showBackBtn} = props;
    const leftComponent = (
        <View>
            {showBackBtn ? 
            <TouchableOpacity onPress={() => {props.navigation.goBack()}}>
                <Text>Back</Text>
            </TouchableOpacity> 
            : null}
        </View>
    );

    const centerComponent = (
        <View>
            <Text style={[styles.title, {color: titleColor ? titleColor : '#000'}]}>{title}</Text>
        </View>
    );

    const RightComponent = (
        <View />
    );

    return(
        <View style={styles.container}>
            {leftComponent}
            {centerComponent}
            {RightComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: APP_COLOR.DODGER_BLUE
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        color: '#000'
    }
})