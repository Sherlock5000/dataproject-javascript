fetch('data1.json')
  .then((response) => response.json())
  .then((dataset) => {
      console.log(dataset);
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Auth Frequency'
            },
            
            yAxis: {
                title: {
                    text: 'Frequency'
                }
            },
            series: [
                {
                    name: 'Authorized Capitals',
                    data: dataset
                }
            ]
        })
  })
  .catch(e => console.log(e))
   
