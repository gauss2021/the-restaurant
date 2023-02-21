import React from 'react';

import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import {Line} from 'react-native-svg';
import BoxCategory from '../components/BoxCategory';
import BoxLivraison from '../components/BoxLivraison';
import ButtonComponent from '../components/ButtonComponent';
import ConditionUtilisation from '../components/ConditionUtilisation';
import DinnerIcon from '../components/DinnerIcon';
import EmailIcon from '../components/EmailIcon';
import ExploreIcon from '../components/ExploreIcon';
import GoogleButton from '../components/GoogleButton';
import KeyIcon from '../components/KeyIcon';
import LineComponent from '../components/Line';
import MenuIcon from '../components/MenuIcon';
import UserIcon from '../components/UserIcon';
import Visibility from '../components/Visibility';
import {COLOR, TEXT} from '../config';

function Store(): JSX.Element {
  return (
    <ScrollView style={{padding: 15}}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: 24, color: '#000', fontWeight: '400'}}>
          Salut,
        </Text>
        <Text style={{color: COLOR.secondary, fontSize: 24}}>Gauss!</Text>
      </View>
      <View>
        <Text style={{fontSize: TEXT.subtitle}}>Pret a manger?</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', gap: 15}}>
        <BoxLivraison />
        <BoxCategory
          onpress={() => {}}
          icon={<MenuIcon />}
          premierMot="Au menu"
          deuxiemeMot={
            <Text>
              Plus de
              <Text style={{fontWeight: 'bold', fontSize: 22}}>56 </Text>
              plats
            </Text>
          }
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', gap: 15}}>
        <BoxCategory
          onpress={() => {}}
          icon={<DinnerIcon />}
          premierMot="Dinner"
          deuxiemeMot={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 22, fontWeight: 'bold'}}>10 </Text>
              <Text>plats ce soir</Text>
            </View>
          }
        />
        <BoxCategory
          onpress={() => {}}
          icon={<ExploreIcon />}
          premierMot="Explorer"
          deuxiemeMot={
            <Text style={{color: COLOR.secondary}}>
              Decouvrer le plat du jour
            </Text>
          }
        />
      </View>
      <View
        style={{
          marginVertical: 15,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Offres personnels</Text>
        <Pressable onPress={() => {}}>
          <Text style={{color: COLOR.secondary}}>Tous voir</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Store;
