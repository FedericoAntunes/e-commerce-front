import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

// Components
import CardAbout from "./partials/CardAbout";
import AboutThisProject from "./partials/AboutThisProject";
import AboutUsFeatures from "./partials/AboutUsFeatures";
import AboutUsChallenges from "./partials/AboutUsChallenges";
import AboutUsTechnologies from "./partials/AboutUsTechnologies";

function AboutUs() {
  return (
    <AnimatePresence>
      <div className="flex flex-wrap justify-center sm:mt-[84px]">
        <div className="w-full text-center bg-yellow-200 bg-gradient-to-r from-yellow-300 to-yellow-200 py-8 shadow-lg border-b-4 border-yellow-400 ">
          <h1 className="text-4xl font-bold flex items-center justify-center">
            <FontAwesomeIcon icon={faBurger} className="mr-3" />
            Our Team
          </h1>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Discover the team that brought this project to life.
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-8">
          <motion.div
            animate={{
              x: [-50, 50, 0],
              y: [0, 20, 0],
              rotateZ: [0, 5, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.1,
              ease: "anticipate",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            <CardAbout
              name={"Federico Antunes"}
              image={"https://i.ibb.co/J3Hx0k7/fede-cleanup.png"}
              description={`Lorem ipsum dolor`}
              github={"https://github.com/FedericoAntunes"}
              linkedin={"https://www.linkedin.com/in/federico-antunes/"}
            />
          </motion.div>
          <motion.div
            animate={{
              x: [-50, 50, 0],
              y: [0, 20, 0],
              rotateZ: [0, 5, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: "anticipate",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            <CardAbout
              name={"Pablo Dos Santos"}
              image={"https://i.ibb.co/cNmsVRD/dsfpablo.png"}
              description={`Lorem ipsum dolor`}
              github={"https://github.com/dsfpablo"}
              linkedin={
                "https://www.linkedin.com/in/pablo-dos-santos-76683155/"
              }
            />{" "}
          </motion.div>
          <motion.div
            animate={{
              x: [-50, 50, 0],
              y: [0, 20, 0],
              rotateZ: [0, 5, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: "anticipate",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            <CardAbout
              name={"Juan Martín Madoz"}
              image={"https://i.ibb.co/0KjhBFj/jmadoz.png"}
              description={`Computer Science Student and Full Stack Developer`}
              github={"https://github.com/Madozito"}
              linkedin={"https://www.linkedin.com/in/juanmartinmadoz/"}
            />
          </motion.div>
          <motion.div
            animate={{
              x: [-50, 50, 0],
              y: [0, 20, 0],
              rotateZ: [0, 5, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "anticipate",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            <CardAbout
              name={"Sebastián Yaben"}
              description={`Full Stack Developer, "Learning to do modals even in React"`}
              image={"https://i.ibb.co/r2sH692/img-ecomerce.png"}
              github={"https://github.com/sebasan22"}
              linkedin={
                "https://www.linkedin.com/in/sebasti%C3%A1n-yaben-tajes-1347bb175/"
              }
            />
          </motion.div>
          <motion.div
            animate={{
              x: [-50, 50, 0],
              y: [0, 20, 0],
              rotateZ: [0, 5, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "anticipate",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            <CardAbout
              name={"Martin Bentura"}
              image={"https://i.ibb.co/qxgXxZx/mbentura-removebg-preview.png"}
              description={`Lorem ipsum dolor`}
              github={"https://github.com/MartinBentura"}
              linkedin={"https://www.linkedin.com/in/martin-bentura-88365326b/"}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{
          x: [500, 0],
          opacity: 1,
          scale: 1,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: "anticipate",
        }}
        className="my-6"
      >
        <AboutThisProject />
      </motion.div>
      <div className="flex flex-col mb-20 sm:flex-row justify-center sm:gap-6">
        <AboutUsFeatures />
        <AboutUsTechnologies />
        <AboutUsChallenges />
      </div>
    </AnimatePresence>
  );
}

export default AboutUs;
