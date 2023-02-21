import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {COLOR} from '../config';
import {View, Text, Image, Pressable} from 'react-native';
import CarLivraison from './Carlivraison';
import MenuIcon from './MenuIcon';

const BoxCategory = ({
  icon,
  premierMot,
  deuxiemeMot,
  onpress,
}: {
  icon: JSX.Element;
  premierMot: string;
  deuxiemeMot: JSX.Element;
  onpress: Function;
}) => {
  return (
    <Pressable
      onPress={() => {
        onpress();
      }}>
      <View
        style={{
          display: 'flex',
          width: 180,
          height: 180,
          backgroundColor: '#fff',
          paddingVertical: 25,
          paddingLeft: 25,
          paddingRight: 10,
          borderRadius: 15,
          elevation: 10,
          marginVertical: 15,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View>
          {icon}
          <Text style={{marginTop: 10}}>{premierMot}</Text>
        </View>
        {deuxiemeMot}
      </View>
    </Pressable>
  );
};

export default BoxCategory;
