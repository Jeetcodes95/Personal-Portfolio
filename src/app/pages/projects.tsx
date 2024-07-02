

"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";

const ThreeDCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="px-4">
            <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0">Projects</h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-3"> 
         {dummyData.map((item, index) => (
          <div key={index}>

                <CardContainer className="inter-var">
                <CardBody key={index} className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto  h-auto rounded-xl p-6 border">
                  {/* sm:w-[30rem] */}
                  <CardItem translateZ="50" className="text-xl font-bold text-gray-100 dark:text-white">
                    {item.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-gray-400 text-sm max-w-sm mt-2">
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-end items-center mt-6">
                    <Link  href={item.link} target="_blank">
                       
                        <ButtonsCard>
                          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                              View Project →
                              </span>
                            </button>
                        </ButtonsCard>
                    </Link>
                  </div>
                </CardBody>
              </ CardContainer>
          </div>
          ))}
          </div>
    </div>
  );
};

export default ThreeDCard;


const dummyData = [
  {
    title: "InstaSales - CRM",
    description: "Empowers businesses with intuitive sales management tools, streamlining customer relationships and boosting productivity. Manage leads, track interactions, and optimize sales pipelines effortlessly.",
    image: "/images/fcd-dashboard.png",
    link: "https://fcd-forntend.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website built with Next.js and styled with Tailwind CSS, showcasing my projects and skills in a sleek, modern design. Integrated with Google Analytics 4 for insightful visitor tracking and performance analysis.",
    image: "/images/portfolio_image.png",
    link: "https://jeetendrakumarbarman.site"
  },
  {
    title: "FoodCheq - POS",
    description: "A POS system customized for restaurants, built using Express.js and Node.js for robust backend functionality. It utilizes MongoDB for efficient data management and Cloudinary for seamless media handling.",
    image: "/images/foodcheq_image.png",
    link: "https://food-cheq-pos.vercel.app/",
  },

  {
    title: "Nifa Fine Arts – Recreated website",
    description: "A responsive website clone built with React/Next.js, combining the power of  React Hooks and styled with Tailwind CSS for modern, efficient web development using JavaScript and vercel deployment.",
    image: "/images/nifa_image.png",
    link: "https://nifa-clone.vercel.app/"
  },
 
 
  {
    title: "UrbanPay Fintech - Freelanced",
    description: "Freelanced a credit card lead generation website for a client, built with Express.js and Node.js. Utilized custom CSS for a clean, user-friendly interface, ensuring smooth functionality and effective lead capture.",
    image: "/images/urban_image copy.png",
    link: "https://www.urbanpay.in/"
  },
  {
    title: "npx shercoder – in your terminal ↵",
    description: "A personalized command-line business card displaying your professional profile, skills, and contact information in the terminal. A unique, tech-savvy way to share your credentials and impress within the developer community.",
    image: "/images/npx-shercoder.png",
    link: "https://github.com/Jeetcodes95/npx-shercoder"
  },
  // Add more dummy data objects as needed
];
