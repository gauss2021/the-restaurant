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

function Register(): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <ScrollView>
      <View style={{backgroundColor: COLOR.primary, height: '100%'}}>
        <View
          style={{
            height: 20,
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
          <Text
            style={{fontSize: TEXT.title, fontWeight: 'bold', color: '#333'}}>
            S'enregistrer
          </Text>
          <Text
            style={{
              fontSize: TEXT.text,
              fontWeight: 'normal',
              marginVertical: 15,
            }}>
            Veuillez remplir tous ces champs
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
              <UserIcon />
            </View>
            <TextInput
              style={{flex: 1}}
              placeholder="Veuillez entrer votre nom"
            />
          </View>

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
              <UserIcon />
            </View>
            <TextInput
              style={{flex: 1}}
              placeholder="Veuillez entrer votre prenom"
            />
          </View>

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
            <TextInput
              style={{flex: 1}}
              placeholder="Veuillez entrer votre adresse email"
            />
          </View>

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
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <View style={{marginRight: 10}}>
                <KeyIcon />
              </View>
              <TextInput
                secureTextEntry={!visible}
                placeholder="mot de passe"
              />
            </View>
            <Pressable
              style={{width: 24}}
              onPress={() => {
                setVisible(!visible);
              }}>
              <Visibility visibility={visible} />
            </Pressable>
          </View>
          <View style={{marginVertical: 15}}>
            <ConditionUtilisation />
          </View>
          <ButtonComponent
            bordercolor="gray"
            elevation={10}
            text="S'enregistrer"
            backgroundcolor={COLOR.primary}
            width="100%"
            textcolor="#fff"
            onpress={() => {}}
          />
          <View>
            <GoogleButton
              width="100%"
              backgroundcolor="#fff"
              text="S'enregistrer avec google"
              textcolor="gray"
              onpress={() => {}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
