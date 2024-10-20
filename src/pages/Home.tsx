import React from 'react';
import { ArrowRight, MessageSquare, Megaphone, Calendar, Star, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredEvents = [
    { id: 1, title: "AI-Driven UX Design Workshop", date: "June 15-17, 2024", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80", skills: ["AI in UX", "User Research", "Prototyping"] },
    { id: 2, title: "FinTech UX Summit", date: "July 22-24, 2024", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80", skills: ["Financial UX", "User-Centered Design", "FinTech Trends"] },
    { id: 3, title: "UX Research Masterclass", date: "August 10-12, 2024", image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80", skills: ["User Research", "Data Analysis", "Usability Testing"] },
  ];

  const latestResources = [
    { id: 1, title: "AI in UX Design", type: "Article" },
    { id: 2, title: "Financial UX Principles", type: "Video" },
    { id: 3, title: "User Research Techniques", type: "E-book" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text relative z-10">
          Prove Your Journey in Personal Growth
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10 text-gray-600 dark:text-gray-300">
          Collect, verify, and showcase your learning experiences with blockchain-powered credentials
        </p>
        <div className="flex justify-center space-x-4 relative z-10">
          <Link to="/events" className="btn btn-primary">
            Start Your Journey
          </Link>
          <Link to="/events" className="btn btn-secondary">
            Explore Events
          </Link>
        </div>
      </div>

      {/* Featured Events Carousel */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Featured Events</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Why EXP3 Section */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <FeatureSection
          icon={<MessageSquare size={48} className="text-purple-500" />}
          title="Verifiable Experiences"
          description="Secure your learning milestones with blockchain technology"
        />
        <FeatureSection
          icon={<Megaphone size={48} className="text-purple-500" />}
          title="Skill Validation"
          description="Prove your abilities with immutable records"
        />
        <FeatureSection
          icon={<Star size={48} className="text-purple-500" />}
          title="Continuous Growth"
          description="Track your progress and unlock new opportunities"
        />
      </div>

      {/* Latest Resources Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Latest Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {latestResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-lg p-12 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Prove Your Growth?</h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Join EXP3 today and start your journey towards verifiable personal development.</p>
        <Link to="/signup" className="btn btn-primary">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

const FeatureSection = ({ icon, title, description }) => (
  <div className="card p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-200">
    <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
    <div className="float-animation mb-4 relative z-10">{icon}</div>
    <h2 className="text-2xl font-semibold mb-4 relative z-10 text-gray-800 dark:text-gray-200">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">{description}</p>
  </div>
);

const EventCard = ({ event }) => (
  <div className="card flex-shrink-0 w-80">
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{event.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{event.date}</p>
      <div className="mb-4">
        {event.skills.map((skill, index) => (
          <span key={index} className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">{skill}</span>
        ))}
      </div>
      <Link to={`/events/${event.id}`} className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors duration-200">
        View Details <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </div>
);

const ResourceCard = ({ resource }) => (
  <div className="card p-6 relative overflow-hidden transform hover:scale-105 transition-transform duration-200">
    <Book size={24} className="text-purple-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{resource.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.type}</p>
    <Link to={`/resources/${resource.id}`} className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors duration-200">
      Learn More <ArrowRight size={16} className="ml-2" />
    </Link>
  </div>
);

export default Home;