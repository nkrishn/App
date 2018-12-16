import React from 'react'
import { ScrollView, View, StatusBar, Dimensions, Text, StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import LineChart from './line-chart'
import DateRange from './date-ranges';

// in Expo - swipe left to see the following styling, or create your own

export default class CardBrands extends React.Component {

  constructor() {
    super();
    this.state = { siteArr: [], months: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      monthsVisa: [
        50,
        20,
        2,
        86,
        71,
        100
      ],
      monthsMC: [
        20,
        10,
        4,
        56,
        87,
        90
      ],
      monthsAmex: [
        60,
        32,
        20,
        40,
        42,
        8
      ],
      threeDay:  { backgroundColor: 'steelblue', color: 'white' },
      oneWeek: {},
      oneMonth: {},
      threeMonth: {},
      oneYear: {},
     }
  }
  renderTabBar() {
    return <StatusBar hidden/>
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
        obj.months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        obj.monthsVisa = [
          50,
          20,
          2,
          86,
          71,
          100
        ],
        obj.monthsMC = [
          20,
          10,
          4,
          56,
          87,
          90
        ],
        obj.monthsAmex = [
          60,
          32,
          20,
          40,
          42,
          8
        ]
        break;
      case 'oneWeek':
        obj.oneWeek = color
        obj.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        obj.monthsVisa =  [
          50,
          20,
          2,
          86,
          71,
          100,
          50,
          20,
          2,
          86,
          71,
          100
        ]
        obj.monthsMC = [
          20,
          10,
          4,
          56,
          87,
          90,
          20,
          10,
          4,
          56,
          87,
          90
        ],
        obj.monthsAmex = [
          60,
          32,
          20,
          40,
          42,
          8,
          30,
          32,
          20,
          40,
          42,
          8,
        ]
        break;
      case 'oneMonth':
        obj.oneMonth = color
        obj.months = ['2018', '2017']
        obj.monthsVisa = [
          50,
          20
        ],
        obj.monthsMC = [
          20,
          40
        ],
        obj.monthsAmex = [
          10,
          32
        ]
        break;
      case 'threeMonth':
        obj.threeMonth = color
        obj.months = ['2018', '2017', '2016']
        obj.monthsVisa = [
          50,
          20,
          2
        ],
        obj.monthsMC = [
          20,
          10,
          4
        ],
        obj.monthsAmex = [
          60,
          32,
          20
        ]
        break;
        case 'oneYear':
        obj.oneYear = color
        obj.months = ['2018', '2017', '2016', '2015']
        obj.monthsVisa = [
          50,
          20,
          2,
          4
        ],
        obj.monthsMC = [
          20,
          10,
          4, 10
        ],
        obj.monthsAmex = [
          60,
          32,
          20, 25
        ]
        break;
    }
    this.setState(obj);
  }

  changeKey(site) {
    let arr = this.state.siteArr
    let index = arr.indexOf(site)
    arr.includes(site) ? arr.splice(index) : arr.push(site) 
let obj = {}
    if (this.state.pressed) {
       obj= { pressedKey: this.state.pressed ? site : '', 
      pressed: this.state.pressed ? false : true,
      siteArr: arr,
      monthsVisa: [
        20,
        60,
        2,
        86,
        1,
        10
      ],
      monthsMC: [
           50,
            20,
            2,
            86,
            71,
            100
      ],
      monthsAmex: [
        20,
            10,
            4,
            56,
            87,
            90
      ]}
    } else {
       obj =  { pressedKey: this.state.pressed ? site : '', 
      pressed: this.state.pressed ? false : true,
      siteArr: arr,
      monthsVisa: [
        20,
            10,
            4,
            56,
            87,
            90
      ],
      monthsMC: [
        20,
        60,
        2,
        86,
        1,
        10
      ],
      monthsAmex: [
        50,
         20,
         2,
         86,
         71,
         100
   ]}
    }
    this.setState(obj)
  }

  render() {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window') ;

    const chartConfigs = [
      {
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        style: {
          borderRadius: 16,
        }
      }
    ]
    
    const data = {
      labels: this.state.months,
      datasets: [{
        color: 'red',
        data: this.state.monthsVisa
      },{
        color: 'green',
        data: this.state.monthsMC
      },{
        color: 'blue',
        data: this.state.monthsAmex
      }]
    }

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
                  width={width*98/100}
                  height={height * 30 / 100}
                  chartConfig={chartConfig}
                  style={graphStyle}
                />
              </View>
            <DateRange onChange={this.onDateRangeChange.bind(this)} 
            styleProps={this.state}
            label={ {one: '6M', two: '1Y', three: '2Y', four: '3Y', five: '4Y'}}/> 
             <View style={{ marginTop: 25}}>
             {['Best Western Inn - Germantown', 
             'Best Western Inn - Baltimore', 
             'Best Western Inn - Silver Spring',
             'Best Western Inn - Bethesda',
             'Best Western Inn - Rockville',
             'Best Western Inn - College Park',
             'Best Western Inn - Gaithesberg',
             'Best Western Inn - Annapolis'].map((site, index) => {
               return <Text key={site} 
               style={{ backgroundColor:
                 (( this.state.siteArr.includes(site)) ? '#f6f8fa' :  '#ff7f50'), 
               width: 280, height: 25,
               paddingLeft: 10,
               paddingTop: 3,
               color: ((this.state.siteArr.includes(site) )? 'black' : 'white'),
               borderRadius: 6, marginTop: 10, marginLeft: 25}}
               onPress={() => this.changeKey(site)}>{site}</Text>
             })}
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
