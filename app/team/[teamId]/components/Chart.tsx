'use client'

import { GoalsByPeriodType } from '@/actions/getTeamsById'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { FC, useEffect, useState, useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

interface ChartType {
  goalsByMinute: GoalsByPeriodType
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Chart: FC<ChartType> = ({ goalsByMinute }) => {
  // const [periodOfTime, setPeriodOfTime] = useState<string[]>([])
  // const [goals, setGoals] = useState<number[]>([])

  // useEffect(() => {
  //   if (goalsByMinute) {
  //     const values = Object.values(goalsByMinute)
  //     const key =
  //     // setPeriodOfTime(key)
  //     // setGoals(goals)
  //   }
  // }, [])
  const periodOfTime = useMemo(() => {
    if (goalsByMinute) {
      return Object.keys(goalsByMinute)
    }
  }, [goalsByMinute])

  const score = useMemo(() => {
    if (goalsByMinute) {
      const values = Object.values(goalsByMinute)
      return values.map((item) => (item.total ? item.total : 0))
    }
  }, [goalsByMinute])

  const options = {
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
  // const score = [3, 1, 4, 5, 2, 4]

  const data = useMemo(() => {
    return {
      labels: periodOfTime,
      datasets: [
        {
          label: 'Score',
          data: score,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    }
  }, [periodOfTime, score])

  return <Bar options={options} data={data} />
}

export default Chart
