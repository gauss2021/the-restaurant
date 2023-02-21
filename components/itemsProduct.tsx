import React from 'react';

import {COLOR} from '../config';
import {View, Text, Image, Pressable, ImageBackground} from 'react-native';
import AddIcon from './addIcon';
import LikeIcon from './like';

const ItemProduct = ({nom, prix}: {nom: string; prix: number}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 280,
        width: 180,
        elevation: 10,
      }}>
      <View style={{height: '50%'}}>
        <Image
          source={require('./../assets/images/banner.jpg')}
          style={{
            width: '100%',
            height: '100%',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
        />
      </View>
      <View style={{height: '3%', backgroundColor: '#fff'}}></View>
      <View
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          paddingHorizontal: 10,
          paddingTop: 10,
          elevation: 15,
          height: '47%',
        }}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          {nom}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'gray', fontSize: 16}}>
            {prix.toString() + 'FCFA'}
          </Text>
          <LikeIcon />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <AddIcon />
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;
