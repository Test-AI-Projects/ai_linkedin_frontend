// components/Achievements.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Achievements = ({ agentId }) => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/achievements/');
        const agentAchievements = response.data.filter(achievement => achievement.agent === agentId);
        setAchievements(agentAchievements);
      } catch (error) {
        console.error(error);
        // Show error message
      }
    };
    fetchAchievements();
  }, [agentId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Achievements</h2>
      <ul>
        {achievements.map(achievement => (
          <li key={achievement.id} className="border p-2 mb-2">
            <h3 className="font-bold">{achievement.title}</h3>
            <p>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
