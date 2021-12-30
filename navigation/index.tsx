/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';

import WelcomeScreen from '../screens/authScreens/WelcomeScreen';

// ****************** Auth ***************************
import LoginScreen from '../screens/authScreens/LoginScreen';
import ForgotPassScreen from '../screens/authScreens/ForgotPassScreen';
import EnterCodeScreen from '../screens/authScreens/EnterCodeScreen';
import CreatePasswordScreen from '../screens/authScreens/CreatePasswordScreen';
import RegisterScreen from '../screens/authScreens/RegisterScreen';


// ****************** Question ***************************
import QuestionStartScreen from '../screens/questionScreens/QuestionStart';
import QuestionGenderScreen from '../screens/questionScreens/QuestionGender';
import QuestionAgeScreen from '../screens/questionScreens/QuestionAge';
import QuestionIdScreen from '../screens/questionScreens/QuestionId';

// ****************** TAB bar **********************
import HomeScreen from '../screens/tabScreens/homescreen/HomeScreen';
import SearchScreen from '../screens/tabScreens/homesearch/SearchScreen';
import UserScreen from '../screens/tabScreens/userscreen/UserScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeDetailScreen from '../screens/tabScreens/homescreen/HomeDetailScreen';
//***************** Feed Screen **************
import FeedScreen from '../screens/tabScreens/feedscreen/FeedScreen';
//***************** favorite ********************
import FavoriteScreen from '../screens/tabScreens/favorite/FavoriteScreen';
import FavoriteDetailScreen from '../screens/tabScreens/favorite/FavoriteDetailScreen';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPass" component={ForgotPassScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EnterCode" component={EnterCodeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionStart" component={QuestionStartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionGender" component={QuestionGenderScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionAge" component={QuestionAgeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuestionId" component={QuestionIdScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginHorizontal: 15,
          marginBottom: 15,
          height: 76,
          borderRadius: 25,
          position: 'absolute'
        },
        tabBarShowLabel: false
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Homestack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="email-search" color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cards" color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="account" color={color} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

const Home_Stack = createNativeStackNavigator();
function Homestack() {
  return (
    <Home_Stack.Navigator screenOptions={{ headerShown: false }}>
      <Home_Stack.Screen name="Home" component={HomeScreen} />
      <Home_Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </Home_Stack.Navigator>
  );
}
const Favorite_Stack = createNativeStackNavigator();
function FavoriteStack() {
  return (
    <Favorite_Stack.Navigator screenOptions={{ headerShown: false }}>
      <Favorite_Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Favorite_Stack.Screen name="FavoriteDetail" component={FavoriteDetailScreen} />
    </Favorite_Stack.Navigator>
  );
}
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}
