import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";



const Details = ({ postion, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li  ref={ref} className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
     <LiIcon reference={ref}/>  
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}

      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl  xs:text-lg">
          {postion}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary  dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs: text-sm">
          {time} | {address}
        </span>
        <p className=" font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%]  mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top   dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-[75%] flex flex-col items-start justify-between ml-4  xs:ml-2xs:ml-2">

        <Details
            postion="frontend Developer,Remote "
            company="Oasis Infobyte,New Delhi"
            companyLink="https://https://oasisinfobyte.com//"
            time="Apr 2023-Jun 2023"
            address="Satya Niketan, South West New Delhi"
            work="Use HTML, CSS, and JavaScript to translate design concepts into code. collaborate closely with designers and backend developers to ensure the seamless integration of frontend and backend components."
          />



          <Details
            postion="IOT intern,Remote"
            company="Emertxe Information Technologies, Bangalore "
            companyLink="https://https://www.emertxe.com//"
            time="Nov 2022 - Jan 2023"
            address="No. 83, 1st Floor, Farah Towers,M.G Road,Bangalore
        "
            work="Collaborate with cross-functional teams, such as software developers, hardware engineers, and data scientists, to ensure the seamless integration and functionality of IOT system."
          />

          

          <Details
            postion="Social Media Marketing Intern,Remote"
            company="COLLEGETIPS.IN"
            companyLink="https://collegetips.in//"
            time="Jun 2022-Aug 2022"
            address="echnopark, MIDC Gate no 2, Seepz, Andheri East, Mumbai,"
            work="Promoting a business or brand through social media platforms Creating engaging content and building a community of follower"
          />

          {/* <Details
            postion="Software Engineer"
            company="Google"
            companyLink="https://www.google.com/"
            time="2022-Present "
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          /> */}
        </ul>
      </div>













      
    </div>
  );
};

export default Experience;
