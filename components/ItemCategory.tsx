import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {COLOR} from '../config';
import {View, Text, Image} from 'react-native';
import CarLivraison from './Carlivraison';

const BoxLivraison = () => {
  return (
    <View
      style={{
        display: 'flex',
        width: 180,
        height: 180,
        backgroundColor: COLOR.primary,
        paddingVertical: 25,
        paddingLeft: 25,
        paddingRight: 10,
        borderRadius: 15,
        elevation: 10,
        marginVertical: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Text style={{color: '#fff'}}>Livraison express</Text>
      <Image
        source={require('./../assets/images/mackdo1.jpg')}
        style={{width: 30, height: 30, marginTop: 10, resizeMode: 'cover'}}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#fff'}}>Tous les jours</Text>
          <Text style={{color: '#fff'}}>24H/24</Text>
        </View>
        <View>
          <CarLivraison />
        </View>
      </View>
    </View>
  );
};

export default BoxLivraison;
