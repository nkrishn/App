//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

// create a component
class Site extends Component {
    constructor() {
        super();
        this.state = { load: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ load: false})
        }, 1500)
    }


    render() {
        const { navigate } = this.props.navigation;
        const data = [
            {
                value: 50,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 10,
                label: 'IHOP22 - Silver Spring',
            },
            {
                value: 40,
                label: 'IHOP23 - City',
            },
            {
                value: 95,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 85,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 50,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 10,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 40,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 95,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 85,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 50,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 10,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 40,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 95,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 85,
                label: 'IHOP21 - Wheaton',
            },
            {
                value: 50,
                label: 'Site1',
            },
            {
                value: 10,
                label: 'Site1',
            },
            {
                value: 40,
                label: 'Site1',
            },
            {
                value: 95,
                label: 'Site1',
            },
            {
                value: 85,
                label: 'Site1',
            },
        ]

        if (this.state.load) {
            return <Text style={{textAlign: 'center', marginTop: 50}}>Loading....</Text>
        } else {
        return (
            <ScrollView>
                <Text style={styles.labelStyle}>LODGING - NON LINKED REFUNDS BY  SITE</Text>
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
                style={{ flex: 1, marginLeft: 8 }}
                data={data}
                horizontal={true}
                yAccessor={({ item }) => item.value}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.2}
                gridMin={0}
            >
                <Grid direction={Grid.Direction.VERTICAL}/>
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
