'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 1,
      width: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      color: 'white' as const,
    },
    title: {
      display: true,
      color: 'white' as const,
      text: 'Number of goals per minute',
    },
  },
}

const labels = ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90']
const score = [3, 1, 4, 5, 2, 4]

export const data = {
  labels,
  datasets: [
    {
      label: 'Score',
      data: score,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export function Chart() {
  return <Bar options={options} data={data} />
}
