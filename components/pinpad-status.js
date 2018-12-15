import React from 'react'
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Text as SVGText } from 'react-native-svg'
import * as scale from 'd3-scale'

class PinpadStatus extends React.PureComponent {

  render() {
    const pinpadmodel = ['IngenicoiPP320', 'IngenicoiPP350', 'Equinox', 'VerifoneMx915', 'VerifoneMx920']
    const data1 = [ 20, 40, 60, 80, 100 ]
            .map((value) => ({ value }))
    const data2 = [ 5, 6, 7, 8, 10 ]
        .map((value) => ({ value }))

    const pinpadData = [
      {
        data: data1,
        svg: {
          fill: '#40bf42',
        },
      },
      {
        data: data2,
        svg: { fill: '#EB144C'},
      },
    ]

    const bardata = [
      {
        value: 100,
        label: 'PINPAD-UP',
        svg: { fill: '#40bf42' },
      },
      {
        value: 10,
        label: 'PINPAD-DOWN',
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
            {value.value}
          </SVGText>
        )
      })
    }

    return (
      <View style={{flex: 1, flexDirection: 'row' }}>        
        <View style={{flex: 1, flexDirection: 'column', margin: 10 }}>
          <Text style={styles.labelStyle}>PINPAD STATUS</Text>
          <BarChart
            style={{ flex: 0.5 }}
            data={bardata}
            gridMin={0}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <BarLabels/>
          </BarChart>
          <XAxis
            style={{ marginTop: 10 }}
            data={ bardata }
            xAccessor={({ index }) => index}
            scale={scale.scaleBand}
            formatLabel={ (value, index) => bardata[index].label}
            labelStyle={ { color: 'black' } }
          />
          <Text style={styles.labelStyle}>PINPAD STATUS BY MODEL</Text>
          <View style={{flex: 1.5, flexDirection: 'row', marginBottom: 10}}>
            <YAxis
              data={pinpadmodel}
              yAccessor={({ index }) => index}
              scale={scale.scaleBand}
              contentInset={{ top: 10, bottom: 10 }}
              spacing={0.2}
              formatLabel={(_, index) => pinpadmodel[ index ]}
            />
            <BarChart
              style={ { flex: 1 } }
              horizontal={ true }
              data={ pinpadData }
              yAccessor={({ item }) => item.value}
              svg={{
                fill: 'green',
              }}
            >
            </BarChart>
          </View>
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
})
export default PinpadStatus