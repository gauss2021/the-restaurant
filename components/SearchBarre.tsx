import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {COLOR} from '../config';
import {View, TextInput} from 'react-native';
import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon';

const SearchBarre = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'gray',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <SearchIcon />
        <TextInput
          placeholder="Effectuer une recherche"
          style={{backgroundColor: 'gray', flexDirection: 'row', width: 200}}
        />
      </View>
      <View style={{width: 20, height: 20}}>
        <CloseIcon />
      </View>
    </View>
  );
};
export default SearchBarre;
