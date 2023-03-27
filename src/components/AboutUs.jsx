import CardAbout from "./partials/CardAbout";
import Technologies from "./partials/Technologies";

function AboutUs() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <CardAbout
          name={"Federico Antunes"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          description={`Lorem ipsum dolor`}
          github={"https://github.com/FedericoAntunes"}
          linkedin={"https://www.linkedin.com/in/federico-antunes/"}
        />
        <CardAbout
          name={"Pablo Dos Santos"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          description={`Lorem ipsum dolor`}
          github={"https://github.com/dsfpablo"}
          linkedin={"https://www.linkedin.com/in/pablo-dos-santos-76683155/"}
        />
        <CardAbout
          name={"Juan Martín Madoz"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          description={`Lorem ipsum dolor`}
          github={"https://github.com/Madozito"}
          linkedin={"https://www.linkedin.com/in/juanmartinmadoz/"}
        />
        <CardAbout
          name={"Sebastián Yaben"}
          description={`Lorem ipsum dolor`}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          github={"https://github.com/sebasan22"}
          linkedin={"https://www.linkedin.com/in/sebasti%C3%A1n-yaben-tajes-1347bb175/"}
        />
        <CardAbout
          name={"Martin Bentura"}
          image={"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"}
          description={`Lorem ipsum dolor`}
          github={"https://github.com/MartinBentura"}
          linkedin={"https://www.linkedin.com/in/martin-bentura-88365326b/"}
        />
      </div>
      <div>
        <Technologies />
      </div>
    </>
  );
}

export default AboutUs;
