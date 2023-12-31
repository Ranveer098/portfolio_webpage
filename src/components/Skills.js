import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3  px-6  shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64  w-full text-center">Skills</h2>
      <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8
         shadow-dark cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactsJS" x="0vw" y="12vw" />
        <Skill name="Next js" x="-20vw" y="-15vw" />
        <Skill name="Taiawind CSS" x="-15vw" y="-10vw" />
        <Skill name="Github" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Web Design" x="-25vw" y="18vw" />
        <Skill name="FireBase" x="18vw" y="18vw" />

      </div>
    </>
  );
};

export default Skills;
