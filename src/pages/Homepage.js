import React from 'react';
import Feature from '../Components/Feature';
import img from './asset/landing.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AOS from 'aos';
import { useEffect } from 'react';
import Partner from '../Components/Partner';
import 'aos/dist/aos.css';
import Contact from '../Components/Contact';
import Testimonial from '../Components/Testimonial';
import { Link } from 'react-router-dom';

const Homepage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />

      <main className="container w-full font-serif z-0 mx-auto">
        <div className='flex-1 w-full mt-16 rounded-2xl text-center p-6 shadow-lg' data-aos="zoom-in-down" data-aos-delay="200">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-4">Efficient Hiring for Managers and HR Professionals</h2>
          <p className="md:text-xl sm:text-lg text-base text-gray-500 mb-6">Streamline your recruitment process with our comprehensive solution.</p>
          <div className='flex justify-center items-center w-full sm:h-96 my-5'><img src={img} alt='img' className='shadow-xl object-cover rounded-3xl h-full sm:w-7/12' /></div>
          <Link to="/candidate-search" ><button className="bg-red-600 text-lg text-white md:px-6 sm:px-5 px-4 md:py-3 sm:py-2 py-1 hover:ring-1 hover:scale-105 transition-all duration-500 hover:bg-transparent hover:text-red-800 hover:ring-red-500 rounded-lg">Start Hiring</button></Link>
        </div>

        <section className="mt-20">
          <h3 className="md:text-3xl sm:text-2xl text-xl text-red-900 text-center font-bold mb-4">Key Features</h3>
          
                {/* for bigger smaller than md */}
          <div className="container md:hidden block mx-auto">
          <div className="grid grid-cols-1 md:hidden px-3 gap-6">
            {/* Feature 1 */}
            <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="600">
              <Feature
                title="Centralized Candidate Management"
                description="A centralized candidate management system within an online recruitment solution streamlines the hiring process by storing all candidate information, resumes, and communication logs in a centralized database. This facilitates easy access to candidate profiles and status updates, enhancing efficiency and expediting the hiring timeline."
                className="w-full"
              />
            </div>
  
            {/* Feature 2 */}
            <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="600">
              <Feature
                title="Automated Applicant Tracking System (ATS)"
                description="An automated Applicant Tracking System (ATS) simplifies the hiring process by automating applicant progress tracking through various recruitment stages. This eliminates manual data entry tasks and paperwork, streamlines communication, enhances collaboration among hiring team members, and expedites decision-making."
                className="w-full"
              />
            </div>
  
            {/* Feature 3 */}
            <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="600">
              <Feature
                title="Customizable Job Posting Templates"
                description="Customizable job posting templates empower hiring managers to create and publish job listings quickly and efficiently. These templates offer flexibility and consistency in job advertisements, saving time and effort while attracting qualified candidates by effectively communicating job roles and requirements."
                className="w-full"
              />
            </div>
  
            {/* Feature 4 */}
            <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="600">
              <Feature
                title="Integrated Interview Scheduling Tools"
                description="Integrated interview scheduling tools simplify the coordination of interview schedules among hiring team members, candidates, and interview panel members. These tools eliminate scheduling conflicts, automate calendar integration, and ensure timely and well-organized interviews, enhancing the candidate experience and expediting the hiring process."
                className="w-full"
              />
            </div>
  
            {/* Feature 5 */}
            <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="600">
              <Feature
                title="Collaborative Hiring Workflows"
                description="Collaborative hiring workflows foster effective communication and collaboration among hiring team members throughout the recruitment process. These workflows provide a centralized platform for sharing candidate profiles, feedback forms, and interview evaluations, accelerating the candidate evaluation process, reducing time-to-hire, and improving overall hiring efficiency."
                className="w-full"
              />
            </div>
  
            {/* Feature 6 */}
            <div className="flex flex-col justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="600">
              <Feature
                title="Data-driven Analytics and Reporting"
                description="Data-driven analytics and reporting capabilities provide valuable insights into recruitment metrics and performance indicators. These capabilities enable organizations to track and analyze key recruitment metrics such as time-to-fill, candidate sourcing channels, and hiring costs, empowering data-driven decision-making and strategic planning."
                className="w-full"
              />
            </div>
          </div>
          </div>

                {/* for bigger than md */}
          <div className="md:flex md:flex-wrap w-full hidden items-start">
            <div className="flex my-10 justify-center w-full ">
              <div className="flex w-full gap-4" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
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

            <div className="flex justify-center w-full" data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
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

      <Testimonial/>
      <Partner />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Homepage;
