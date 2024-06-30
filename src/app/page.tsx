// import Navbar from "@/components/navbar";
"use client";
import dynamic from 'next/dynamic'
import HomeScreen from "@/app/pages/homescreen";
import { Article } from "@/app/pages/articles";
import ThreeDCard  from "@/app/pages/projects";
import About from "./pages/about";
import ContactForm from "./pages/contact";

import ReactGA from "react-ga4";
import { useEffect } from "react";


const Home = () => {


  useEffect(() => {
		// if (T_ID !== '') {
			ReactGA.initialize("G-3BFTR877V0");
		// }
	}, []);

  return (
    <>
      <HomeScreen />
      <About />
      <ThreeDCard />
      {/* <Article /> */}
      <ContactForm />
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });