//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

// create a component
class DateRange extends Component {
    constructor(props) {
        super(props);
        
    }

    onPressRange(button) {
       this.props.onChange(button);
    }

    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 25 }}>
                <TouchableHighlight style={[styles.selection, this.props.styleProps.threeDay ]}  onPress={this.onPressRange.bind(this, 'threeDay')}  >
                    <Text>3d</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.selection,  this.props.styleProps.oneWeek ]} onPress={this.onPressRange.bind(this,'oneWeek')}>
                    <Text>1w</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.selection,  this.props.styleProps.oneMonth ]} onPress={this.onPressRange.bind(this,'oneMonth')}>
                    <Text>1m</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.selection,  this.props.styleProps.threeMonth ]} onPress={this.onPressRange.bind(this,'threeMonth')}>
                    <Text>3m</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.selection,  this.props.styleProps.oneYear ]} onPress={this.onPressRange.bind(this,'oneYear')}>
                    <Text>1y</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    selection: {
      width: 25, 
      height: 25, 
      marginRight: 50
    }
});

//make this component available to the app
export default DateRange;
