import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {APP_COLOR} from '../utils/constant';

export const Loading = () => {
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size = 'large' color = {APP_COLOR.DODGER_BLUE} />
            <Text style={{marginVertical: 20, color: APP_COLOR.DODGER_BLUE}}>Please wait</Text>
        </View>
    )
}