import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CandidateCard from '../Components/CandidateCard';
import AOS from 'aos';
import Navbar from '../Components/Navbar';
import FirstCapital from '../Utils/FirstCapital';
import { FiAlertCircle } from 'react-icons/fi'
import { IoCloseCircleSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import { FaBookmark } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Footer from '../Components/Footer';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import SpinnerLoader from '../Components/SpinnerLoader';

const CandidateSearch = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedJobRoles, setSelectedJobRoles] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [allCandidates, setAllCandidates] = useState([]);
  const [unmarkedCandidates, setUnmarkedCandidates] = useState([])
  const [markedCandidates, setMarkedCandidates] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [jobRoleOptions, setJobRoleOptions] = useState([]);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    allusers()
  }, [])


  const allusers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASIC_API_URL}/users`);
      const alldata = response.data[0];
      const uniqueLocations = [...new Set(alldata.map(user => FirstCapital(user.location)))];
      const uniqueJobRoles = [...new Set(alldata.map(user => FirstCapital(user.roles)))];
      setLocationOptions(uniqueLocations);
      setJobRoleOptions(uniqueJobRoles);
      // console.log(response.data[0]);
      // setCandidates(response.data[0]); // just ading here to display all users in the starting
      setAllCandidates(response.data[0]);
    } catch (error) {

    }
  }

  const searchCandidates = async () => {

    console.log(unmarkedCandidates);

    let filteredCandidates = unmarkedCandidates;
    if (selectedLocations.length > 0) {
      filteredCandidates = filteredCandidates.filter(candidate => selectedLocations.includes(FirstCapital(candidate.location)));
    }

    if (selectedJobRoles.length > 0) {
      filteredCandidates = filteredCandidates.filter(candidate => selectedJobRoles.includes(FirstCapital(candidate.roles)));
    }

    setCandidates(filteredCandidates);


  }

  const handleJobRoleSelect = (role) => {
    setSelectedJobRoles([...selectedJobRoles, role]);
    setJobRoleOptions(jobRoleOptions.filter(opt => opt !== role));
  };

  const handleLocationSelect = (location) => {
    setSelectedLocations([...selectedLocations, location]);
    setLocationOptions(locationOptions.filter(opt => opt !== location));
  };

  const removeSelectedJobRole = (role) => {
    setSelectedJobRoles(selectedJobRoles.filter(r => r !== role));
    setJobRoleOptions([...jobRoleOptions, role]);
  };

  const removeSelectedLocation = (location) => {
    setSelectedLocations(selectedLocations.filter(l => l !== location));
    setLocationOptions([...locationOptions, location]);
  };

  const fetchMarkCandidate = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASIC_API_URL}/bookmark`, { withCredentials: true });
      const markedCandidate = response.data.data.users;

      // const filteredCandidates = allCandidates.filter(candidate =>
      //   !markedCandidate.some(mark => mark.id === candidate.id)
      // );

      const markedCandidatesid = markedCandidate.map((candidate) => candidate.id)
      const filteredCandidates = allCandidates.filter(candidate => !markedCandidatesid.includes(candidate.id)).map(candidate => candidate);
      // console.log("filteredCandidates :" , filteredCandidates);

      setCandidates(filteredCandidates);
      setUnmarkedCandidates(filteredCandidates);
      setMarkedCandidates(response.data.data.users);
    } catch (error) {
      console.error('Error fetching marked candidates:', error);
    }
  }, [allCandidates]);

  useEffect(() => {
    fetchMarkCandidate();
  }, [fetchMarkCandidate]);

  const postMarkCandidate = async (candidate) => {
    // checkin this condition that the candidate is alredy book marked or not

    if (markedCandidates.some(mark => mark.id === candidate.id)) {
      toast.warn('Candidate is already bookmarked');
      return;
    }

    try {
      await toast.promise(axios.post(`${process.env.REACT_APP_BASIC_API_URL}/bookmark`, {
        userId: candidate.id
      }, { withCredentials: true }),
        {
          loading: 'Marking candidate...',
          success: 'Candidate bookmarked successfully',
          error: `Failed to bookmark candidate`,
        }
      );
      // console.log('Bookmark response:', response.data);
      setMarkedCandidates(prevCandidates => [...prevCandidates, candidate]);
      setCandidates(prev => prev.filter(c => c.id !== candidate.id));
      setUnmarkedCandidates(prev => prev.filter(c => c.id !== candidate.id));
    } catch (error) {
      console.error('Error bookmarking user:', error);
    }
  };

  const deleteMarkedCandidate = async (candidateId) => {
    try {
      const requestData = { userId: candidateId };
      await toast.promise(
        axios.delete(`${process.env.REACT_APP_BASIC_API_URL}/bookmark`, {
          data: requestData,
          withCredentials: true
        }),
        {
          loading: 'Deleting...',
          success: 'Candidate deleted successfully',
          error: `Failed to delete candidate`,
        }
      );
      setMarkedCandidates(markedCandidates.filter(candidate => candidate.id !== candidateId));

      // here we need to use allCandidate because in this funtion candidate.id is paseed
      // if cadidate was passed, we could have used candidate directly, 
      // just because candidateId is passed we need to get the candidate from allCandidates

      const unmarkedCandidate = allCandidates.find(candidate => candidate.id === candidateId);
      // console.log('Candidate ID to find:', candidateId);
      // console.log('All Candidates:', allCandidates);
      // console.log('Found Candidate:', unmarkedCandidate);
      if (unmarkedCandidate) {
        setCandidates(prev => [...prev, unmarkedCandidate]);
        setUnmarkedCandidates(prev => [...prev, unmarkedCandidate]);
      }
    } catch (error) {
      console.error('Error deleting marked candidate:', error);
    }
  };


  useEffect(() => {
    if (isFullViewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isFullViewOpen]);

  const toggleFullView = () => {
    setIsFullViewOpen(!isFullViewOpen);
  };



  return (
    <>
      <Navbar />
      <div className="min-h-screen md:w-[99vw] w-screen bg-gradient-to-tl from-red-50 to-red-200 md:p-6 px-2 pt-4 pb-3 relative md:flex">
        <div className="md:w-3/4 w-full">
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-4 text-red-700" data-aos="slide-down">Search Candidates</h2>
          <button
            className="md:hidden absolute top-2 right-4 bg-white p-2 rounded-full shadow-lg"
            onClick={toggleFullView}
          >
            <GiHamburgerMenu className="text-gray-700" size={24} />
          </button>

          {(candidates.length > 0) ? (<><div className="flex flex-col mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className='w-full flex md:flex-row flex-col p'>
              <select
                value=""
                onChange={(e) => handleLocationSelect(e.target.value)}
                className="md:mr-2 md:mb-0 mb-2 p-2 border rounded  md:w-1/3 w-full"
              >
                <option value="">Select Location</option>
                {locationOptions.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
              <select
                value=""
                onChange={(e) => handleJobRoleSelect(e.target.value)}
                className="md:mr-2 md:mb-0 mb-2 p-2 border rounded md:w-1/3 w-full"
              >
                <option value="">Select Job Role</option>
                {jobRoleOptions.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </select>
              <button onClick={searchCandidates} className="bg-red-500 text-white md:px-4 px-2 py-2 md:py-2 rounded">Search</button>
            </div>
            <div className="flex flex-wrap md:w-3/4 w-full h-min mt-2">
              {selectedLocations.map((loc, index) => (
                <div key={index} className="bg-blue-200 rounded-md px-2 py-1 m-1 flex items-center">
                  {loc}
                  <button onClick={() => removeSelectedLocation(loc)} className="ml-2 text-red-600">
                    <IoCloseSharp />
                  </button>
                </div>
              ))}
              {selectedJobRoles.map((role, index) => (
                <div key={index} className="bg-green-200 rounded-md px-2 py-1 m-1 flex items-center">
                  {role}
                  <button onClick={() => removeSelectedJobRole(role)} className="ml-2 text-red-600">
                    <IoCloseSharp />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-3 grid-cols-1 md:gap-4">
            {candidates.map((candidate, index) => (
              <div className='bg-white p-4 rounded-lg shadow-lg mb-4 w-full ' data-aos="fade-up" data-aos-offset="100" data-aos-delay={300 + (index % 3) * 100} key={candidate.id}>
                <CandidateCard candidate={candidate} />
                <button
                  onClick={() => postMarkCandidate(candidate)}
                  className="mt-2 bg-red-600 text-white px-2 flex justify-center items-center space-x-2 py-1 rounded-lg">
                  Mark Candidate &nbsp; <FaBookmark className='text-red-200' />
                </button>
              </div>
            ))}
          </div>
          </>) : (<SpinnerLoader/>)}
        </div>
        <div className={`md:w-1/4 md:p-4 h-[75vh] md:block w-full hidden md:h-fit bg-white shadow-lg rounded md:mt-4 mb-5 ml-4`} data-aos="slide-left" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Marked Candidate List</h3>
          {markedCandidates.length === 0 ? (
            <div className="text-center h-96 flex flex-col justify-center items-center text-gray-500">
              <FiAlertCircle className="mx-auto text-7xl mb-5 animate-bounce text-red-500" />
              <div className=' text-2xl font-bold font-serif'>No candidates marked yet.</div>
            </div>
          ) : (
            <ul className='max-h-[70vh] p-3 overflow-auto'>
              {markedCandidates.map(candidate => (
                <li key={candidate.id} className="mb-2 border-b-2 pb-2 flex items-center justify-between">
                  <CandidateCard candidate={candidate} />
                  <button
                    onClick={() => deleteMarkedCandidate(candidate.id)}
                    className="ml-2 text-2xl text-red-800"
                  >
                    <IoCloseCircleSharp />
                  </button>
                </li>
              ))}
            </ul>

          )}
        </div>
        {/* Full-screen view for md and above */}
        {isFullViewOpen && <div className={`md:w-1/4 md:p-4 w-full p-2 absolute top-1 right-1 md:h-fit bg-white shadow-lg rounded mb-5 ml-4`} data-aos="slide-left" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Marked Candidate List</h3>
          <button
            className="fixed top-1 right-1 text-3xl"
            onClick={toggleFullView}
          >
            <AiTwotoneCloseCircle />
          </button>
          {markedCandidates.length === 0 ? (
            <div className="text-center h-96 flex flex-col justify-center items-center text-gray-500">
              <FiAlertCircle className="mx-auto text-7xl mb-5 animate-bounce text-red-500" />
              <div className=' text-2xl font-bold font-serif'>No candidates marked yet.</div>
            </div>
          ) : (
            <ul className='max-h-[70vh] p-3 overflow-auto'>
              {markedCandidates.map(candidate => (
                <li key={candidate.id} className="mb-2 border-b-2 pb-2 flex items-center justify-between">
                  <CandidateCard candidate={candidate} />
                  <button
                    onClick={() => deleteMarkedCandidate(candidate.id)}
                    className="ml-2 text-2xl text-red-800"
                  >
                    <IoCloseCircleSharp />
                  </button>
                </li>
              ))}
            </ul>

          )}
        </div>}
      </div>
      <Footer />
    </>
  );
};

export default CandidateSearch;
