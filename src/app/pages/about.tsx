"use client";

import React, { useState } from "react";

interface Skill {
  src: string;
  alt: string;
  gradient: string;
  text: string;
}

const skills: Skill[] = [
  { src: "/static/html.svg", alt: "HTML icon", gradient: "from-red-300 to-gray-100", text: "HTML" },
  { src: "/static/css.svg", alt: "CSS icon", gradient: "from-blue-300 to-gray-100", text: "CSS" },
  { src: "/static/js.svg", alt: "JavaScript icon", gradient: "from-yellow-300 to-gray-100", text: "JavaScript" },
  { src: "/static/react.svg", alt: "React icon", gradient: "from-cyan-400 to-gray-100", text: "React Js" },
  { src: "/static/next.svg", alt: "Next.js icon", gradient: "from-gray-300 to-gray-100", text: "Next Js" },
  { src: "/static/tailwind.svg", alt: "Tailwind CSS icon", gradient: "from-cyan-300 to-gray-100", text: "Tailwind CSS" },
  { src: "/static/redux.svg", alt: "Redux icon", gradient: "from-purple-300 to-gray-100", text: "Redux" },
  { src: "/static/mui.svg", alt: "MUI icon", gradient: "from-blue-300 to-gray-100", text: "Material UI" },
  { src: "/static/reactQ.svg", alt: "React Query icon", gradient: "from-orange-300 to-gray-100", text: "React Query" },
  { src: "/static/fm.svg", alt: "Framer Motion icon", gradient: "from-pink-300 to-gray-100", text: "Framer Motion" },
  { src: "/static/bootstrap.svg", alt: "bootstrap icon", gradient: "from-violet-300 to-gray-100", text: "Bootstrap" },
];

const backendskills: Skill[] = [
  { src: "/static/node.svg", alt: "Node icon", gradient: "from-green-300 to-gray-100", text: "Node Js" },
  { src: "/static/express.svg", alt: "Express icon", gradient: "from-gray-300 to-gray-100", text: "| Express Js" },
  { src: "/static/mongo.svg", alt: "MongoDb icon", gradient: "from-green-500 to-gray-100", text: "Mongo DB" },
  { src: "/static/jwt.svg", alt: "JWT icon", gradient: "from-gray-200 to-gray-100", text: "JWT" },
  { src: "/static/pass.svg", alt: "Passportjs icon", gradient: "from-yellow-200 to-gray-100", text: "Passport Js" },
  { src: "/static/imgkt.jpeg", alt: "ImageKit icon", gradient: "from-blue-300 to-gray-100", text: "Imagekit.io" },
];

const devskills: Skill[] = [
  { src: "/static/vscode.svg", alt: "VS icon", gradient: "from-blue-300 to-gray-100", text: "Visual Studio Code" },
  { src: "/static/git.svg", alt: "Git icon", gradient: "from-gray-100 to-gray-100", text: "Github" },
  { src: "/static/pman.svg", alt: "Postman icon", gradient: "from-red-300 to-gray-100", text: "Postman" },
];
const deploykills: Skill[] = [
  { src: "/static/ec2.svg", alt: "AWS icon", gradient: "from-orange-300 to-gray-100", text: "AWS EC2" },
  { src: "/static/cicd.svg", alt: "CICD icon", gradient: "from-gray-100 to-gray-100", text: "CICD Pipelines" },
  { src: "/static/vrsl.svg", alt: "Vercel icon", gradient: "from-gray-300 to-gray-100", text: "Vercel" },
  { src: "/static/netlify.png", alt: "Netlify icon", gradient: "from-gray-300 to-gray-100", text: "Netlify" },
  { src: "/static/render.png", alt: "Onrender icon", gradient: "from-gray-300 to-gray-100", text: "Onrender" },
];


const SkillDiv: React.FC<Skill> = ({ src, alt, gradient, text }) => (
  <div className="relative inline-flex md:h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-2 mr-2">
    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      <img className="w-7" src={src} alt={alt} />&nbsp;
      <span className={`whitespace-nowrap bg-gradient-to-r ${gradient} voil text-transparent bg-clip-text font-normal md:text-xl`}>{text}</span>
    </span>
  </div>
);



const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Frontend Technologies",
      content: (
        <>
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">
            Frontend Technologies →
          </span>
          <hr className="my-4" />
          {skills.map((skill) => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </>
      ),
    },
    {
      label: "Backend Technologies",
      content: (
        <>
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">
            Backend Technologies →
          </span>
          <hr className="my-4" />
          {backendskills.map((skill) => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </>
      ),
    },
    {
      label: "Development & Productivity",
      content: (
        <>
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">
            Development & Productivity →
          </span>
          <hr className="my-4" />
          {devskills.map((skill) => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </>
      ),
    },
    {
      label: "Deployment",
      content: (
        <>
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">
            Deployment →
          </span>
          <hr className="my-4" />
          {deploykills.map((skill) => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">About me</h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4">
        Hello, I&apos;m Jeetendra Kumar Barman. I am an passionate <b>MERN Stack Developer</b> with <b className="bg-gradient-to-r from-purple-600 to-gray-400 text-transparent bg-clip-text font-medium">2+ year</b> of experience.
        <br /><br />
        I specialize in crafting <b>Web Applications</b> and <b>Product Management</b>.
        <br /><br />
        <div className="relative mx-auto mt-10 p-8 max-w-4xl h-[600px] sm:h-[400px] bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 shadow-lg rounded-lg bg-[url('/images/coding.avif')] bg-cover bg-center ">
  {/* Glassmorphism Effect Inner Div */}
  <div className="flex items-center justify-between mb-6">
    {/* Left Arrow */}
    <button
      className="hidden sm:block px-2 py-1 text-gray-300 hover:text-white"
      onClick={() => setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1))}
    >
      &lt;
    </button>

    {/* Tab Buttons - Make them scrollable and nowrap */}
    <div className=" justify-center space-x-4 overflow-x-auto whitespace-nowrap scrollbar-none">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 text-lg font-normal  scrollbar-none  rounded-md transition-colors ${
            activeTab === index
              ? "bg-white backdrop-blur-md bg-opacity-20 text-white shadow-md"
              : "bg-transparent  text-gray-300 hover:text-white"
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      className="hidden sm:block px-2 py-1 text-gray-300 hover:text-white"
      onClick={() => setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1))}
    >
      &gt;
    </button>
  </div>

  <div className="relative z-10 bg-blue-100 bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6 overflow-auto">
    {/* Active Tab Content */}
    <div className="text-gray-200">
      {tabs[activeTab].content}
    </div>
  </div>
</div>


        {/* <div className="break-words whitespace-normal">
          <span className="whitespace-nowrap">Proficient in:</span>&nbsp;
          <br />
          <br />
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">Frontend Technologies →</span>&nbsp;
          <hr />
          <br />
          
          {skills.map(skill => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </div>
        <div className="break-words whitespace-normal">
          <br />
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">Backend Technologies →</span>&nbsp;
          <hr />
          <br />
          
          {backendskills.map(skill => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </div>
        <div className="break-words whitespace-normal">
          <br />
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">Development & Productivity →</span>&nbsp;
          <hr />
          <br />
          
          {devskills.map(skill => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </div>
        <div className="break-words whitespace-normal">
          <br />
          <span className="whitespace-nowrap text-white font-light mb-2 tracking-widest">Deployment →</span>&nbsp;
          <hr />
          <br />
          
          {deploykills.map(skill => (
            <SkillDiv key={skill.text} {...skill} />
          ))}
        </div> */}
        <br /><br />
        Currently, I am part of the dynamic team at <a  href="https://www.adymize.com/" className=" bg-gradient-to-r from-blue-600 to-gray-300 text-transparent bg-clip-text font-bold" >Adymize Private Limited</a>, a Bhopal based company known for its innovative solutions.
        <br /><br />
        With a passion for innovation and a track record of delivering impactful solutions, I am committed to pushing boundaries and driving success in every project I undertake.
      </h3>
    </div>
  );
};

export default About;
