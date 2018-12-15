import React from 'react'
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts'
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native'
import { Text as SVGText } from 'react-native-svg'
import * as scale from 'd3-scale'

class EmvNonemv extends React.PureComponent {

  render() {
    const bardata = [
      {
        value: 60,
        label: 'EMV',
        svg: { fill: '#40bf42' },
      },
      {
        value: 40,
        label: 'NON-EMV',
        svg: { fill: '#EB144C' },
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
          <Text style={styles.labelStyle}>% OF EMV NON-EMV TXNs</Text>
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
          <Text style={styles.compStyle}> POSITION IN FRANCHISE</Text>
          <Text style={{fontWeight: 'bold', color:'green', textAlign: 'center', marginTop: 15, fontSize: 30 }}>
            {'6'}{' '}
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
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default EmvNonemv