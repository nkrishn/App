import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import FraudReport from './fraud-report'
import PinPadStatus from './pinpad-status'
import EmvNonemv from './emv-nonemv'
import CardBrands from './card-brands'
import Location from './location';
import Site from './site';

const AppStackNavigator = createMaterialTopTabNavigator(
  {
    Fraud: {
      screen: createStackNavigator(
        {
          WelcomeScreen: { screen: FraudReport,
            navigationOptions:{
              header: null,
            }
          },
          Location: {
            screen: Location,
            navigationOptions:{
              header: null,
            }
          },
          Site: {
            screen: Site,
            navigationOptions:{
              header: null,
            }
          }
        }
      ),
      navigationOptions:{
        tabBarLabel: "Fraud Report",
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
        tabBarLabel: "CardBrands",
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
      },
      lableStyle:{
        fontWeight: 400,
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

