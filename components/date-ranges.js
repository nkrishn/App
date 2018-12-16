//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

// create a component
class DateRange extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
        <View style={{flex: 0.25, flexDirection: 'row', marginLeft: 25}}>
            <View style={{flex: 0.25, flexDirection: 'column' }} >
                <TouchableHighlight style={[styles.selection, { backgroundColor: this.props.styleProps.threeDay.backgroundColor }]}  
                onPress={() => { this.props.onChange('threeDay') } }>
                    <Text style={[styles.dateFont, { color: this.props.styleProps.threeDay.color}]}>{label(this.props.label, 'one', '1D')}</Text>
                </TouchableHighlight>
            </View>
            <View style={{flex: 0.25, flexDirection: 'column' }} >
                <TouchableHighlight style={[styles.selection, { backgroundColor: this.props.styleProps.oneWeek.backgroundColor }]} 
                onPress={() => { this.props.onChange('oneWeek') } }>
                    <Text style={[styles.dateFont, { color: this.props.styleProps.oneWeek.color}]}>{label(this.props.label, 'two', '1W')}</Text>
                </TouchableHighlight>
            </View>
            <View style={{flex: 0.25, flexDirection: 'column' }} >
                <TouchableHighlight style={[styles.selection, { backgroundColor: this.props.styleProps.oneMonth.backgroundColor } ]}  
                    onPress={() => { this.props.onChange('oneMonth') } } >
                    <Text style={[styles.dateFont, { color: this.props.styleProps.oneMonth.color}]}>{label(this.props.label, 'three', '1M')}</Text>
                </TouchableHighlight>
            </View>
            <View style={{flex: 0.25, flexDirection: 'column' }} >
                <TouchableHighlight style={[styles.selection, { backgroundColor: this.props.styleProps.threeMonth.backgroundColor } ]} 
                onPress={() => { this.props.onChange('threeMonth') } }>
                    <Text style={[styles.dateFont, { color: this.props.styleProps.threeMonth.color}]}>{label(this.props.label, 'four', '3M')}</Text>
                </TouchableHighlight>
            </View>
            <View style={{flex: 0.25, flexDirection: 'column' }} >
                <TouchableHighlight style={[styles.selection, { backgroundColor: this.props.styleProps.oneYear.backgroundColor } ]} 
                onPress={() => { this.props.onChange('oneYear') } }  >
                    <Text style={[styles.dateFont, { color: this.props.styleProps.oneYear.color}]}>{label(this.props.label, 'five', '1Y')}</Text>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height; 

// define your styles
const styles = StyleSheet.create({
    selection: {
      width: deviceWidth * 9/100, 
      height: deviceHeight * 3/100, 
      borderRadius: 6
    },
    dateFont: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 8,
        marginTop: 3
    }
});

const label = (labelObj, arg, defaultVal) => {
 return (labelObj && labelObj[arg] ? labelObj[arg] : defaultVal)
}
//make this component available to the app
export default DateRange;
