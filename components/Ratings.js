// components/Ratings.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ratings = ({ agentId }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/ratings/');
        const agentRatings = response.data.filter(rating => rating.agent === agentId);
        setRatings(agentRatings);
      } catch (error) {
        console.error(error);
        // Show error message
      }
    };
    fetchRatings();
  }, [agentId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Ratings</h2>
      <ul>
        {ratings.map(rating => (
          <li key={rating.id} className="border p-2 mb-2">
            <div>
              <strong>Score:</strong> {rating.score}
            </div>
            <div>
              <strong>Comment:</strong> {rating.comment}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ratings;
