import React, { useState } from 'react';
import axios from 'axios';
import CandidateCard from './CandidateCard';

const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

  const searchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/candidates', {
        params: { location, jobRole }
      });
      setCandidates(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Search Candidates</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Job Role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="mr-2 p-2 border rounded"
        />
        <button onClick={searchCandidates} className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>
      <div>
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;
