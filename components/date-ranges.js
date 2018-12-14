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
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 25 }}>
                <TouchableHighlight style={{flex: 0.25, flexDirection: 'column' }} onPress={() => { this.props.onChange('threeDay') } }>
                    <View style={[styles.selection, this.props.styleProps.threeDay ]}  >
                        <Text style={styles.dateFont}>3D</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{flex: 0.25, flexDirection: 'column' }} onPress={() => { this.props.onChange('oneWeek') } }>
                    <View style={[styles.selection, this.props.styleProps.oneWeek]} >
                        <Text style={styles.dateFont}>1W</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{flex: 0.25, flexDirection: 'column' }} onPress={() => { this.props.onChange('oneMonth') } }>
                    <View style={[styles.selection, this.props.styleProps.oneMonth ]}   >
                        <Text style={styles.dateFont}>1M</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{flex: 0.25, flexDirection: 'column' }} onPress={() => { this.props.onChange('threeMonth') } }>
                    <View style={[styles.selection, this.props.styleProps.threeMonth ]} >
                        <Text style={styles.dateFont}>3M</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{flex: 0.25, flexDirection: 'column' }} onPress={() => { this.props.onChange('oneYear') } }>
                    <View style={[styles.selection, this.props.styleProps.oneYear]}  >
                        <Text style={styles.dateFont}>1Y</Text>
                    </View>
                </TouchableHighlight>
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
