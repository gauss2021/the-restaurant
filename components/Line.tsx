import React from 'react';

import {Text, View} from 'react-native';
import {COLOR} from '../config';

const LineComponent = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          paddingVertical: 1,
          backgroundColor: COLOR.secondary,
          width: '45%',
          marginRight: 10,
        }}></View>
      <Text style={{color: COLOR.secondary}}>Ou</Text>
      <View
        style={{
          paddingVertical: 1,
          backgroundColor: COLOR.secondary,
          width: '45%',
          marginLeft: 10,
        }}></View>
    </View>
  );
};

export default LineComponent;
