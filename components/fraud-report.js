import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { PieChart, BarChart} from 'react-native-svg-charts'
import { Text as SVGText } from 'react-native-svg'
import DateRange from './date-ranges';
import { bardata, bardata1, piedata, piedata1} from './data'

const chartConfigs = [
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#e53935',
    backgroundGradientTo: '#ef5350',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }
]
class FraudReport extends React.PureComponent {

  constructor() {
    super();
    this.state = { threeDay:  { backgroundColor: 'steelblue' },
      oneWeek: {},
      oneMonth: {},
      threeMonth: {},
      oneYear: {},
      piedata: piedata,
      bardata: bardata
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
      obj.piedata =  piedata
      obj.bardata = bardata
      break;
    case 'oneWeek':
      obj.oneWeek = color
      obj.piedata =  piedata1
      obj.bardata = bardata1
      break;
    case 'oneMonth':
      obj.oneMonth = color
      obj.piedata =  piedata
      obj.bardata = bardata
      break;
    case 'threeMonth':
      obj.threeMonth = color
      obj.piedata =  piedata1
      obj.bardata = bardata1
      break;
      case 'oneYear':
      obj.oneYear = color
      obj.piedata =  piedata
      obj.bardata = bardata
      break;
  }
  this.setState(obj);
  }

  render() {

    const CUT_OFF = 20
    const BarLabels = ({ x, y, bandwidth, data }) => (
        data.map((value, index) => (
            <SVGText
                key={ index }
                x={ x(index) + (bandwidth / 2) }
                y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                fontSize={ 14 }
                fill={ value >= CUT_OFF ? 'white' : 'black' }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
                {value}
            </SVGText>
        ))
    )

    const labelStyle = {
      color: 'deep blue',
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 16
    }

    const PieLegend = ({})
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
            fontSize={24}
            stroke={'black'}
            strokeWidth={0.2}
          >
            {data.amount}
          </SVGText>
        )
      })
    }

    return (
      
      <View style={{flex: 1, flexDirection: 'column', margin: 10 }}>
        <Text style={styles.labelStyle}> REFUND BY INDUSTRY </Text>
        <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={this.state.piedata}
          spacing={0}
          outerRadius={'95%'}
        >
          <Labels/>
        </PieChart>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{marginVertical: 20 }}>
            <DateRange onChange={this.onDateRangeChange.bind(this)} styleProps={this.state}/>
          </View>
          <Text style={styles.labelStyle}> REFUND AMOUNT PER INDUSTRY </Text>
          <BarChart
            style={{ flex: 1 }}
            data={this.state.bardata}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            contentInset={{ top: 10, bottom: 10 }}
            spacing={0.2}
            gridMin={0}
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
    color: '#4169e1',
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16
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