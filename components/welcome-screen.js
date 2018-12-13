import React, { Component } from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PieChart from './pie-chart'
import BarChart from './bar-chart'
import { data, contributionData, pieChartData, progressChartData } from './data'

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

export default class WelcomeScreen extends Component {

  renderTabBar() {
    return <StatusBar false/>
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
              <Text style={labelStyle}> FRAUD REFUND REPORT </Text>
              <PieChart
                data={pieChartData}
                width={width}
                height={height}
                chartConfig={chartConfig}
                accessor="batches"
                style={graphStyle}
                backgroundColor="transparent"
                paddingLeft="15"
              />
              <Text style={labelStyle}> REFUND AMOUNT PER INDUSTRY </Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
                paddingLeft="15"
              />
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}