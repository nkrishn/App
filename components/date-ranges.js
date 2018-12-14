//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

// create a component
class DateRange extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={{flex: 0.4, flexDirection: 'row', marginLeft: 25}}>
                <View style={{flex: 0.25, flexDirection: 'column' }} >
                    <TouchableHighlight style={[styles.selection, this.props.styleProps.threeDay ]}  onPress={() => { this.props.onChange('threeDay') } }>
                        <Text style={styles.dateFont}>3D</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 0.25, flexDirection: 'column' }} >
                    <TouchableHighlight style={[styles.selection, this.props.styleProps.oneWeek]} onPress={() => { this.props.onChange('oneWeek') } }>
                        <Text style={styles.dateFont}>1W</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 0.25, flexDirection: 'column' }} >
                    <TouchableHighlight style={[styles.selection, this.props.styleProps.oneMonth ]}  onPress={() => { this.props.onChange('oneMonth') } } >
                        <Text style={styles.dateFont}>1M</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 0.25, flexDirection: 'column' }} >
                    <TouchableHighlight style={[styles.selection, this.props.styleProps.threeMonth ]} onPress={() => { this.props.onChange('threeMonth') } }>
                        <Text style={styles.dateFont}>3M</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 0.25, flexDirection: 'column' }} >
                    <TouchableHighlight style={[styles.selection, this.props.styleProps.oneYear]} onPress={() => { this.props.onChange('oneYear') } }  >
                        <Text style={styles.dateFont}>1Y</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    selection: {
      width: 35, 
      height: 25, 
      borderRadius: 6
    },
    dateFont: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 8,
        marginTop: 3
    }
});

//make this component available to the app
export default DateRange;
