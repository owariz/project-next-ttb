import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PieChartState {
  options: {
    labels: string[];
    legend: {
      position: 'top' | 'bottom' | 'left' | 'right';
      labels:{
        colors: string[];
        useSeriesColors: boolean;
      }
    };
    responsive: {
      breakpoint: number;
      options: {
        chart: {
          width: number;
        };
        legend: {
          position: 'bottom';
        };
      };
    }[];
  };
  series: number[];
}

interface PieChartProps {
  data: {[design: string]: number };
}


const PieChart: React.FC<PieChartProps> = ({data}) => {
  console.log(data)
  const state: PieChartState = {
    options: {
      labels: ['Design 1', 'Design 2', 'Design 3', 'Design 4','Design 5','Design 6'],
      legend: {
        position: 'bottom',
        labels: {
          colors: ["#fff","#fff","#fff","#fff","#fff","#fff"],
          useSeriesColors: false
      },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
    series: [data['Design 1'],data['Design 2'],data['Design 3'],data['Design 4'],data['Design 5'],data['Design 6']],
  };

  return (
    <div className="pie-chart">
      <Chart
        options={state.options}
        series={state.series}
        type="pie"
        width="500"
      />
    </div>
  );
};

export default PieChart;
