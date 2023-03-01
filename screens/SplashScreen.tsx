import AppIntroSlider from '@unbogify/react-native-app-intro-slider';
import React, {useState} from 'react';

import {View, Text, Image, Alert, Pressable} from 'react-native';

import {COLOR, TEXT} from '../config';
import Login from './Login';

const sliders = [
  {
    id: 1,
    title: 'Bienvenue au The Restaurant',
    description:
      'Obtener vos plats en line, sans se deplacer. Des plats faites par des cuisiniers certifiers',
    image: require('./../assets/images/splash_1.png'),
  },
  {
    id: 2,
    title: 'Service de livraison rapide',
    description: 'Nos livreurs sont des professionels',
    image: require('./../assets/images/splash_2.png'),
  },
  {
    id: 3,
    title: 'Systeme de paiement facile',
    description:
      'Vous avez le choix entre payer avec une carte de credit,momo ou surplace',
    image: require('./../assets/images/splash_3.png'),
  },
];

function SplashScreen({navigation}: {navigation: any}) {
  const [showHomePage, setShowHomePage] = useState(false);

  if (!showHomePage) {
    return (
      <AppIntroSlider
        renderDoneButton={() => (
          <Pressable
            onPress={() => {
              navigation.navigate('login');
            }}>
            <Text style={{color: '#000', fontSize: 18}}>Commencer</Text>
          </Pressable>
        )}
        renderSkipButton={() => (
          <Text style={{color: '#000', fontSize: 18}}>Passer</Text>
        )}
        renderNextButton={() => (
          <Text style={{color: '#000', fontSize: 18}}>Suivant</Text>
        )}
        activeDotStyle={{
          backgroundColor: COLOR.secondary,
        }}
        data={sliders}
        showSkipButton={true}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text style={{fontSize: TEXT.title}}>{item.title}</Text>
              <Image
                source={item.image}
                style={{width: 200, height: 150, marginVertical: 20}}
              />

              <Text style={{fontSize: TEXT.subtitle}}>{item.description}</Text>
            </View>
          );
        }}
      />
    );
  }

  return <Login navigation={navigation} />;
}

export default SplashScreen;
