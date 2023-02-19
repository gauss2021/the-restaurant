/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="notificationpage">
        <Stack.Screen
          name="Se connecter"
          options={{
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
          component={Login}
        />
        <Stack.Screen
          name="S'enregistrer"
          options={{
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
