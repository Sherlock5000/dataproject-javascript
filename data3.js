fetch('data3.json')
    .then((response) => response.json())
    .then((data) => {

        Highcharts.chart('container-3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Company Registration in the year 2015 by District'
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
                    "Agriculture & Allied",
                    "Manufacturing",
                    "Household Goods",
                    "Business Activities",
                    "Social Work",
                    "Mining",
                    "Finance",
                    "Utility Supplies",
                    "Construction",
                    "Social Services",
                    "Private Production",
                    "Restaurants",
                    "Transport",
                    "Public Admin.",
                    "Social Security"
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
                    color: '#3399ff'
                }
            },
            series: [
                {
                    name: 'Business vs. Frequency',
                    data: data
                }
            ]
        })
    })
    .catch(e => console.log(e))
