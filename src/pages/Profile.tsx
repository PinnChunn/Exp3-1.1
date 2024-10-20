import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { MapPin, Mail, Link as LinkIcon, Book, Award, Clock, Wallet, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Profile = () => {
  const [showTokenInfo, setShowTokenInfo] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(1.02); // Initial exchange rate

  const userInfo = {
    name: "John Doe",
    title: "UX Designer",
    bio: "Passionate about creating user-centered designs and exploring the intersection of AI and UX.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    website: "https://johndoe.design",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    skills: ['UX Research', 'AI-Driven Design', 'Financial UX', 'Prototyping', 'User Testing'],
    tokenBalance: 1000,
  };

  const learningProgress = {
    coursesCompleted: 12,
    certificatesEarned: 5,
    hoursLearned: 150,
  };

  const skillData = {
    labels: ['UX Research', 'AI in UX', 'Financial UX', 'Interaction Design', 'User Testing'],
    datasets: [
      {
        label: 'Skill Level',
        data: [9, 7, 8, 6, 9],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          stepSize: 2,
          color: 'rgba(0, 0, 0, 0.5)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: 'rgba(0, 0, 0, 0.7)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const transactionHistory = [
    { id: 1, event: "AI-Driven UX Design Workshop", date: "2024-06-17", amount: -299 },
    { id: 2, event: "FinTech UX Summit", date: "2024-07-24", amount: -499 },
    { id: 3, event: "Completed UX Research Masterclass", date: "2024-08-12", amount: 600 },
  ];

  const updateExchangeRate = () => {
    // Simulating an API call to update the exchange rate
    const newRate = (Math.random() * (1.05 - 0.99) + 0.99).toFixed(2);
    setExchangeRate(parseFloat(newRate));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-gray-800">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img src={userInfo.avatar} alt={userInfo.name} className="rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-6 border-4 border-white shadow-md" />
          <div>
            <h1 className="text-4xl font-bold mb-2 text-indigo-700">{userInfo.name}</h1>
            <h2 className="text-2xl text-indigo-600 mb-2">{userInfo.title}</h2>
            <p className="mb-4 text-gray-600">{userInfo.bio}</p>
            <div className="flex flex-wrap mb-4">
              <div className="flex items-center mr-4 mb-2">
                <MapPin className="mr-2 text-indigo-500" size={16} />
                <span className="text-gray-600">{userInfo.location}</span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <Mail className="mr-2 text-indigo-500" size={16} />
                <a href={`mailto:${userInfo.email}`} className="text-indigo-600 hover:underline">{userInfo.email}</a>
              </div>
              <div className="flex items-center mb-2">
                <LinkIcon className="mr-2 text-indigo-500" size={16} />
                <a href={userInfo.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{userInfo.website}</a>
              </div>
            </div>
            <div className="flex flex-wrap mb-4">
              {userInfo.skills.map((skill, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 shadow-sm">{skill}</span>
              ))}
            </div>
            <div className="flex items-center text-indigo-600 font-semibold cursor-pointer" onClick={() => setShowTokenInfo(!showTokenInfo)}>
              <Wallet size={20} className="mr-2" />
              <span>{userInfo.tokenBalance} EXP3 Tokens</span>
              {showTokenInfo ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
            </div>
          </div>
        </div>

        {showTokenInfo && (
          <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-indigo-700">Token Value</h3>
              <button onClick={updateExchangeRate} className="flex items-center text-indigo-600 hover:text-indigo-800">
                <RefreshCw size={16} className="mr-1" />
                Update Rate
              </button>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold mb-2">Current Exchange Rate:</p>
              <p className="text-2xl font-bold">1 EXP3 = {exchangeRate.toFixed(2)} NTD</p>
              <p className="text-lg mt-2">Your Balance: {userInfo.tokenBalance} EXP3 = {(userInfo.tokenBalance * exchangeRate).toFixed(2)} NTD</p>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-700">Transaction History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="px-4 py-2">Event</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Value (NTD)</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((transaction) => (
                    <tr key={transaction.id} className="border-b">
                      <td className="px-4 py-2">{transaction.event}</td>
                      <td className="px-4 py-2">{transaction.date}</td>
                      <td className={`px-4 py-2 ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount} EXP3
                      </td>
                      <td className={`px-4 py-2 ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}{(transaction.amount * exchangeRate).toFixed(2)} NTD
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Skill Radar</h3>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <Radar data={skillData} options={options} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Learning Progress</h3>
            <div className="grid grid-cols-3 gap-4">
              <ProgressCard icon={<Book size={24} />} title="Courses Completed" value={learningProgress.coursesCompleted} />
              <ProgressCard icon={<Award size={24} />} title="Certificates Earned" value={learningProgress.certificatesEarned} />
              <ProgressCard icon={<Clock size={24} />} title="Hours Learned" value={learningProgress.hoursLearned} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
    <div className="text-indigo-500 mb-2">{icon}</div>
    <div className="text-3xl font-bold mb-1 text-indigo-700">{value}</div>
    <div className="text-sm text-center text-gray-600">{title}</div>
  </div>
);

export default Profile;