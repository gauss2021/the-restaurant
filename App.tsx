/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import {COLOR, TEXT} from './config';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import Visibility from './components/Visibility';
import CloseIcon from './components/CloseIcon';
import RegisterPhone from './screens/RegisterPhone';
import NotificationPage from './screens/NotificationPage';
import MyTabs from './screens/TabBarView';
import ProfilImage from './components/ProfilImage';
import SplashScreen from './screens/SplashScreen';
import SearchPage from './screens/SearchPage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashscreen">
        <Stack.Screen
          name="login"
          options={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            title: 'Se connecter',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: TEXT.subtitle,
            },
            headerStyle: {
              backgroundColor: COLOR.primary,
            },
          }}
          component={Login}
        />
        <Stack.Screen
          name="S'enregistrer"
          options={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLOR.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: TEXT.subtitle,
            },
          }}
          component={Register}
        />
        <Stack.Screen
          name="mot de passe oublie"
          options={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLOR.primary,
            },
            headerTitle: () => {
              return null;
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: TEXT.subtitle,
            },
            headerLeft: () => {
              return <CloseIcon />;
            },
          }}
          component={ForgetPassword}
        />

        <Stack.Screen
          name="deuxime etape"
          options={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: COLOR.primary,
            },
            headerTitle: () => {
              return null;
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: TEXT.subtitle,
            },
            headerLeft: () => {
              return <CloseIcon />;
            },
          }}
          component={RegisterPhone}
        />

        <Stack.Screen
          name="notificationpage"
          options={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitle: () => {
              return null;
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: TEXT.subtitle,
            },
            headerLeft: () => {
              return <CloseIcon />;
            },
          }}
          component={NotificationPage}
        />
        <Stack.Screen
          name="mytabs"
          options={{
            headerShown: false,
          }}
          component={MyTabs}
        />
        <Stack.Screen
          name="splashscreen"
          options={{
            headerShown: false,
          }}
          children={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
