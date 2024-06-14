
import React from 'react';
import { IoLocation } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import FirstCapital from "../Utils/FirstCapital";


const CandidateCard = ({ candidate }) => {

  return (
    <div className="space-y-3">
      <h3 className="sm:text-2xl text-xl font-bold">{FirstCapital(candidate.name)}</h3>
      <div className='flex flex-wrap'>Email : {candidate.email}</div>
      <div className='flex items-center'>
        <div className="flex text-base items-center mr-5"><IoLocation className="text-red-800"/> &nbsp; {FirstCapital(candidate.location)}</div>
        <div className="flex text-base items-center"><MdWork className="text-red-800"/> &nbsp; {FirstCapital(candidate.roles)}</div>
      </div>
    </div>
  );
};

export default CandidateCard;
