import React from 'react'
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Text as SVGText } from 'react-native-svg'
import * as scale from 'd3-scale'

class PinpadStatus extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { count: 1000, pinpadUp: 100, 
      pinpadDown: 44, iPPUp:  25, iPPDown: 7}
  }

  componentDidMount() {
    this.timerFunc()
  }

  componentDidUpdate() {
    this.timerFunc();
  }

  timerFunc() {
    if (this.state.count > 0) {
      this.interval = setTimeout(() => { 
        this.setState({
          pinpadUp: (this.state.pinpadUp == 100 ? 104 : 100),
          pinpadDown: (this.state.pinpadDown == 44 ? 40 : 44),
          iPPUp: (this.state.iPPUp == 25 ? 29 : 25),
          iPPDown: (this.state.iPPDown == 7 ? 4 : 7),
          count: this.state.count - 1}) },10000) 
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  render() {
    const navigator = { onPress: () => this.props.navigation.navigate('PinpadSite') }

    const ppdata = [
      {
          value: this.state.iPPUp,
          label: 'Ingenico iPP320',
          svg: { fill: '#40bf42', onPress: navigator.onPress},
      },
      {
          value: this.state.iPPDown,
          label: '',
          svg: { fill: 'red', onPress: navigator.onPress },
         
      },
      {
          value: 15,
          label: 'Ingenico iSC250',
          svg: { fill: '#40bf42', onPress: navigator.onPress}
      },
      {
          value: 8,
          label: '',
          svg: { fill: 'red', onPress: navigator.onPress}
      },
      {
        value: 20,
        label: 'Ingenico iPP350',
        svg: { fill: '#40bf42', onPress: navigator.onPress}
      },
      {
        value: 6,
        label: '',
        svg: { fill: 'red', onPress: navigator.onPress}
      },
      {
        value: 8,
        label: 'Lane 2000',
        svg: { fill: '#40bf42', onPress: navigator.onPress},
    },
    {
        value: 0,
        label: '',
        svg: { fill: 'red', onPress: navigator.onPress},
    },
    {
        value: 12,
        label: 'Verifone Mx920',
        svg: { fill: '#40bf42', onPress: navigator.onPress}
    },
    {
        value: 3,
        label: '',
        svg: { fill: 'red', onPress: navigator.onPress}
    },
    {
      value: 5,
      label: 'Verifone Mx915',
      svg: { fill: '#40bf42'}
    },
    {
      value: 22,
      label: '',
      svg: { fill: 'red'}
    },
    ]

    const bardata = [
      {
        value: this.state.pinpadUp,
        label: 'PINPAD-UP',
        svg: { fill: '#40bf42' },
      },
      {
        value: this.state.pinpadDown,
        label: 'PINPAD-DOWN',
        svg: navigator,
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

    const CUT_OFFF = 24
        const Labels = ({  x, y, bandwidth, data }) => (
          ppdata.map(({value}, index) => (
                <SVGText
                    key={ index }
                    x={ value > CUT_OFFF ? x(0) + 10 : x(value) + 10 }
                    y={ y(index) + (bandwidth / 2) }
                    fontSize={ 14 }
                    fill={ value > CUT_OFFF ? 'white' : 'black' }
                    alignmentBaseline={ 'bottom' }
                >
                    {value}
                </SVGText>
            ))
        )

    return (
      <ScrollView>        
        <View style={{flex: 1, height: 1000, flexDirection: 'column', margin: 10 }}>
          <Text style={styles.labelStyle}>PINPAD STATUS</Text>
          <BarChart
            style={{ flex: 0.5 }}
            data={bardata}
            gridMin={0}
            svg={{ fill: '#EB144C'}}
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
          <View style={{flex: 1, flexDirection: 'row'}}>
            <YAxis
              data={ppdata}
              yAccessor={({ index }) => index}
              scale={scale.scaleBand}
              contentInset={{ top: 10, bottom: 10 }}
              spacing={0.2}
              formatLabel={(_, index) => ppdata[ index ].label}
              svg={{fontSize: 14}}
            />
            <BarChart
              style={ { flex: 0.9, marginLeft: 5 } }
              horizontal={ true }
              data={ ppdata }
              yAccessor={({ item }) => item.value}
              spacing={0.2}
            >
              <Labels/>
            </BarChart>
          </View>
        </View>
      </ScrollView>
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