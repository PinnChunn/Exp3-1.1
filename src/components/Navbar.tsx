import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, User, Book, Map, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md relative z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">EXP3</span>
        </Link>
        <div className="flex items-center space-x-6">
          <NavLink to="/" icon={<Home size={20} />} text="Home" />
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              Explore
              <ChevronDown size={16} className="ml-1" />
            </button>
            {isExploreOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                <DropdownLink to="/events" icon={<Calendar size={16} />} text="Events" />
                <DropdownLink to="/resources" icon={<Book size={16} />} text="Resources" />
                <DropdownLink to="/skill-paths" icon={<Map size={16} />} text="Skill Paths" />
              </div>
            )}
          </div>
          <NavLink to="/profile" icon={<User size={20} />} text="Profile" />
          <NavLink to="/records" icon={<Book size={20} />} text="Records" />
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
    {icon}
    <span className="ml-1 hidden md:inline">{text}</span>
  </Link>
);

const DropdownLink: React.FC<NavLinkProps> = ({ to, icon, text }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400"
  >
    <span className="flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </span>
  </Link>
);

export default Navbar;