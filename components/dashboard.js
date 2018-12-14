import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text, View, TouchableHighlight, Platform, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import WelcomeScreen from './welcome-screen'
import FraudReport from './fraud-report'
import PinPadStatus from './pinpad-status'
import EmvNonemv from './emv-nonemv'
import BatchDetails from './batch-details'
import CardBrands from './card-brands'

const AppStackNavigator = createMaterialTopTabNavigator(
  {
    Fraud: {screen: createStackNavigator(
    {
      WelcomeScreen: { screen: FraudReport,
        navigationOptions:{
          header: null,
        }
      },
      BatchDetails: { screen: BatchDetails
      },

    }),
    navigationOptions:{
      tabBarLabel: "Fraud Report"
    }
  },

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
      style: {
        backgroundColor: '#f2f2f2',
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      indicatorStyle: {
        height: 0
      }
    },
  }
)

export default createAppContainer(AppStackNavigator);

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

