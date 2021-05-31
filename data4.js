fetch('data4.json')
    .then((response) => response.json())
    .then((data) => {
        Highcharts.chart('container-4', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Grouped Bar Plot'
            },
            xAxis: {
                title: {
                    text: 'Businesses',
                    style: {
                        fontSize: '1.5em'
                    }
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '1.5em'
                    }
                },
                categories: [
                    'Agriculture',
                    'Manufacturing',
                    'Wholesale',
                    'Real Estate',
                    'Health',
                    'Mining',
                    'Finance',
                    'Utility Supply',
                    'Construction',
                    'Social Service',
                    'Private Households',
                    'Restaurants',
                    'Transport',
                    'Public Admin.',
                    'Education'
                ],
                crosshair: true
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            yAxis: {
                title: {
                    text: 'Frequency by Year',
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
                    color: '#ff9900'
                }
            },
            series: [
                {
                    name: '2015',
                    data: data[0],
                    color: '#003366'
                },
                {
                    name: '2016',
                    data: data[1],
                    color: '#66ffff'
                },
                {
                    name: '2017',
                    data: data[2],
                    color: '#cccc00'
                },
                {
                    name: '2018',
                    data: data[3],
                    color: '#cc66ff'
                }
            ]
        })
    })
    .catch(e => console.log(e))