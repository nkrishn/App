//import liraries
import React, { Component } from 'react';
import { View, Text as Texter, StyleSheet, ScrollView } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Text } from 'react-native-svg'

// create a component
class Site extends Component {
    constructor() {
        super();
        this.state = { load: true }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ load: false})
        }, 1000)
    }


    componentWillUnMount() {
        clearTimeout(this.timer);
    }

    render() {
        const { navigate } = this.props.navigation;
        const data = [
            {
                value: 50,
                label: `HYATT 29 - Wheaton`,
            },
            {
                value: 10,
                label: `HYATT 22 - Silver Spring`,
            },
            {
                value: 40,
                label: `HYATT 23 - Annapolis`,
            },
            {
                value: 2500,
                label: `HYATT 39 - Columbia`,
            },
            {
                value: 40,
                label: `HYATT 24 - Rockville`,
            },
            {
                value: 20,
                label: `HYATT 33 - Cumberland`,
            },
            {
                value: 10,
                label: `HYATT 32 - Clarksberg`,
            },
            {
                value: 40,
                label: `HYATT 21 - Baltimore`,
            },
            {
                value: 95,
                label: `HYATT 19 - Frederick`,
            },
            {
                value: 25,
                label: `HYATT 34 - OceanCity`,
            },
            {
                value: 20,
                label: `HYATT 49 - Lanham`,
            },
            {
                value: 10,
                label: `HYATT 43 - Beltsville`,
            },
            {
                value: 40,
                label: `HYATT 35 - Croftol`,
            },
            {
                value: 45,
                label: `HYATT 36 - Odenton`,
            },
            {
                value: 85,
                label: `HYATT 37 - Gaithersberg`,
            },
            {
                value: 20,
                label: `HYATT 38 - Pikesville`,
            },
            {
                value: 10,
                label: `HYATT 44 - CrazyVille`,
            },
            {
                value: 40,
                label: `HYATT 45 - mobileVille`,
            },
            {
                value: 5,
                label: `HYATT 46 - Techville`,
            },
            {
                value: 35,
                label: `HYATT 47 - Wheaton`,
            },
        ]

        const CUT_OFF = 50
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
                    $ {value}
                </Text>
            ))
        )
        
        if (this.state.load) {
            return  <Texter style={{textAlign: 'center', marginTop: 50}}>Loading....</Texter>
        } else {
        return (
            <ScrollView>
            <Texter style={styles.labelStyle}>{this.props.navigation.state.params.name} - NON LINKED REFUNDS BY  SITE</Texter>            
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
export default Site;
