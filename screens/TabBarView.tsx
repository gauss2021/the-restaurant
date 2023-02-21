import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteIcon from '../components/FavoriteIcon';
import NotificationIcon from '../components/NotificationIcon';
import ProfilImage from '../components/ProfilImage';
import SearchIcon from '../components/SearchIcon';
import StoreIcon from '../components/StoreIcon';
import UserIcon from '../components/UserIcon';
import {COLOR} from '../config';
import Login from './Login';
import Store from './Store';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="store"
      screenOptions={{
        tabBarShowLabel: false,
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
            return <ProfilImage />;
          },
          headerRight(props) {
            return <NotificationIcon />;
          },
          tabBarIcon: ({focused}) => {
            return <StoreIcon />;
          },
        }}
      />
      <Tab.Screen
        name="recherche"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            return <SearchIcon />;
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
