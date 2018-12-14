const refund = { 
  threeDay: 
    { 
      lodging: 60, retail: 25, restaurant: 15
    },
  oneWeek:
    {
      lodging: 40, retail: 50, restaurant: 10
    },
  oneMonth:
    {
      lodging: 10, retail: 30, restaurant: 60
    },
  threeMonth:
    {
      lodging: 60, retail: 25, restaurant: 15
    },
  oneYear:
    {
      lodging: 25, retail: 30, restaurant: 45
    }
}

const bardata = (button) => {
  return [
    {
        value: refund[button].lodging * 100,
        svg: {
            fill: '#2d6386',
        },
    },
    {
        value: refund[button].retail * 100,
        svg: {
            fill: '#Fe9200',
        },
    },
    {
        value: refund[button].restaurant * 100,
        svg: {
            fill: '#b3d2e5',
        },
    }
  ]
}

const piedata = (button) => {
  return [{
    key: 1,
    amount: refund[button].lodging,
    svg: { fill: '#2d6386' },
  },
  {
    key: 2,
    amount: refund[button].retail,
    svg: { fill: '#Fe9200' }
  },
  {
    key: 3,
    amount: refund[button].restaurant,
    svg: { fill: '#b3d2e5' }
  }
  ]
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

export { pinpadData, bardata, piedata, cardData, pinpadModelData }