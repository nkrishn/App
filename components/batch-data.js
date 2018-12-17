const refund = { 
    threeDay: 
      { 
        lodging: 65, retail: 20, restaurant: 15
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
      },
    timeout3: { lodging: 65, retail: 30, restaurant: 5 },
    timeout1: { lodging: 67, retail: 32, restaurant: 2 },
    timeout2: { lodging: 55, retail: 35, restaurant: 10 }
  }
  
  const bardata = (button, navigator) => {
    return [
      {
          value: refund[button].lodging * 199,
          svg: {
              fill: '#2d6386',
          },
      },
      {
          value: refund[button].retail * 99,
          svg: {
              fill: '#cd5c5c',
          },
      },
      {
          value: refund[button].restaurant * 122,
          svg: {
              fill: '#b3d2e5',
              onPressIn: () => navigator('Location', { name: 'OPEN'})
          },
      }
    ]
  }
  
  const piedata = (button, navigator) => {
    return [{
        key: 1,
        amount: refund[button].lodging,
        svg: { fill: '#2d6386' },
      },
      {
        key: 2,
        amount: refund[button].retail,
        svg: { fill: '#cd5c5c' },
      },
      {
        key: 3,
        amount: refund[button].restaurant,
        svg: { fill: '#b3d2e5' },
      }
    ]
  }

  export { bardata, piedata }