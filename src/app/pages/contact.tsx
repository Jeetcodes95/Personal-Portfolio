"use client";

import React from 'react';
import Typewriter from 'typewriter-effect';



const ContactForm = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 mt-44 ">
        <div className="px-4">
            <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
              {/* Ways to Connect with Me */}
              <div className="flex header-container">
          <div className="mr-4 title-box">
            <p className="text">I&apos;m open to </p>
          </div>
          <div className="subtitle-box">
            <p className="text">
              <Typewriter
                options={{
                  strings: ['Opportunities', 'Freelance', 'Suggestions', 'Collaboration', 'Feedback', 'Networking'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
              </h2>
        </div>
        <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4">
          Thank you for your interest in getting in touch with me. I&apos;m eager to explore new opportunities, receive feedback or suggestions, collaborate on projects, and expand my network.
          <br/><br/>
          For any specific inquiries or comments, please feel free to reach out to me directly at<a className=" bg-gradient-to-r from-blue-600 to-gray-400 text-transparent bg-clip-text font-medium ml-2" href='mailto:jkbarman75@gmail.com' target='_blank'>jkbarman75@gmail.com</a>. I make every effort to respond to all messages within 24 hours, although response times may be slightly longer during peak times.
          <br/><br/>
          Additionally, if you prefer to connect via social media, you can find me on Instagram at<a className="bg-gradient-to-r from-pink-500 to-gray-400 text-transparent bg-clip-text font-medium ml-2" href='https://instagram.com/official_jeet_kumar' target='_blank'>https://instagram.com/official_jeet_kumar</a>.
        </h3>
        <div className="text-sm pt-6 sm:mt-5 font-extralight text-center relative z-20 text-gray-400 max-w-7xl pb-8">
        <a href="/Resume_JeetendraKumarBarman.pdf" target="_blank" >
        <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <img className="w-7" src="/static/download.svg" alt="JavaScript icon" />&nbsp;
                <text className="whitespace-nowrap bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text font-medium md:text-xl">Resume</text> {' '}
                </span>
              </div>
        </a>&nbsp;
        <a href="mailto:jkbarman75@gmail.com" target="_blank" >
        <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <img className="w-7" src="/static/mail.svg" alt="JavaScript icon" />&nbsp;
                <text className="whitespace-nowrap bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text font-medium md:text-xl">Contact Me</text> {' '}
                </span>
              </div>
        </a>
        </div>

        <div className="text-sm pt-60 sm:mt-20 font-extralight text-center relative z-20 text-gray-200 max-w-7xl pb-8">
          Always be inspired! | © Jeetendra Kumar Barman (shercoder)
        </div>
    </div>
  );
};

export default ContactForm;
