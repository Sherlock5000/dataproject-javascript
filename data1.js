fetch('data1.json')
  .then((response) => response.json())
  .then((dataset) => {
      console.log(dataset);
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Histogram of Authorized Capital'
            },
            xAxis: {
                title: {
                    text: 'Capital Ranges',
                    style: {
                        fontSize: "1.5em"
                    }
                },
                categories: [
                    "<1L",
                    "1L - 10L",
                    "10L - 1Cr",
                    "1Cr - 10Cr",
                    ">10Cr"
                ],
                labels: {
                    style: {
                        fontSize: "1.5em"
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Frequency',
                    style: {
                        fontSize: "1.5em"
                    }
                },
                labels: {
                    style: {
                        fontSize: "1.5em"
                    }
                }
            },
            credits:{
                enabled: false
            },
            plotOptions: {
                series: {
                    color: '#00CC00'
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
   
