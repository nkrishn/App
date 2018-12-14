import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { PieChart, BarChart} from 'react-native-svg-charts'
import { Text as SVGText } from 'react-native-svg'
import DateRange from './date-ranges';
import { bardata, piedata } from './data'

class FraudReport extends React.PureComponent {

  constructor() {
    super();
    this.state = { threeDay:  { backgroundColor: 'steelblue' },
      oneWeek: {},
      oneMonth: {},
      threeMonth: {},
      oneYear: {},
      piedata: piedata('threeDay'),
      bardata: bardata('threeDay')
    }
  }

  onDateRangeChange(button) {
    let color = { backgroundColor: 'steelblue' }
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
    obj.piedata = piedata(button)
    obj.bardata = bardata(button)
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
            <View style={{flex: 1, flexDirection: 'column' }}>
              <Text style={styles.labelStyle}> NON-LINKED REFUNDS BY INDUSTRY </Text>
              <PieChart
                style={{ height: 180 }}
                valueAccessor={({ item }) => item.amount}
                data={this.state.piedata}
                spacing={0}
                outerRadius={'95%'}
              >
                <Labels/>
              </PieChart>
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
});

export default FraudReport