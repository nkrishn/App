import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PieChart from './pie-chart'
import BarChart from './bar-chart'
import { pinpadData, pinpadModelData } from './data'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#e53935',
    backgroundGradientTo: '#ef5350',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#ff3e03',
    backgroundGradientFrom: '#ff3e03',
    backgroundGradientTo: '#ff3e03',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
  }
]

export default class PinpadStatus extends React.Component {

  renderTabBar() {
    return <StatusBar />
  }

  render() {
    const { width } = Dimensions.get('window')
    const height = 220
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: 'black',
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
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
              <Text style={labelStyle}> PINPAD STATUS</Text>
              <BarChart
                width={width}
                height={height}
                data={pinpadData}
                chartConfig={chartConfig}
                style={graphStyle}
                paddingLeft="15"
              />
              <Text style={labelStyle}> PINPAD STATUS BY MODEL</Text>
              <PieChart
                data={pinpadModelData}
                width={width}
                height={height}
                chartConfig={chartConfig}
                accessor="batches"
                style={graphStyle}
                backgroundColor="transparent"
                paddingLeft="15"
              />
              
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}