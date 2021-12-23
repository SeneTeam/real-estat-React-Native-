/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Welcome: 'welcome',
      Login: 'login',
      ForgotPass: 'forgotpass',
      EnterCode: 'entercode',
      CreatePassword: 'createpassword',
      Register: 'register',
      QuestionStart: 'questionstart',
      QuestionGender: 'questiongender',
      QuestionAge: 'questionage',
      QuestionId: 'questionid',
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'search',
            },
          },
          Feed: {
            screens: {
              FeedScreen: 'feed',
            },
          },
          Favorite: {
            screens: {
              FavoriteScreen: 'favorite',
            },
          },
          User: {
            screens: {
              UserScreen: 'user',
            },
          }
        },
      },
    },
  },
};

export default linking;
