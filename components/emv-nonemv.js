import React from 'react'
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts'
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Text as SVGText } from 'react-native-svg'
import * as scale from 'd3-scale'
import DateRange from './date-ranges';

class EmvNonemv extends React.PureComponent {
  constructor() {
    super()
    this.state = { threeDay: {  backgroundColor: 'steelblue', color: 'white' },
    oneWeek: {},
    oneMonth: {},
    threeMonth: {},
    oneYear: {},
    emv: 62, nonEmv: 28 }
   
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
        obj.emv=62
        obj.nonEmv=38
        break;
      case 'oneWeek':
        obj.oneWeek = color
        obj.emv=50
        obj.nonEmv=50
        break;
      case 'oneMonth':
        obj.oneMonth = color
        obj.emv=45
        obj.nonEmv=55
        break;
      case 'threeMonth':
        obj.threeMonth = color
        obj.emv=40
        obj.nonEmv=60
        break;
        case 'oneYear':
        obj.oneYear = color
        obj.emv=38
        obj.nonEmv=62
        break;
    }
    this.setState(obj);
  }

  render() {
    const bardata = [
      {
        value: this.state.emv,
        label: 'EMV',
        svg: { fill: '#8884d8' },
      },
      {
        value: this.state.nonEmv,
        label: 'NON-EMV',
        svg: { fill: '#82ca9d' },
      },
    ]

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
            {value.value}%
          </SVGText>
        )
      })
    }
    const deviceHeight = Dimensions.get("window").height;
    return (
      <View style={{flex: 1, flexDirection: 'row' }}>        
        <View style={{flex: 1, flexDirection: 'column', margin: 10, }}>
          <Text style={styles.compStyle}> BEST WESTERN INN</Text>
          <Text style={styles.labelStyle}>EMV Vs NON-EMV TXNs</Text>
          <BarChart
            style={{ flex: 0.75 }}
            data={bardata}
            gridMin={0}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <BarLabels/>
          </BarChart>
          <XAxis
            style={{ marginTop: 10}}
            data={ bardata }
            xAccessor={({ index }) => index}
            scale={scale.scaleBand}
            formatLabel={ (value, index) => bardata[index].label}
          />
          <DateRange onChange={this.onDateRangeChange.bind(this)} 
          styleProps={this.state}
          label={ {one: '1M', two: '3M', three: '6M', four: '9M', five: '1Y'}}/>
          <Text style={styles.compStyle}> FRANCHISE RANKING </Text>
          <Text style={{fontWeight: 'bold', color:'green', textAlign: 'center', fontSize: 30 }}>
            {'6 '}
            <Text style={{fontWeight: 'bold', color:'black', fontSize: 16}}>
              {'of 100 Locations'}
            </Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  compStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default EmvNonemv