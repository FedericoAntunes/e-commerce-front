import CardAbout from "./partials/CardAbout";
import Technologies from "./partials/Technologies";

function AboutUs() {
  return (
    <>
      <div className="flex justify-center gap-8">
        <CardAbout />
        <CardAbout />
      </div>
      <div>
        <Technologies />
      </div>
    </>
  );
}

export default AboutUs;
