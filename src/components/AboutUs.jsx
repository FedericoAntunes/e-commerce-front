import CardAbout from "./partials/CardAbout";
import Technologies from "./partials/Technologies";

function AboutUs() {
  return (
    <>
      <div className="sm:mt-4 md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center align-middle  ">
        <CardAbout
          name={"Federico Antunes"}
          image={"https://i.ibb.co/P9LSfVX/franky.jpg"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Pablo Dos Santos"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Juan Martín Madoz"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          description={"Lorem ipsum dolor"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Sebastián Yaben"}
          description={"Lorem ipsum dolor"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          github={"http://github.com"}
          linkedin={"https://www.linkedin.com/"}
        />
        <CardAbout
          name={"Martin Bentura"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
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
