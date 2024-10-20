import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Analytics = () => {
  const radarData = {
    labels: ['Web Development', 'AI/ML', 'Blockchain', 'Data Science', 'Cybersecurity', 'Cloud Computing'],
    datasets: [
      {
        label: 'Your Skills',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 2,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          backdropColor: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-500">Personal Analytics</h1>
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Skill Radar</h2>
        <div className="w-full max-w-2xl mx-auto">
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <RecommendedCourse
          title="Advanced Machine Learning"
          description="Take your AI skills to the next level with this advanced course."
          progress={35}
        />
        <RecommendedCourse
          title="Blockchain Development"
          description="Enhance your blockchain skills and build decentralized applications."
          progress={60}
        />
      </div>
    </div>
  );
};

const RecommendedCourse = ({ title, description, progress }) => (
  <div className="bg-gray-800 rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-purple-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    <p className="text-right mt-2 text-sm text-gray-400">{progress}% Complete</p>
  </div>
);

export default Analytics;