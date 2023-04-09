import { useEffect } from "react";
import { useState } from "react";
import "./AboutBtn.css";

function AboutBtn() {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimer(!timer), 5000);
  }, [timer]);

  return (
    <div
      className={`fixed bottom-4 flex ${
        timer && "wobble-hor-bottom"
      } z-50 right-6`}
    >
      <button className="bg-green-500 p-2 font-semibold hover:bg-green-600 transition ease-in-out-300 rounded-full">
        <p>About this project</p>
        <svg
          stroke-width="4"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default AboutBtn;
