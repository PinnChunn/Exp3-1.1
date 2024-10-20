import React from 'react';
import { Book, Award, Clock } from 'lucide-react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Dashboard = () => {
  const userProgress = {
    coursesCompleted: 5,
    certificatesEarned: 3,
    hoursLearned: 75,
  };

  const upcomingEvents = [
    { id: 1, title: "AI Ethics Workshop", date: "May 5, 2024" },
    { id: 2, title: "Cybersecurity Fundamentals", date: "May 12, 2024" },
  ];

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
      <h1 className="text-3xl font-bold mb-6 text-purple-500 dark:text-purple-600">User Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <StatCard icon={<Book size={24} />} title="Courses Completed" value={userProgress.coursesCompleted} />
            <StatCard icon={<Award size={24} />} title="Certificates Earned" value={userProgress.certificatesEarned} />
            <StatCard icon={<Clock size={24} />} title="Hours Learned" value={userProgress.hoursLearned} />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 dark:bg-gray-200">
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">Upcoming Events</h2>
            <ul>
              {upcomingEvents.map((event) => (
                <li key={event.id} className="mb-2 pb-2 border-b border-gray-700 last:border-b-0 dark:border-gray-300">
                  <span className="font-medium dark:text-gray-800">{event.title}</span>
                  <span className="text-gray-400 ml-2 dark:text-gray-600">- {event.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 dark:bg-gray-200">
          <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">Your Skill Radar</h2>
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-gray-800 rounded-lg p-4 flex items-center dark:bg-gray-200">
    <div className="mr-4 text-purple-500">{icon}</div>
    <div>
      <h3 className="text-sm font-semibold dark:text-gray-800">{title}</h3>
      <p className="text-xl font-bold dark:text-gray-800">{value}</p>
    </div>
  </div>
);

export default Dashboard;