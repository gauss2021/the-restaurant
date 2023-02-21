import React, {useState} from 'react';

import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import {Line} from 'react-native-svg';
import AddIcon from '../components/addIcon';
import BoxCategory from '../components/BoxCategory';
import BoxLivraison from '../components/BoxLivraison';
import ButtonComponent from '../components/ButtonComponent';
import ConditionUtilisation from '../components/ConditionUtilisation';
import DinnerIcon from '../components/DinnerIcon';
import EmailIcon from '../components/EmailIcon';
import ExploreIcon from '../components/ExploreIcon';
import GoogleButton from '../components/GoogleButton';
import ItemCategory from '../components/ItemCategory';
import ItemProduct from '../components/itemsProduct';
import KeyIcon from '../components/KeyIcon';
import LineComponent from '../components/Line';
import MenuIcon from '../components/MenuIcon';
import UserIcon from '../components/UserIcon';
import Visibility from '../components/Visibility';
import {COLOR, TEXT} from '../config';

function Store(): JSX.Element {
  const [activeCategory, steActiveCategory] = useState(false);
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
      <ScrollView horizontal={true} style={{marginVertical: 15}}>
        <ItemCategory
          onpress={() => {}}
          activeCategory={!activeCategory}
          text="Riz"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Burger"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Bierre"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Jus"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Eau"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Poulet"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Pizza"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Gateaux"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Pain"
        />
        <ItemCategory
          onpress={() => {}}
          activeCategory={activeCategory}
          text="Fruits"
        />
      </ScrollView>
      <View
        style={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 15,
          paddingBottom: 25,
        }}>
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
        <ItemProduct nom="burger" prix={500} />
      </View>
    </ScrollView>
  );
}

export default Store;
