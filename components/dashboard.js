import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text, View, TouchableHighlight, Platform, StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import WelcomeScreen from './welcome-screen'
import PinPadStatus from './pinpad-status'
import EmvNonemv from './emv-nonemv'
import BatchDetails from './batch-details'
import CardBrands from './card-brands'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppStackNavigator = createBottomTabNavigator(
  {
    Fraud: createStackNavigator(
    {
      WelcomeScreen: { screen: WelcomeScreen,
        navigationOptions:{
          header: null,
        }
      },
      BatchDetails: BatchDetails
    }),

    PinPadStatus: { screen: PinPadStatus,
      navigationOptions:{
        tabBarLabel: "PinPad Status",
      }
    },
    EMVVSNONEMV: { screen: EmvNonemv,
      navigationOptions:{
        tabBarLabel: "EMV VS NON-EMV",
      }
    },
    CardBrand: { screen: CardBrands,
      navigationOptions:{
        tabBarLabel: "Compare CardBrands",
      }
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default createAppContainer(AppStackNavigator);
// const AppStackNavigator =  new StackNavigator({
//   WelcomeScreen: { screen: WelcomeScreen},
//   LoginScreen: { screen: LoginScreen }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

