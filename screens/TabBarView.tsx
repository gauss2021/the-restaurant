import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteIcon from '../components/FavoriteIcon';
import NotificationIcon from '../components/NotificationIcon';
import ProfilImage from '../components/ProfilImage';
import SearchIcon from '../components/SearchIcon';
import StoreIcon from '../components/StoreIcon';
import UserIcon from '../components/UserIcon';
import {COLOR} from '../config';
import Login from './Login';
import SearchPage from './SearchPage';
import Store from './Store';
import {TextInput, View} from 'react-native';
import PanierIcon from '../components/PanierIcon';
import SearchBarre from '../components/SearchBarre';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="store"
      screenOptions={{
        tabBarShowLabel: false,
        headerLeftContainerStyle: {padding: 15},
        headerRightContainerStyle: {padding: 15},
        tabBarActiveBackgroundColor: COLOR.secondary,
        tabBarInactiveBackgroundColor: COLOR.primary,
        tabBarStyle: {
          backgroundColor: COLOR.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarIconStyle: {
          color: '#fff',
        },
      }}>
      <Tab.Screen
        name="store"
        component={Store}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            display: 'none',
          },
          headerLeft() {
            return (
              <View>
                <ProfilImage />
              </View>
            );
          },
          headerRight(props) {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{marginRight: 10}}>
                  <NotificationIcon />
                </View>
                <PanierIcon />
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return <StoreIcon />;
          },
        }}
      />
      <Tab.Screen
        name="recherche"
        component={SearchPage}
        options={{
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => {
            return <SearchIcon />;
          },
          headerTitle() {
            return <SearchBarre />;
          },
        }}
      />
      <Tab.Screen
        name="favoris"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            return <FavoriteIcon />;
          },
        }}
      />
      <Tab.Screen
        name="profil"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            return <UserIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
