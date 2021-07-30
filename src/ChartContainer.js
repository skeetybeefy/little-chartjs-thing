import Chart from 'chart.js/auto'
import { useEffect, useState, useRef } from 'react'

function ChartContainer(props) {

  let casesData = {
    "Clutch" : [10, 11, 14, 12, 12, 11, 13, 14, 15, 16, 18, 20, 21, 21, 22, 22, 23, 21, 20, 19, 19],
    "Spectrum 2" : [9, 8, 11,   10, 9, 9, 8, 9, 10, 14, 20, 19, 19, 21, 22, 23, 24, 26, 28, 27, 26],
    "Snakebite" : [23, 24, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 17, 17, 18, 19, 20, 21, 19, 18, 18]
  }

  const data = {
      labels: ["","","","","","","","","","","","","","","","","","","","",""],
      datasets: [{
        label: 'Case Price, RUB',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
      }]
    };

  let config = {
    type: "line",
    data: data,
    options: {
      legend: {
        display: false,
      },
      tension: 0.1,
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        y: {
          min: 0,
          max: 30,
          beginAtZero: true,
          grid: {
            color: "rgba(211, 211, 211, 0.1)"
          },
        },
        x: {
          grid: {
            color: "rgba(211, 211, 211, 0.1)"
          }
        }
      }
    }
  }

  let chartRef = useRef(null)

  const [chart, setChart] = useState(null)
  
  useEffect(() => {

    setChart(new Chart(
      document.getElementById("chart"),
      config
    ))

  }, [chartRef])

  useEffect(() => {
    
    if (chart) {
      chart.config.data.datasets[0].data = casesData[props.chosenCase]
      chart.update()
    }
  }, [props])

  return (
  <div className="chart-container">
      <canvas ref={chartRef} id="chart"></canvas>
  </div>   
  ) 
}

export default ChartContainer