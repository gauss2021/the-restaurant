import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {Image, Pressable, Text, View} from 'react-native';

const GoogleButton = ({
  backgroundcolor,
  text,
  textcolor,
  onpress,
  width,
}: {
  backgroundcolor: string;
  text: string;
  textcolor?: string;
  onpress: Function;
  width: string;
}) => {
  return (
    <Pressable
      onPress={() => {
        onpress();
      }}>
      <View
        style={{
          padding: 15,
          backgroundColor: backgroundcolor,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 25,
          width: width,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <Image
          source={require('./../assets/images/google.png')}
          style={{width: 25, height: 25, marginRight: 25}}
        />
        <Text style={{color: textcolor, alignSelf: 'center'}}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoogleButton;
