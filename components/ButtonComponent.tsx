import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {Pressable, Text, View} from 'react-native';

const ButtonComponent = ({
  backgroundcolor,
  text,
  textcolor,
  onpress,
  width,
  elevation,
  bordercolor,
}: {
  backgroundcolor: string;
  text: string;
  textcolor?: string;
  onpress: Function;
  width: string;
  elevation: number;
  bordercolor: string;
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
          borderColor: bordercolor,
          borderRadius: 25,
          width: width,
          elevation: elevation,
        }}>
        <Text style={{color: textcolor, textAlign: 'center'}}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonComponent;
