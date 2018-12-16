//import liraries
import React, { Component } from 'react';
import { View, Text as Texter, StyleSheet, ScrollView } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Text } from 'react-native-svg'

// create a component
class PinPadDownSite extends Component {
    constructor() {
        super();
        this.state = { load: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ load: false})
        }, 1000)
    }

    render() {
        const data = [
            {
                value: 1,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 2,
                label: 'IHOP22 - Silver Spring',
            },
            {
                value: 2,
                label: 'IHOP23 - Annapolis',
            },
            {
                value: 1,
                label: 'IHOP21 - Columbia',
            },
            {
                value: 2,
                label: 'IHOP21 - Rockville',
            },
            {
                value: 3,
                label: 'IHOP21 - Cumberland',
            },
            {
                value: 4,
                label: 'IHOP21 - Clarksberg',
            },
            {
                value: 1,
                label: 'IHOP21 - Baltimore',
            },
            {
                value: 8,
                label: 'IHOP21 - Frederick',
            },
            {
                value: 1,
                label: 'IHOP21 - OceanCity',
            },
            {
                value: 2,
                label: 'IHOP21 - Lanham',
            },
            {
                value: 3,
                label: 'IHOP21 - Beltsville',
            },
            {
                value: 4,
                label: 'IHOP21 - Croftol',
            },
            {
                value: 3,
                label: 'IHOP21 - Odenton',
            },
            {
                value: 2,
                label: 'IHOP21 - Gaithersberg',
            },
            {
                value: 3,
                label: 'IHOP21 - Pikesville',
            },
            {
                value: 4,
                label: 'IHOP21 - CrazyVille',
            },
            {
                value: 2,
                label: 'IHOP21 - mobileVille',
            },
            {
                value: 1,
                label: 'IHOP21 - Techville',
            },
            {
                value: 2,
                label: 'IHOP22 - Wheaton',
            },
        ]

        const CUT_OFF = 5
        const Labels = ({  x, y, bandwidth, data }) => (
            data.map(({value}, index) => (
                <Text
                    key={ index }
                    x={ value > CUT_OFF ? x(0) + 10 : x(value) + 10 }
                    y={ y(index) + (bandwidth / 2) }
                    fontSize={ 14 }
                    fill={ value > CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )
        
        if (this.state.load) {
            return  <Texter style={{textAlign: 'center', marginTop: 50}}>Loading....</Texter>
        } else {
        return (
            <ScrollView>
            <Texter style={styles.labelStyle}>PINPADS DOWN BY SITE</Texter>  
            <View style={{ flexDirection: 'row', height: 700, paddingVertical: 16 }}>
            <YAxis
                data={data}
                yAccessor={({ index }) => index}
                scale={scale.scaleBand}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.2}
                formatLabel={(_, index) => data[ index ].label}
            />
            <BarChart
                style={{ flex: 0.9, marginLeft: 8 }}
                data={data}
                horizontal={true}
                yAccessor={({ item }) => item.value}
                svg={{ fill: '#f06292' }}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.4}
                gridMin={0}
            >
                <Grid direction={Grid.Direction.VERTICAL}/>
                <Labels/>
            </BarChart>
            </View>
        </ScrollView>
        )};
    }
}

// define your styles
const styles = StyleSheet.create({
    labelStyle: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      }
});


//make this component available to the app
export default PinPadDownSite;
