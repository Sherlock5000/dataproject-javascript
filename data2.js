fetch('data2.json')
    .then((response) => response.json())
    .then((data) => {
    
        Highcharts.chart('container-2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bar Plot of Company Registration by Year'
            },
            xAxis: {
                title: {
                    text: 'Years',
                    style: {
                        fontSize: '1.5em'
                    }
                },
                labels: {
                    style: {
                        fontSize: '1.5em'
                    }
                },
                categories: [
                    "2001",
                    "2002",
                    "2003",
                    "2004",
                    "2005",
                    "2006",
                    "2007",
                    "2008",
                    "2009",
                    "2010",
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020"
                ]
            },
            yAxis: {
                title: {
                    text: 'Frequency',
                    style: {
                        fontSize: '1.5em'
                    }
                },
                labels: {
                    style: {
                        fontSize: '1.5em'
                    }
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    color: '#FF0000'
                }
            },        
            series: [
                {
                    name: 'Years vs. Frequency',
                    data: data
                }
            ]
        })
    })
    .catch(e => console.log(e))