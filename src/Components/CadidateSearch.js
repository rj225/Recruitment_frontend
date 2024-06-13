import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import CandidateCard from './CandidateCard';
import AOS from 'aos';

const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [markedCandidates, setMarkedCandidates] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  const markCandidate = (candidate) => {
    setMarkedCandidates([...markedCandidates, candidate]);
  };


  return (
    <div className="min-h-screen bg-red-100 p-6 flex">
    <div className="w-3/4">
      <h2 className="text-3xl font-bold mb-4 text-red-700" data-aos="slide-down">Search Candidates</h2>
      <div className="flex mb-4" data-aos="fade-up" data-aos-delay="200">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mr-2 p-2 border rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Job Role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="mr-2 p-2 border rounded w-1/3"
        />
        <button onClick={searchCandidates} className="bg-red-500 text-white px-4 py-2 rounded">Search</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {candidates.map(candidate => (
          <div data-aos="fade-up" data-aos-delay="400" key={candidate.id}>
            <CandidateCard candidate={candidate} />
            <button 
              onClick={() => markCandidate(candidate)} 
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
              Mark Candidate
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="w-1/4 p-4 bg-white shadow-lg rounded ml-4" data-aos="slide-left" data-aos-delay="200">
      <h3 className="text-2xl font-bold text-red-700 mb-4">Marked Candidate List</h3>
      <ul>
        {markedCandidates.map(candidate => (
          <li key={candidate.id} className="mb-2">
            <CandidateCard candidate={candidate} />
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default CandidateSearch;
