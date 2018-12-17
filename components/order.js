//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, 
    TouchableHighlight, ScrollView, Image } from 'react-native';

// create a component
class Order extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Orders</Text>
                {['Dave & Busters-Germantown, MD', 
                'Dave & Busters-Baltimore, MD', 
                'Dave & Busters-Silver Spring, MD',
                'Dave & Busters-Bethesda, MD',
                'Dave & Busters-Rockville, MD',
                'Dave & Busters-College Park, MD',
                'Dave & Busters-Gaithesberg, MD',
                'Dave & Busters-Annapolis, MD'].map((site, index) => {
                return <TouchableHighlight style={styles.block} key={site} >
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 0.45, flexDirection: 'column'}}>
                        <View style={{flex: 1, flexDirection: 'row'}}><Text style={[styles.siteName, {paddingTop: 5}]}>{`Order #${2067872+index}`}</Text></View>
                        <View style={{flex: 1, flexDirection: 'row'}}><Text style={styles.siteName}>{`${site.split('-')[0]} # ${120+index}`}</Text></View>
                        <View style={{flex: 1, flexDirection: 'row'}}><Text style={styles.siteName}>{site.split('-')[1]}</Text></View>     
                        
                        </View>
                        <View style={{flex: 0.40, flexDirection: 'column'}}>
                            <View style={{flex: 1, flexDirection: 'row', padding: 4}}>
                                <View style={{flex: 0.1, flexDirection: 'column'}}>
                                    <View style={{flex: 0.25, flexDirection: 'row', 
                                    backgroundColor: 'skyblue', borderTopLeftRadius: 20}}></View>
                                    <View style={{flex: 0.3, flexDirection: 'row', 
                                    backgroundColor: index % 2 == 0 && index % 3 == 0 ? 'grey': 'skyblue'}}></View>
                                    <View style={{flex: 0.3, flexDirection: 'row', 
                                    backgroundColor: index % 2 == 0 && index % 3 == 0 && index % 6 == 0 ? 'grey': 'skyblue'}}></View>
                                    <View style={{flex: 0.5, flexDirection: 'row', 
                                    backgroundColor: index % 2 == 0 ? 'grey': 'skyblue' , borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}></View>
                                </View>
                                <View style={{flex: 0.8, flexDirection: 'column', padding: 1, paddingLeft: 8}}>
                                    <View style={{flex: 0.25, flexDirection: 'row'}}><Text>Received</Text></View>
                                    <View style={{flex: 0.25, flexDirection: 'row'}}><Text>Processing</Text></View>
                                    <View style={{flex: 0.25, flexDirection: 'row'}}><Text>Shipped</Text></View>
                                    <View style={{flex: 0.25, flexDirection: 'row'}}><Text>Installed</Text></View>
                                </View>
                            </View>
                        </View>
                        <View style={{flex: 0.25, flexDirection: 'column'}}>
                            <Image style={{height: 55, width: index % 4 == 0 ? 85 : 60, marginTop: 10}} 
                            source={index % 4 == 0 ? require('../assets/tl.png'): require('../assets/dandb.png')} 
                            onPress={() => this.props.navigation.navigate('OrderDetails')}/>
                            <Text style={{padding: 10, color: 'cadetblue'}} onPress={() => this.props.navigation.navigate('OrderDetails')}>Details>></Text>
                        </View>
                      </View>
                  </TouchableHighlight>
                })}
            </View>
            </ScrollView>
        );
    }
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height; 
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25
    },
    block: {
        backgroundColor: 'rgba(27,31,35,.05)',
        width: deviceWidth * 95/100,
        height: deviceWidth * 25/100,
        borderRadius: 10,
        marginTop: 25,
    },
    siteName: {
      fontWeight: 'bold',
      paddingLeft: 2,  
    }
});

//make this component available to the app
export default Order;
