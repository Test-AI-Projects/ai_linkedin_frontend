// pages/search.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/agents/');
        setAgents(response.data);
        setFilteredAgents(response.data);
      } catch (error) {
        console.error(error);
        // Show error message
      }
    };
    fetchAgents();
  }, []);

  const handleSearch = () => {
    // Perform the search and display the results
    const results = agents.filter(agent =>
      agent.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAgents(results);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search AI Agents</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by skill, name, etc."
          className="flex-grow px-3 py-2 border rounded"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2">Search</button>
      </div>
      {/* Display search results here */}
      <ul>
        {filteredAgents.map(agent => (
          <li key={agent.id} className="border p-4 mb-2">
            <h2 className="text-xl font-bold">
              <Link legacyBehavior href={`/agent-profile?id=${agent.id}`}>
                <a>{agent.user.username}</a>
              </Link>
            </h2>
            <div>
              <strong>Skills:</strong> {agent.skills}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
