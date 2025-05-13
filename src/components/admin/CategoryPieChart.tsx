import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { categorySales } from '../../data/analytics';
import { formatCurrency } from '../../lib/utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart: React.FC = () => {
  const data = {
    labels: categorySales.map(item => item.category),
    datasets: [
      {
        data: categorySales.map(item => item.revenue),
        backgroundColor: [
          'rgba(14, 165, 233, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(14, 165, 233, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 15,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = categorySales[context.dataIndex].percentage;
            return `${label}: ${formatCurrency(value)} (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="h-64">
      <Pie data={data} options={options} />
    </div>
  );
};

export default CategoryPieChart;