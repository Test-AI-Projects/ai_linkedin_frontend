// components/Skills.js

import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <ul className="list-disc pl-6 space-y-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
