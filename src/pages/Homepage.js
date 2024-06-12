import React from 'react';
import Feature from '../Components/Feature';
import img from './asset/landing.png'
import Navbar from '../Components/Navbar';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar/>

      <main className="container w-full font-serif mx-auto">
        <div className='flex-1 w-full mt-16 rounded-2xl text-center p-6 shadow-lg'>
        <h2 className="text-4xl font-bold mb-4">Efficient Hiring for Managers and HR Professionals</h2>
        <p className="text-xl text-gray-500 mb-6">Streamline your recruitment process with our comprehensive solution.</p>
        <div className='flex justify-center items-center w-full h-96 my-5'><img src={img} alt='img' className='shadow-xl rounded-3xl h-full w-7/12'/></div>
        <button className="bg-red-600 text-lg text-white px-6 py-3 hover:ring-2 hover:scale-110 duration-500 hover:bg-transparent hover:text-black hover:ring-red-500 rounded-lg">Get Started</button>
        </div>

        <section className="mt-20">
          <h3 className="text-4xl text-red-900 text-center font-bold mb-4">Key Features</h3>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
          <div className="flex flex-wrap w-full items-start">
            <div className="flex my-10 justify-center w-full ">
              <div className="flex w-full gap-4">
                <Feature
                  title="Centralized Candidate Management"
                  description="A centralized candidate management system within an online recruitment solution streamlines the hiring process by storing all candidate information, resumes, and communication logs in a centralized database. This facilitates easy access to candidate profiles and status updates, enhancing efficiency and expediting the hiring timeline."
                  className="w-full lg:w-1/3 lg:mt-10"
                />

                <Feature
                  title="Automated Applicant Tracking System (ATS)"
                  description="An automated Applicant Tracking System (ATS) simplifies the hiring process by automating applicant progress tracking through various recruitment stages. This eliminates manual data entry tasks and paperwork, streamlines communication, enhances collaboration among hiring team members, and expedites decision-making."
                  className="w-full lg:w-1/3 lg:mb-10"
                />

                <Feature
                  title="Customizable Job Posting Templates"
                  description="Customizable job posting templates empower hiring managers to create and publish job listings quickly and efficiently. These templates offer flexibility and consistency in job advertisements, saving time and effort while attracting qualified candidates by effectively communicating job roles and requirements."
                  className="w-full lg:w-1/3 lg:mt-10"
                />
              </div>
            </div>

            <div className="flex justify-center w-full ">
              <div className="flex w-full gap-4">
                <Feature
                  title="Integrated Interview Scheduling Tools"
                  description="Integrated interview scheduling tools simplify the coordination of interview schedules among hiring team members, candidates, and interview panel members. These tools eliminate scheduling conflicts, automate calendar integration, and ensure timely and well-organized interviews, enhancing the candidate experience and expediting the hiring process."
                  className="w-full lg:w-1/3 mb-8 lg:mb-0"
                />

                <Feature
                  title="Collaborative Hiring Workflows"
                  description="Collaborative hiring workflows foster effective communication and collaboration among hiring team members throughout the recruitment process. These workflows provide a centralized platform for sharing candidate profiles, feedback forms, and interview evaluations, accelerating the candidate evaluation process, reducing time-to-hire, and improving overall hiring efficiency."
                  className="w-full lg:w-1/3 mb-8 lg:-mt-12"
                />

                <Feature
                  title="Data-driven Analytics and Reporting"
                  description="Data-driven analytics and reporting capabilities provide valuable insights into recruitment metrics and performance indicators. These capabilities enable organizations to track and analyze key recruitment metrics such as time-to-fill, candidate sourcing channels, and hiring costs, empowering data-driven decision-making and strategic planning."
                  className="w-full lg:w-1/3 mb-8 lg:mb-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Recruitment Solution. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
