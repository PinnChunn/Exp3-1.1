import React from 'react';
import { Book, Video, FileText, Link as LinkIcon } from 'lucide-react';

const Resources = () => {
  const resources = [
    { id: 1, title: "Introduction to Blockchain", type: "ebook", icon: Book },
    { id: 2, title: "Machine Learning Fundamentals", type: "video", icon: Video },
    { id: 3, title: "Web3 Development Guide", type: "pdf", icon: FileText },
    { id: 4, title: "Cybersecurity Best Practices", type: "link", icon: LinkIcon },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Learning Resources</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

const ResourceCard = ({ resource }) => {
  const Icon = resource.icon;
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Icon size={24} className="text-purple-500 mr-2" />
        <h2 className="text-xl font-semibold">{resource.title}</h2>
      </div>
      <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200">
        Access Resource
      </button>
    </div>
  );
};

export default Resources;