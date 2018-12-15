//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
// create a component
class Location extends Component {
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
                label: 'MD',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 10,
                label: 'VA',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 40,
                label: 'DC',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 95,
                label: 'CA',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 85,
                label: 'NY',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 50,
                label: 'WV',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 10,
                label: 'PA',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 40,
                label: 'MI',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 95,
                label: 'IL',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 85,
                label: 'IN',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 50,
                label: 'NJ',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 10,
                label: 'CO',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 40,
                label: 'NE',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 95,
                label: 'NC',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 85,
                label: 'SC',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 50,
                label: 'TX',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 10,
                label: 'NM',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 40,
                label: 'CT',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 95,
                label: 'OR',
                svg: { onPress: () => navigate('Site') }
            },
            {
                value: 85,
                label: 'AR',
                svg: { onPress: () => navigate('Site') }
            },
        ]
        if (this.state.load) {
            return <Text style={{textAlign: 'center', marginTop: 50}}>Loading....</Text>
        } else {
        return (
            <ScrollView>
            <Text style={styles.labelStyle}>LODGING - NON LINKED REFUNDS BY  STATE</Text>
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
export default Location;
