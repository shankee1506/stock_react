import React from 'react'
import Chart from 'react-apexcharts'


const chartOptions1 = {

    series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          }
          
const chartOptions2 ={
    series: [44, 55, 13, 33],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              dataLabels: {
                enabled: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
              }
            },
                   
} 


const chartOptions3 ={
    series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          
}


const chartOptions4 = {

  series: [{
              name: 'Sales',
              data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              forecastDataPoints: {
                count: 7
              },
              stroke: {
                width: 5,
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                tickAmount: 10,
                labels: {
                  formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                  }
                }
              },
              title: {
                text: 'Forecast',
                align: 'left',
                style: {
                  fontSize: "16px",
                  color: '#666'
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#FDD835'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100]
                },
              },
              yaxis: {
                min: -10,
                max: 40
              }
            },
          
          
          

}          


const chartOptions5 ={
  series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 90,
                  offsetY: 10
                }
              },
              grid: {
                padding: {
                  bottom: -80
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          
}

const Analytics = () => {
    return (

        
        <div>
        <div className='row'>
        <div className='col-6'>
        <div className='card full-height'>
            
                <Chart
                options={chartOptions1.options}
                series={chartOptions1.series}
                type='donut'
                height='150%'
                />   
                
                </div>
        </div>
        

        <div className='col-6'>
        <div className='card full-height'>
            
                <Chart
                options={chartOptions2.options}
                series={chartOptions2.series}
                type='donut'
                height='150%'
                />       
          </div>
        </div>
        </div>
         
       

        <div className="col-10">
        <div className="card">
        
            <Chart
            options={chartOptions4.options}
            series={chartOptions4.series}
            type='line'
            height='350'
            />   
            
            </div>
    </div>

    <div className="col-7">
    
        <div className="card">
          <div className="card__header">
              <h4>FAST RUNNING PRODUCT</h4>
          </div>
                 <div className="card__body">
    
        <Chart
        options={chartOptions3.options}
        series={chartOptions3.series}
        type='pie'
        height='150%'
        />   
            </div>
        </div>
</div>



      <div className="col-10">
          <div className="card">

              <Chart
                options={chartOptions5.options}
                series={chartOptions5.series}
                type='donut'
                height='150%'
              />   
    
          </div>
      </div>


        
        </div>     
        
        
             
    )
}

export default Analytics
