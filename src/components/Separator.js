import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = () => {
    return(
        <View style = {styles.lineStyle} />
    )
}

const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.2,
        borderColor:'gray',
        margin:10,
   }
 });