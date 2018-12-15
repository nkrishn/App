import React from 'react'
import { ScrollView, View, StatusBar, Dimensions, Text, StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import LineChart from './line-chart'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }
]

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    color: 'red',
    data: [
      50,
      20,
      2,
      86,
      71,
      100
    ]
  },{
    color: 'green',
    data: [
      20,
      10,
      4,
      56,
      87,
      90
    ]
  },{
    color: 'blue',
    data: [
      30,
      90,
      67,
      54,
      10,
      2
    ]
  }]
}

export default class CardBrands extends React.Component {
  renderTabBar() {
    return <StatusBar hidden/>
  }

  render() {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window') ;
    return (
      <View renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={{fontWeight: 'bold', color: 'red', textAlign: 'center', marginTop: 15, fontSize: 18 }}>
                {'VISA'}{' '}
                <Text style={{fontWeight: 'bold', color:'black'}}>
                  {'vs'}{' '}
                  <Text style={{fontWeight: 'bold', color: 'blue'}}>
                    {'AMEX'}{' '}
                    <Text style={{fontWeight: 'bold', color: 'black'}}>
                      {'vs'}{' '}
                      <Text style={{fontWeight: 'bold', color: 'green'}}>
                        {'MASTERCARD'}{' '}
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </Text>
              <View style={{ marginTop: 15}}>
                <LineChart
                  data={data}
                  width={width}
                  height={height * 75 / 100}
                  chartConfig={chartConfig}
                  style={graphStyle}
                />
              </View>
            </ScrollView>
          )
        })}
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
