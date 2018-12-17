//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class OrderDetails extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <View style={{ flex: 0.1, flexDirection: 'row', marginTop: 25}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>OrderDetails</Text>
                </View>

                <View style={ {flex: 0.1, flexDirection: 'row'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', padding: 10}}>Product:</Text>
                    <Text style={{ fontSize: 12, padding: 10}}>Transaction Link</Text>
                </View>

                <View style={ {flex: 0.1, flexDirection: 'row'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', padding: 10}}>Manufacturer:</Text>
                    <Text style={{ fontSize: 12, padding: 10}}>Merchant Link</Text>
                </View>
                <View style={ {flex: 0.1, flexDirection: 'row'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', padding: 10}}>Part Number:</Text>
                    <Text style={{ fontSize: 12, padding: 10, paddingTop: 20}}>PE000856</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
});

//make this component available to the app
export default OrderDetails;
