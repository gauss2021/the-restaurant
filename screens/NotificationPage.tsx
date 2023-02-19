import React, {useState} from 'react';

import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import {Line} from 'react-native-svg';
import ButtonComponent from '../components/ButtonComponent';
import ConditionUtilisation from '../components/ConditionUtilisation';
import EmailIcon from '../components/EmailIcon';
import GoogleButton from '../components/GoogleButton';
import KeyIcon from '../components/KeyIcon';
import LineComponent from '../components/Line';
import UserIcon from '../components/UserIcon';
import Visibility from '../components/Visibility';
import {COLOR, TEXT} from '../config';

function NotificationPage(): JSX.Element {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#fff',
          }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLOR.primary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontSize: TEXT.title,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Notifications
          </Text>
          <Text
            style={{
              fontSize: TEXT.text,
              fontWeight: 'normal',
              marginVertical: 15,
              color: '#fff',
            }}>
            Rester informer sur les nouveaux menus,plats et recettes
          </Text>
          <View style={{marginVertical: 15}}>
            <ButtonComponent
              text="Activer les notifications"
              bordercolor={COLOR.primary}
              backgroundcolor="#fff"
              textcolor={COLOR.primary}
              width="100%"
              elevation={0}
              onpress={() => {}}
            />
          </View>
          <View style={{marginVertical: 15}}>
            <ButtonComponent
              text="Ne pas activer"
              backgroundcolor={COLOR.primary}
              textcolor="#fff"
              width="100%"
              bordercolor="#fff"
              elevation={0}
              onpress={() => {}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default NotificationPage;
