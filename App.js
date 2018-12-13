import React from 'react';
import { StyleSheet, Text, View, Image, 
  TextInput,
  Button,
  TouchableHighlight,
  Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import  Dashboard from './components/dashboard';
import { Dimensions } from "react-native";


class App extends React.Component { 
  constructor(props) {
    super(props);
    state = {
      username   : '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.Logo}  source={require('./assets/ml.jpg')} />
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="User Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.contactbuttonContainer, styles.contactButton]} onPress={() => this.onClickListener('terms')}>
          <Text style={styles.contactText}>Terms & Conditions</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
    },
    Dashboard: {
      screen: Dashboard,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderColor: '#aaa',
      borderWidth: 2,
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      borderBottomWidth: 1,
      width : deviceWidth * 85 / 100,
      
      height: deviceHeight * 5 / 100,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height: deviceHeight * 6 / 100,
      marginLeft:16,
      borderBottomColor: '#aaa',
      flex:1,
  },
  inputIcon:{
    width : deviceWidth * 7 / 100,
    height: deviceHeight * 4 / 100,
    marginLeft:15,
    justifyContent: 'center'
  },
  Logo:{
    width : deviceWidth * 50 / 100,
    height: deviceHeight * 20 / 100,
    marginLeft: -5,
    justifyContent: 'center'
  },
  buttonContainer: {
    width : deviceWidth * 85 / 100,
    height: deviceHeight * 5 / 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:5,
  },

  contactbuttonContainer: {
    width : deviceWidth * 85 / 100,
    height: deviceHeight * 5 / 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    //width:400,
    borderRadius:5,
    //marginTop: 180
  },
  loginButton: {
    backgroundColor: "#2979EF"
  },
  contactButton: {
      borderColor: '#aaa',
      borderWidth: 2
  },
  contactText: {
    color: '#aaa',
  },
  loginText: {
    color: 'white',
  }
});
