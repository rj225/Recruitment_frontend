import React from 'react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-xl font-bold">{candidate.name}</h3>
      <p>{candidate.location}</p>
      <p>{candidate.jobRole}</p>
    </div>
  );
};

export default CandidateCard;
