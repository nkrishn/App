import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import FraudReport from './fraud-report'
import PinPadStatus from './pinpad-status'
import EmvNonemv from './emv-nonemv'
import CardBrands from './card-brands'
import Location from './location';
import PinPadDownSite from './pinpad-down-site'
import Site from './site';
import  Order from './order';
import  OrderDetails from './order-details';
import  Rekey from './rekey';

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

    PinPadStatus: { screen: createStackNavigator(
      {
        PinpadScreen: { screen: PinPadStatus,
          navigationOptions:{
            header: null,
          }
        },
        PinpadSite: {
          screen: PinPadDownSite,
          navigationOptions:{
            header: null,
          }
        }
      }),
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
    Order: { screen: createStackNavigator(
      {
        Order: { screen: Order,
          navigationOptions:{
            header: null,
          }
        },
        OrderDetails: {
          screen: OrderDetails,
          navigationOptions:{
            header: null,
          }
        },
      }),
      navigationOptions:{
        tabBarLabel: "Orders",
      } 
    },
    Rekey: { screen: Rekey,
      navigationOptions:{
        tabBarLabel: "Rekey Status",
      }
    }
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      // style: {
      //   backgroundColor: '#f2f2f2',
      // },
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      indicatorStyle: {
        backgroundColor: '#ffffff'
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

