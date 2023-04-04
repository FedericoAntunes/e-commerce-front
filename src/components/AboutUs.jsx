import CardAbout from "./partials/CardAbout";
import Technologies from "./partials/Technologies";
import { Grid } from "@mui/material";
import AboutDescription from "./AboutDescription";
import ScrollToTop from "./ScrollToTop"

function AboutUs() {
  return (
    <>
    <ScrollToTop/>
      <div className="flex flex-wrap justify-center mt-[84px]">
        <div className="w-full text-center bg-yellow-200 bg-gradient-to-r from-yellow-300 to-yellow-200 py-8 shadow-lg border-b-4 border-yellow-400 ">
          <h1 className="text-4xl font-bold flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
              />
            </svg>
            Our Team
          </h1>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Discover the team that brought this project to life.
            </h2>
          </div>
        </div>

        <CardAbout
          name={"Federico Antunes"}
          image={
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          }
          description={`Lorem ipsum dolor`}
          github={"https://github.com/FedericoAntunes"}
          linkedin={"https://www.linkedin.com/in/federico-antunes/"}
        />
        <CardAbout
          name={"Pablo Dos Santos"}
          image={
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          }
          description={`Lorem ipsum dolor`}
          github={"https://github.com/dsfpablo"}
          linkedin={"https://www.linkedin.com/in/pablo-dos-santos-76683155/"}
        />
        <CardAbout
          name={"Juan Martín Madoz"}
          image={
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          }
          description={`Lorem ipsum dolor`}
          github={"https://github.com/Madozito"}
          linkedin={"https://www.linkedin.com/in/juanmartinmadoz/"}
        />
        <CardAbout
          name={"Sebastián Yaben"}
          description={`Lorem ipsum dolor`}
          image={
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          }
          github={"https://github.com/sebasan22"}
          linkedin={
            "https://www.linkedin.com/in/sebasti%C3%A1n-yaben-tajes-1347bb175/"
          }
        />
        <CardAbout
          name={"Martin Bentura"}
          image={
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
          }
          description={`Lorem ipsum dolor`}
          github={"https://github.com/MartinBentura"}
          linkedin={"https://www.linkedin.com/in/martin-bentura-88365326b/"}
        />
      </div>
      <div className="">
        <AboutDescription />
      </div>
    </>
  );
}

export default AboutUs;
