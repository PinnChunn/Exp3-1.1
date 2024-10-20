import React from 'react';
import { ArrowRight } from 'lucide-react';

const SkillPaths = () => {
  const designerPaths = [
    {
      title: "UI/UX Design Fundamentals",
      description: "Master the basics of user interface and user experience design.",
      skills: ["Visual Design", "Wireframing", "Prototyping"],
      level: "Beginner",
    },
    {
      title: "Advanced Interaction Design",
      description: "Learn to create engaging and intuitive user interactions.",
      skills: ["Micro-interactions", "Animation", "Gesture Design"],
      level: "Intermediate",
    },
    {
      title: "Design Systems Architecture",
      description: "Build and maintain scalable design systems for large projects.",
      skills: ["Component Libraries", "Style Guides", "Design Tokens"],
      level: "Advanced",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Designer Skill Paths</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designerPaths.map((path, index) => (
          <SkillPathCard key={index} path={path} />
        ))}
      </div>
    </div>
  );
};

const SkillPathCard = ({ path }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-semibold mb-2">{path.title}</h2>
    <p className="text-gray-400 mb-4">{path.description}</p>
    <div className="mb-4">
      <span className={`inline-block px-2 py-1 rounded text-sm ${
        path.level === "Beginner" ? "bg-green-600" :
        path.level === "Intermediate" ? "bg-yellow-600" :
        "bg-red-600"
      }`}>
        {path.level}
      </span>
    </div>
    <h3 className="font-semibold mb-2">Skills you'll learn:</h3>
    <ul className="list-disc list-inside mb-4 text-gray-300">
      {path.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 flex items-center">
      Start Path <ArrowRight size={16} className="ml-2" />
    </button>
  </div>
);

export default SkillPaths;