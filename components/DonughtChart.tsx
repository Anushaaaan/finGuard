'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DonughtChart = ({accounts}: DoughnutChartProps) => {
  
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250,2500,3700],
        backgroundColor: ['#0747B6','#2265d8','#2f91fa']
      }
    ],
    lables:['Bank 1','Bank 2','Bank 3']
  }

  return <Doughnut data={data}
    options={{
      cutout: '70%'
    }}
  />
}

export default DonughtChart