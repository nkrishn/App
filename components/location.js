//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text as Texter } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Text } from 'react-native-svg'
// create a component
class Location extends Component {
    constructor() {
        super();
        this.state = { load: true }
    }

    componentDidMount() {
       this.timer =  setTimeout(() => {
          this.setState({ load: false})
        }, 1500)
    }

    componentWillUnMount() {
        clearTimeout(this.timer);
    }

    render() {
        const { navigate } = this.props.navigation;
        const navigator = { onPress: () => navigate('Site', { name: this.props.navigation.state.params.name }) }
        
        const data = [
            {
                value: 52,
                label: 'MD',
                svg: navigator,
                style: { fontWeight: 'bold' }
            },
            {
                value: 10,
                label: 'VA',
                svg: navigator,
            },
            {
                value: 47,
                label: 'DC',
                svg: navigator,
            },
            {
                value: 95,
                label: 'CA',
                svg: navigator,
            },
            {
                value: 85,
                label: 'NY',
                svg: navigator,
            },
            {
                value: 49,
                label: 'WV',
                svg: navigator,
            },
            {
                value: 12,
                label: 'PA',
                svg: navigator,
            },
            {
                value: 40,
                label: 'MI',
                svg: navigator,
            },
            {
                value: 95,
                label: 'IL',
                svg: navigator,
            },
            {
                value: 85,
                label: 'IN',
                svg: navigator,
            },
            {
                value: 50,
                label: 'NJ',
                svg: navigator,
            },
            {
                value: 10,
                label: 'CO',
                svg: navigator,
            },
            {
                value: 40,
                label: 'NE',
                svg: navigator,
            },
            {
                value: 95,
                label: 'NC',
                svg: navigator,
            },
            {
                value: 85,
                label: 'SC',
                svg: navigator,
            },
            {
                value: 50,
                label: 'TX',
                svg: navigator,
            },
            {
                value: 10,
                label: 'NM',
                svg: navigator,
            },
            {
                value: 40,
                label: 'CT',
                svg: navigator,
            },
            {
                value: 95,
                label: 'OR',
                svg: navigator,
            },
            {
                value: 85,
                label: 'AR',
                svg: navigator,
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
                    $ {value*10}
                </Text>
            ))
        )

        if (this.state.load) {
            return <Texter style={{textAlign: 'center', marginTop: 50}}>Loading....</Texter>
        } else {
        return (
            <ScrollView>
            <Texter style={styles.labelStyle}>LODGING - NON LINKED REFUNDS BY  STATE</Texter>
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
                    svg={{ fill: '#fccb00' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                    
                    <Labels />
                    
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
export default Location;
