import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsArrowRight } from "react-icons/bs";
import { Animation } from "./Animation";
import EncryptButton from "./Button";
import Tile from "./Tile";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full grid grid-cols-11 lg:grid-cols-20 h-screen overflow-y-clip z-0">
        {Array.from({ length: 20 * 12 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col md:flex-row gap-10 items-center justify-center z-10 pointer-events-none p-4 md:p-8 pt-40 lg:pt-0">
        <div className="flex flex-col gap-5 items-center md:items-start justify-center pointer-events-auto text-center md:text-left lg:pl-11">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold uppercase font-display tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] p-2 rounded"
          >
            Hi, I'm John Miller.
          </motion.h1>
          <TypeAnimation
            sequence={[
              "I'm am a software engineer.",
              1000,
              "I'm am a UX designer.",
              1000,
              "I'm am a developer.",
              1000,
              "I'm am a content creator.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <div className="flex justify-center md:justify-start items-center gap-5">
            <EncryptButton
              text="Contact"
              url="#contact"
              icon={<BsArrowRight />}
            />
            <EncryptButton
              text="Projects"
              url="#projects"
              icon={<BsArrowRight />}
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
