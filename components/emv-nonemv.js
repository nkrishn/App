import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
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
]

export default class EmvNonemv extends React.Component {

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
          const rankStyle = {
            color: 'black',
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 20
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
              <Text style={labelStyle}> EMV VS NON-EMV TRANSACTIONS</Text>
              <BarChart
                width={width}
                height={height}
                data={pinpadData}
                chartConfig={chartConfig}
                style={graphStyle}
                paddingLeft="15"
              />
              <Text style={labelStyle}> RANK IN FRANCHISE</Text>
              <Text style={rankStyle}> 6 of 100 locations.</Text>
              
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}