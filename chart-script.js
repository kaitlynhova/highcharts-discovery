$(function () {
        $('#container').highcharts({
            tooltip: {
                crosshairs: true
            },
            credits: {
                 enabled: false
             },
            chart:{
              zoomType: 'x',
              resetZoomButton: {
                theme: {
                    fill: '#df3f3f',
                    stroke: '#df3f3f',
                    style: {
                        color: 'white',
                        fontFamily:  "sans-serif"
                    },
                    r: 0,
                    states: {
                        hover: {
                            fill: '#41739D',
                            style: {
                                color: 'white',
                                fontFamily:  "sans-serif"
                            }
                        }
                    }
                }
              }
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'BlackBox Log analyzer',
                x: -20 //center
            },
            subtitle: {
                text: 'example',
                x: -20
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5', '6',
                    '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                title: {
                    text: 'Side Variable'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
            },
            plotOptions:{
                series:{
                    allowPointSelect: true,
                    marker: {
                        states: {
                            select: {
                                fillColor: 'black',
                                lineWidth: 0
                            }
                        }
                    },
                    point: {
                        events:{
                            click: function () {
                              document.getElementById("dat-data").innerHTML = 'Category: ' + this.category + ', value: ' + this.y;

                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Pitch',
                data: [70.0, 60.9, 90.5, 140.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                visible: false
            }, {
                name: 'Yaw',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
                visible: false
            }, {
                name: 'GPS',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
                visible: false
            }, {
                name: 'Turkey',
                data: [.1, .2, .7, .5, .9, .2, .0, .6, .2, .3, .6, .8],
                visible: false
            }]
        });

        $('#pitch').click(function() {
           var chart = $('#container').highcharts();
           var series = chart.series;
           var seriesIndex = 0
           if(series[seriesIndex].visible) {
               series[seriesIndex].hide();
           } else {
               series[seriesIndex].show();
           }
       });

       $('#yaw').click(function() {
          var chart = $('#container').highcharts();
          var series = chart.series;
          var seriesIndex = 1
          if(series[seriesIndex].visible) {
              series[seriesIndex].hide();
          } else {
              series[seriesIndex].show();
          }
      });
      $('#gps').click(function() {
         var chart = $('#container').highcharts();
         var series = chart.series;
         var seriesIndex = 2
         if(series[seriesIndex].visible) {
             series[seriesIndex].hide();
         } else {
             series[seriesIndex].show();
         }
     });
     $('#turkey').click(function() {
        var chart = $('#container').highcharts();
        var series = chart.series;
        var seriesIndex = 3
        if(series[seriesIndex].visible) {
            series[seriesIndex].hide();
        } else {
            series[seriesIndex].show();
        }
      });

      $('#clearit').click(function() {
        var chart = $('#container').highcharts();
        var series = chart.series;
         for (i = 0; i < series.length; i++){
           series[i].hide();
         }
       });

      $('#turkeyandyaw').click(function() {
         var chart = $('#container').highcharts();
         var series = chart.series;
         var seriesIndex = [3,1]

         //Show just the group stuff
         for (i = 0; i < seriesIndex.length; i++) {
            if(series[seriesIndex[i]].visible) {
                series[seriesIndex[i]].hide();
            } else {
                series[seriesIndex[i]].show();
            }
          }

       });

    });
