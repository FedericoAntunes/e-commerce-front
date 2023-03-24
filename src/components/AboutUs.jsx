import CardAbout from "./partials/CardAbout";
import Technologies from "./partials/Technologies";

function AboutUs() {
  return (
    <>
      <div className="sm:mt-4 md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center align-middle  ">
        <CardAbout
          name={"Federico Antunes"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Pablo Dos Santos"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Juan Martín Madoz"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Sebastián Yaben"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Martin Bentura"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
      </div>
      <div>
        <Technologies />
      </div>
    </>
  );
}

export default AboutUs;
