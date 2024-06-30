import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import SlideInRightText from "./slideText";
import Typewriter from 'typewriter-effect';

export default function HomeScreen() {
  return (
    <div className="h-screen">
   {/* home screen */}
   <Footer />

      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-6xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20 mt-30">
          <div className="mr-4 title-box">
            <p className="text">👋 Hi! I&apos;m </p>
          </div>
        <div className="flex header-container">
          <div className="subtitle-box">
          <p className="text">
              <Typewriter
                options={{
                  strings: ['Jeetendra Kumar Barman', 'Shercoder 🦁'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
     {/* <SlideInRightText /> */}
          </div>
        </div>
        </h1>
        <br />
            <h3 className="text text-center">
          MERN Stack Developer |  Tech Enthusiast
          </h3>

        <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-center relative z-20 text-gray-400 mt-10 max-w-7xl mb-2 lg:mb-4 px-4">
          Dedicated Web Developer with expertise in designing and developing responsive web solutions. <br />
           I thrive on challenges, continually expanding my skill set, and am committed to producing clean, professional code.
            I am passionate about learning and actively seek opportunities to enhance my development abilities.
        </h3>

        <div className="w-full h-40 relative">
          {/* Gradients */}
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={1}
            particleDensity={2000}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
  
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(450px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        <a href="/Resume_JeetendraKumarBarman.pdf" target="_blank" >
        <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <img className="w-7" src="/static/download.svg" alt="JavaScript icon" />&nbsp;
                <text className="whitespace-nowrap bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text font-medium md:text-xl">Resume</text> {' '}
                </span>
              </div>
        </a>

      </div>
    </div>
  );
}
