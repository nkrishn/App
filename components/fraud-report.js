import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native'
import { PieChart, BarChart} from 'react-native-svg-charts'
import { Text as SVGText } from 'react-native-svg'
import DateRange from './date-ranges';
import { bardata, piedata } from './data';

class FraudReport extends React.PureComponent {

  constructor(props) {
    super(props);
    this.navigator = this.props.navigation.navigate
    this.state = { threeDay:  { backgroundColor: 'steelblue', color: 'white' },
      oneWeek: {},
      oneMonth: {},
      threeMonth: {},
      oneYear: {},
      piedata: piedata('threeDay', this.navigator),
      bardata: bardata('threeDay', this.navigator),
      iniName: 'timeout1',
      count: 3
    }
  }

  onDateRangeChange(button) {
    let color = { backgroundColor: 'steelblue', color: 'white' }
    let obj = { 
        threeDay:  {},
        oneWeek: {},
        oneMonth: {},
        threeMonth: {},
        oneYear: {}
    }
    switch(button) {
      case 'threeDay':
        obj.threeDay = color
        break;
      case 'oneWeek':
        obj.oneWeek = color
        break;
      case 'oneMonth':
        obj.oneMonth = color
        break;
      case 'threeMonth':
        obj.threeMonth = color
        break;
        case 'oneYear':
        obj.oneYear = color
        break;
    }
    obj.piedata = piedata(button, this.navigator)
    obj.bardata = bardata(button, this.navigator)
    this.setState(obj);
  }

  render() {

    const CUT_OFF = 20
    const BarLabels = ({ x, y, bandwidth, data }) => {
      return data.map((value, index) => {
        return(
          <SVGText
              key={ index }
              x={ x(index) + (bandwidth / 2) }
              y={ value.value < CUT_OFF ? y(value.value) - 10 : y(value.value) + 15 }
              fontSize={ 14 }
              fill={ value.value >= CUT_OFF ? 'white' : 'black' }
              alignmentBaseline={ 'middle' }
              textAnchor={ 'middle' }
          >
              {value.value}.00 $
          </SVGText>
        )
      })
    }

    const labelStyle = {
      color: 'deep blue',
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 16
    }

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <SVGText
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={14}
            fontWeight={'bold'}
          >
            {data.amount}%
          </SVGText>
        )
      })
    }

    return (
        <View style={{flex: 1, flexDirection: 'column' }}>        
          <View style={{flex: 1.8, flexDirection: 'row' }}>
            <View style={{flex: 1, flexDirection: 'column', marginTop: 25 }}>
              <PieChart
                style={{ height: 180 }}
                valueAccessor={({ item }) => item.amount}
                data={this.state.piedata}
                spacing={0}
                outerRadius={'100%'}
              >
                <Labels/>
              </PieChart>
            </View>
            <View style={{flex: 1, flexDirection: 'column' }}>
              <Text style={styles.labelStyle}> NON-LINKED REFUNDS</Text>
              <View style={{flex: 0.25, flexDirection: 'row' }}>
                <Text style={[styles.legend, { backgroundColor: '#2d6386'}]}></Text>
                <Text >Lodging</Text>
              </View>
              <View style={{flex: 0.25, flexDirection: 'row' }}>
                <Text style={[styles.legend, { backgroundColor: '#Fe9200'}]}></Text>
                <Text>Retail</Text>
              </View>
              <View style={{flex: 0.25, flexDirection: 'row' }}>
                <Text style={[styles.legend, { backgroundColor: '#b3d2e5'}]}></Text>
                <Text>Restaurant</Text>
              </View>
            </View>
          </View>
          <DateRange onChange={this.onDateRangeChange.bind(this)} styleProps={this.state}/> 
          <Text style={styles.labelStyle}> NON-LINKED REFUND AMOUNT</Text>
          <View style={{flex: 1.5, flexDirection: 'row'}}>
            <BarChart
              style={{ flex: 1 }}
              data={this.state.bardata}
              gridMin={0}
              svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
              yAccessor={({ item }) => item.value}
              contentInset={{ top: 20, bottom: 20 }}
            >
              <BarLabels/>
            </BarChart>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  legend: {width: 15, 
    height: 15, marginLeft: 50, marginRight: 5, marginTop: 3, 
    borderRadius: 4
  },
});

export default FraudReport