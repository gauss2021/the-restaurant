import React from 'react';

import {COLOR} from '../config';
import {View, Text, Image, Pressable} from 'react-native';

const ItemCategory = ({
  text,
  activeCategory,
  onpress,
}: {
  text: string;
  activeCategory: boolean;
  onpress: Function;
}) => {
  return (
    <Pressable
      onPress={() => {
        onpress;
      }}>
      <View
        style={{
          display: 'flex',
          width: 70,
          height: 90,
          backgroundColor: activeCategory ? COLOR.primary : 'transparent',
          paddingVertical: 15,
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 45,
          marginVertical: 15,
          marginRight: 10,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('./../assets/images/rice.png')}
            style={{width: 35, height: 25, resizeMode: 'cover'}}
          />
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: activeCategory ? '#fff' : 'gray',
          }}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ItemCategory;
