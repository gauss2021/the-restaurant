import React, {useState} from 'react';

import {View, SafeAreaView, Text, TextInput, Pressable} from 'react-native';
import {Line} from 'react-native-svg';
import ButtonComponent from '../components/ButtonComponent';
import EmailIcon from '../components/EmailIcon';
import GoogleButton from '../components/GoogleButton';
import KeyIcon from '../components/KeyIcon';
import LineComponent from '../components/Line';
import Visibility from '../components/Visibility';
import {COLOR, TEXT} from '../config';

function RegisterPhone(): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{backgroundColor: COLOR.primary, height: '100%'}}>
      <View
        style={{
          height: 40,
          width: '100%',
          backgroundColor: COLOR.primary,
        }}></View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
        }}>
        <Text style={{fontSize: TEXT.title, fontWeight: 'bold', color: '#333'}}>
          Deuxieme etape
        </Text>
        <Text
          style={{
            fontSize: TEXT.text,
            fontWeight: 'normal',
            marginVertical: 15,
          }}>
          Veuillez entrer votre numero de telephone
        </Text>
        <View
          style={{
            backgroundColor: '#d8dee9',
            width: '100%',
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'row',
            marginVertical: 15,
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <View style={{marginRight: 10, width: 24}}>
            <EmailIcon />
          </View>
          <TextInput style={{flex: 1}} placeholder="Numero de telephone" />
        </View>
        <View style={{marginVertical: 15}}>
          <ButtonComponent
            elevation={10}
            text="Continuer"
            backgroundcolor={COLOR.primary}
            textcolor="#fff"
            onpress={() => {}}
            width="100%"
          />
        </View>
      </View>
    </View>
  );
}

export default RegisterPhone;
