import React, {Component} from 'react';
import { Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Recipe from './recipes';
import AddRecipe from './recipeAdd';
import RecipeDetail from './recipeDetail';


export const Tabs = createBottomTabNavigator({
  'Recipe': {
    screen: Recipe,
    navigationOptions: {
      tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />   
    },
  },
  'Add Recipe': {	
    screen: AddRecipe,
    navigationOptions: {
      tabBarLabel: 'Add Recipes',
       tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const BookcaseStack = createStackNavigator({
  Recipe: {
    screen: Recipe,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  RecipeDetail: {
    screen: RecipeDetail,
    navigationOptions: ({navigation}) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    }),
  },
});


export const createRootNavigator = () => {
  return createStackNavigator(
    {
      BookcaseStack: {
        screen: BookcaseStack,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal"
    }
  );
};