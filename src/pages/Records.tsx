import React, { useState } from 'react';
import { Check, X, AlertCircle, ExternalLink, Info } from 'lucide-react';

const Records = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');
  const [showGasFeeInfo, setShowGasFeeInfo] = useState(false);

  const records = [
    { id: 1, event: "AI-Driven UX Design Workshop", date: "2024-06-17", xp: 500, claimed: true, transactionHash: "0x123...abc" },
    { id: 2, event: "FinTech UX Summit", date: "2024-07-24", xp: 750, claimed: false, transactionHash: null },
    { id: 3, event: "UX Research Masterclass", date: "2024-08-12", xp: 600, claimed: false, transactionHash: null },
    { id: 4, event: "AI Ethics in UX Design", date: "2024-09-05", xp: 450, claimed: true, transactionHash: "0x456...def" },
  ];

  const handleClaim = (recordId) => {
    if (!walletAddress) {
      setError('Please enter a wallet address');
      return;
    }
    setError('');
    setShowGasFeeInfo(true);
  };

  const confirmClaim = () => {
    // Implement claim logic here
    console.log(`Claiming record with wallet address: ${walletAddress}`);
    setShowGasFeeInfo(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Your Learning Records</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-300">Claim Your Records</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Enter your wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="flex-grow bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={() => handleClaim('all')}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200"
          >
            Claim All Unclaimed
          </button>
        </div>
        {error && (
          <div className="mt-2 text-red-500 flex items-center">
            <AlertCircle size={16} className="mr-2" />
            {error}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <h3 className="text-xl font-semibold p-4 bg-gray-700 text-white">Unclaimed Records</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-gray-300">Event</th>
                <th className="px-6 py-3 text-left text-gray-300">Date</th>
                <th className="px-6 py-3 text-left text-gray-300">XP</th>
                <th className="px-6 py-3 text-left text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.filter(record => !record.claimed).map((record) => (
                <tr key={record.id} className="border-t border-gray-700">
                  <td className="px-6 py-4 text-gray-300">{record.event}</td>
                  <td className="px-6 py-4 text-gray-300">{record.date}</td>
                  <td className="px-6 py-4 text-gray-300">{record.xp}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleClaim(record.id)}
                      disabled={!walletAddress}
                      className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Claim
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <h3 className="text-xl font-semibold p-4 bg-gray-700 text-white">Claimed Records</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-gray-300">Event</th>
                <th className="px-6 py-3 text-left text-gray-300">Date</th>
                <th className="px-6 py-3 text-left text-gray-300">XP</th>
                <th className="px-6 py-3 text-left text-gray-300">Transaction</th>
              </tr>
            </thead>
            <tbody>
              {records.filter(record => record.claimed).map((record) => (
                <tr key={record.id} className="border-t border-gray-700">
                  <td className="px-6 py-4 text-gray-300">{record.event}</td>
                  <td className="px-6 py-4 text-gray-300">{record.date}</td>
                  <td className="px-6 py-4 text-gray-300">{record.xp}</td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://etherscan.io/tx/${record.transactionHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center"
                    >
                      View Transaction <ExternalLink size={16} className="ml-1" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showGasFeeInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h3 className="text-2xl font-bold mb-4">Gas Fee Information</h3>
            <p className="mb-4">
              Claiming this record requires a small gas fee for blockchain transaction. Do you wish to proceed?
            </p>
            <div className="flex items-center mb-4">
              <Info size={20} className="text-blue-500 mr-2" />
              <a href="#" className="text-blue-500 hover:underline">Learn more about gas fees</a>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowGasFeeInfo(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmClaim}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Records;