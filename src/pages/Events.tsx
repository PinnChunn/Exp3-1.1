import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Search, Filter, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "AI-Driven UX Design Workshop",
      date: "June 15-17, 2024",
      location: "Virtual",
      price: 299,
      category: "ux",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      xp: 500,
      skills: ["AI in UX", "User Research", "Prototyping"]
    },
    {
      id: 2,
      title: "FinTech UX Summit",
      date: "July 22-24, 2024",
      location: "New York, NY",
      price: 499,
      category: "finance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      xp: 750,
      skills: ["Financial UX", "User-Centered Design", "FinTech Trends"]
    },
    {
      id: 3,
      title: "UX Research Masterclass",
      date: "August 10-12, 2024",
      location: "San Francisco, CA",
      price: 399,
      category: "ux",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      xp: 600,
      skills: ["User Research", "Data Analysis", "Usability Testing"]
    },
    {
      id: 4,
      title: "AI Ethics in UX Design",
      date: "September 5-7, 2024",
      location: "Virtual",
      price: 349,
      category: "ai",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      xp: 550,
      skills: ["AI Ethics", "Inclusive Design", "Responsible AI"]
    },
    {
      id: 5,
      title: "Financial Product Design Workshop",
      date: "October 15-17, 2024",
      location: "Chicago, IL",
      price: 449,
      category: "finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      xp: 700,
      skills: ["Financial Product Design", "User Journey Mapping", "FinTech UX"]
    },
  ];

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || event.category === filter)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Upcoming UX, Finance, and AI Events</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex items-center">
          <Filter className="mr-2 text-gray-400" size={20} />
          <select
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="ux">UX Design</option>
            <option value="finance">Finance</option>
            <option value="ai">AI-Driven UX</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ event }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{event.title}</h3>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
        <Calendar size={16} className="mr-2" />
        <span>{event.date}</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
        <MapPin size={16} className="mr-2" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
        <DollarSign size={16} className="mr-2" />
        <span>${event.price}</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
        <Award size={16} className="mr-2" />
        <span>{event.xp} XP</span>
      </div>
      <div className="mb-4">
        {event.skills.map((skill, index) => (
          <span key={index} className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">{skill}</span>
        ))}
      </div>
      <Link to={`/events/${event.id}`} className="bg-purple-600 text-white px-4 py-2 rounded-full block text-center hover:bg-purple-700 transition-colors duration-200">
        View Details
      </Link>
    </div>
  </div>
);

export default Events;