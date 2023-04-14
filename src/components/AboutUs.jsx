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
            initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
            whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "anticipate",
            }}
            className="mt-10 mb-20 sm:my-3"
          >
            <CardAbout
              name={"Federico Antunes"}
              image={"https://i.ibb.co/J3Hx0k7/fede-cleanup.png"}
              description={`"Es muy temprano, ¿sale una siestita?"`}
              github={"https://github.com/FedericoAntunes"}
              linkedin={"https://www.linkedin.com/in/federico-antunes/"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
            whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "anticipate",
            }}
            className="mt-10 mb-20 sm:my-3"
          >
            <CardAbout
              name={"Pablo Dos Santos"}
              image={"https://i.ibb.co/cNmsVRD/dsfpablo.png"}
              description={`Ascendido a "Capataz"`}
              github={"https://github.com/dsfpablo"}
              linkedin={
                "https://www.linkedin.com/in/pablo-dos-santos-76683155/"
              }
            />{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
            whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "anticipate",
            }}
            className="mt-10 mb-20 sm:my-3"
          >
            <CardAbout
              name={"Juan Martín Madoz"}
              image={"https://i.ibb.co/0KjhBFj/jmadoz.png"}
              description={`"¿Porque mi variable esta undefined? JavaScript"`}
              github={"https://github.com/Madozito"}
              linkedin={"https://www.linkedin.com/in/juanmartinmadoz/"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
            whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "anticipate",
            }}
            className="mt-10 mb-20 sm:my-3"
          >
            <CardAbout
              name={"Sebastián Yaben"}
              description={`"Learning to do modals even in React"`}
              image={"https://i.ibb.co/r2sH692/img-ecomerce.png"}
              github={"https://github.com/sebasan22"}
              linkedin={
                "https://www.linkedin.com/in/sebasti%C3%A1n-yaben-tajes-1347bb175/"
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
            whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "anticipate",
            }}
            className="mt-10 mb-20 sm:my-3"
          >
            <CardAbout
              name={"Martin Bentura"}
              image={"https://i.ibb.co/qxgXxZx/mbentura-removebg-preview.png"}
              description={`""`}
              github={"https://github.com/MartinBentura"}
              linkedin={"https://www.linkedin.com/in/martin-bentura-88365326b/"}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
        whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        className="my-6 px-3 md:px-10"
      >
        <AboutThisProject />
      </motion.div>
      <div className="flex flex-wrap mb-20 justify-center sm:gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
          whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          className="my-6"
        >
          <AboutUsFeatures />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
          whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          className="my-6"
        >
          <AboutUsTechnologies />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, marginLeft: "5px" }}
          whileInView={{ opacity: 1, translateX: "-5px", scale: 1 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          className="my-6"
        >
          <AboutUsChallenges />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default AboutUs;
