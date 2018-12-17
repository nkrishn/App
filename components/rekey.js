//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, 
    TouchableHighlight, ScrollView, Image } from 'react-native';

// create a component
class Rekey extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Rekey Status</Text>
                {['IHOP-Germantown', 
                'IHOP-Baltimore', 
                'IHOP-Silver Spring',
                'IHOP-Bethesda',
                'IHOP-Rockville',
                'IHOP-College Park',
                'IHOP-Gaithesberg',
                'IHOP-Annapolis'].map((site, index) => {
                return <TouchableHighlight style={styles.block} key={site} >
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 0.6, flexDirection: 'column'}}>
                        <View style={{flex: 0.25, flexDirection: 'row'}}><Text style={styles.siteName}>{`Case #${2067872+index}`}</Text></View>
                        <View style={{flex: 0.25, flexDirection: 'row'}}><Text style={styles.siteName}>{`${site.split('-')[0]} # ${3241+index} - ${site.split('-')[1]} `} </Text></View> 
                        <View style={{flex: 0.25, flexDirection: 'row'}}><Text style={styles.siteName}>{`Amount: $ ${2000+index*34.25}`}</Text></View>
                        </View>
                        
                        <View style={{flex: 0.40, flexDirection: 'column'}}>
                            <View style={{flex: 1, flexDirection: 'row', padding: 4}}>
                                <View style={{flex: 0.1, flexDirection: 'column'}}>
                                    <View style={{flex: 0.25, flexDirection: 'row', 
                                    backgroundColor: 'skyblue', borderTopLeftRadius: 20}}></View>
                                    <View style={{flex: 0.3, flexDirection: 'row', 
                                    backgroundColor: index % 2 == 0 && index % 3 == 0 ? 'grey': 'skyblue'}}></View>
                                    <View style={{flex: 0.5, flexDirection: 'row', 
                                    backgroundColor: index % 2 == 0 ? 'grey': 'skyblue' , borderBottomRightRadius: '50%', borderBottomLeftRadius: '50%'}}></View>
                                </View>
                                <View style={{flex: 0.8, flexDirection: 'column', padding: 1, paddingLeft: 8}}>
                                    <View style={{flex: 0.4, flexDirection: 'row'}}><Text>Received</Text></View>
                                    <View style={{flex: 0.4, flexDirection: 'row'}}><Text>Processing</Text></View>
                                    <View style={{flex: 0.25, flexDirection: 'row'}}><Text>Funded</Text></View>
                                </View>
                            </View>
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
      padding: 10,
      fontWeight: 'bold'  
    }
});

//make this component available to the app
export default Rekey;
