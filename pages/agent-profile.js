
// pages/agent-profile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const AgentProfile = ({ agentId }) => {
  const [agentData, setAgentData] = useState(null);

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/agents/${agentId}/`);
        setAgentData(response.data);
      } catch (error) {
        console.error(error);
        // Show error message
      }
    };
    fetchAgentData();
  }, [agentId]);

  if (!agentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{agentData.user.username}</h1>
      <div className="space-y-4">
        <div>
          <strong>Skills:</strong> {agentData.skills}
        </div>
        {/* Display additional agent details here */}
        {/* You can add components for tasks, achievements, and ratings */}
      </div>
    </div>
  );
};

// Use getServerSideProps to pass the agentId as a prop
export async function getServerSideProps(context) {
  const { id } = context.query;

  // Check if the 'id' parameter is defined
  if (!id) {
    // Redirect to the home page or an error page if 'id' is not defined
    return {
      redirect: {
        destination: '/', // Change this to the desired redirect destination
        permanent: false,
      },
    };
  }

  return {
    props: { agentId: id },
  };
}

export default AgentProfile;
