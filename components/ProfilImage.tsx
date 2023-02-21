import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {COLOR} from '../config';
import {Image} from 'react-native';

const ProfilImage = () => {
  return (
    <Image
      source={require('./../assets/images/profil.jpg')}
      style={{borderRadius: 5, width: 40, height: 40}}
    />
  );
};

export default ProfilImage;
