import "./AboutBtn.css";

function AboutBtn() {
  return (
    <button type="button" className="btn z-40 fixed bottom-2 right-6">
      <p className="text-sm z-50">About this project</p>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

export default AboutBtn;
