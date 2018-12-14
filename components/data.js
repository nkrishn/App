// Mock data object used for LineChart and BarChart

const BarCharData = {
  labels: ['Retail', 'RESTURANT', 'LODGING'],
  datasets: [{
    data: [
      100,
      200,
      300,
    ]
  }]
}

const bardata = [
  {
      value: 50,
      svg: {
          fill: '#2d6386',
      },
  },
  {
      value: 10,
      svg: {
          fill: '#Fe9200',
      },
  },
  {
      value: 85,
      svg: {
          fill: '#b3d2e5',
      },
  },
]

const bardata1 = [
  {
      value: 85,
      svg: {
          fill: '#2d6386',
      },
  },
  {
      value: 300,
      svg: {
          fill: '#Fe9200',
      },
  },
  {
      value: 10,
      svg: {
          fill: '#b3d2e5',
      },
  },
]

const BarCharData1 = {
  labels: ['Retail', 'RESTURANT', 'LODGING'],
  datasets: [{
    data: [
      550,
      250,
      100,
    ]
  }]
}

const pinpadData = {
  labels: ['Pinpad UP', 'Pinpad DOWN'],
  datasets: [{
    data: [
      100,
      200,
    ]
  }]
}

const cardData = {
  labels: ['Visa', 'Amex', 'Discover', 'Mastercard'],
  datasets: [{
    data: [
      100,
      200,
      300,
      400
    ]
  }]
}

const pinpadModelData = [
  { name: 'E1', batches: 50, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'E2', batches: 28, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'E3', batches: 52, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'I1', batches: 50, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'I2', batches: 28, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'I3', batches: 52, color: 'brown', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'V1', batches: 50, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'V2', batches: 28, color: 'pink', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'V3', batches: 52, color: 'black', legendFontColor: '#7F7F7F', legendFontSize: 15 },
]


// Mock data object used for Contribution Graph

const contributionData = [
  { date: '2016-01-02', count: 1 },
  { date: '2016-01-03', count: 2 },
  { date: '2016-01-04', count: 3 },
  { date: '2016-01-05', count: 4 },
  { date: '2016-01-06', count: 5 },
  { date: '2016-01-30', count: 2 },
  { date: '2016-01-31', count: 3 },
  { date: '2016-03-01', count: 2 },
  { date: '2016-04-02', count: 4 },
  { date: '2016-03-05', count: 2 },
  { date: '2016-02-30', count: 4 }
]

// Mock data object for Pie Chart

const pieChartData = [
  { name: 'LODGING', batches: 50, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'RETAIL', batches: 28, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'RESTURANT', batches: 52, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
]

const pieChartData1 = [
  { name: 'LODGING', batches: 28, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'RETAIL', batches: 52, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'RESTURANT', batches: 50, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
]

const piedata = [
  {
    key: 1,
    amount: 50,
    svg: { fill: '#2d6386' },
  },
  {
    key: 2,
    amount: 100,
    svg: { fill: '#Fe9200' }
  },
  {
    key: 3,
    amount: 40,
    svg: { fill: '#b3d2e5' }
  }
]

const piedata1 = [
{
  key: 1,
  amount: 40,
  svg: { fill: '#2d6386' },
},
{
  key: 2,
  amount: 50,
  svg: { fill: '#Fe9200' }
},
{
  key: 3,
  amount: 100,
  svg: { fill: '#b3d2e5' }
}
]

// Mock data object for Progress

const progressChartData = [0.4, 0.6, 0.8]

export { pinpadData, bardata, piedata, cardData, contributionData, pieChartData, pinpadModelData, piedata1, bardata1 }