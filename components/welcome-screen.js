import React, { Component } from 'react'
import { ScrollView, StatusBar, Dimensions, Text, View, TouchableHighlight, Platform } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PieChart from './pie-chart'
import BarChart from './bar-chart'
import { BarCharData, BarCharData1, contributionData, pieChartData, progressChartData , pieChartData1} from './data'
import DateRange from './date-ranges';

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

export default class WelcomeScreen extends React.Component {

  constructor() {
      super();
      this.state = { threeDay:  { backgroundColor: 'steelblue' },
        oneWeek: {},
        oneMonth: {},
        threeMonth: {},
        oneYear: {},
        pieChartData: pieChartData,
        BarCharData: BarCharData
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
      obj.pieChartData =  pieChartData
      obj.BarCharData = BarCharData
      break;
    case 'oneWeek':
      obj.oneWeek = color
      obj.pieChartData =  pieChartData1
      obj.BarCharData = BarCharData1
      break;
    case 'oneMonth':
      obj.oneMonth = color
      obj.pieChartData =  pieChartData
      obj.BarCharData = BarCharData
      break;
    case 'threeMonth':
      obj.threeMonth = color
      obj.pieChartData =  pieChartData1
      obj.BarCharData = BarCharData1
      break;
      case 'oneYear':
      obj.oneYear = color
      obj.pieChartData =  pieChartData
      obj.BarCharData = BarCharData
      break;
   }
   this.setState(obj);
  }

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
              <Text style={labelStyle}>Refunds by industry </Text>
              <PieChart
                data={this.state.pieChartData}
                width={width}
                height={height}
                chartConfig={chartConfig}
                accessor="batches"
                style={graphStyle}
                backgroundColor="transparent"
                paddingLeft="15"
              />
              <DateRange onChange={this.onDateRangeChange.bind(this)} styleProps={this.state} />
              <Text style={labelStyle}> REFUND AMOUNT PER INDUSTRY </Text>
              <BarChart
                width={width}
                height={height}
                data={this.state.BarCharData}
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