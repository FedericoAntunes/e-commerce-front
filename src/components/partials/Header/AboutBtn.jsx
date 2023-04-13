import { useEffect } from "react";
import { useState } from "react";
import styles from "./AboutBtn.module.css";

function AboutBtn() {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimer(!timer), 5000);
  }, [timer]);

  return (
    <div
      className={`fixed text-white bottom-4 flex ${
        timer && styles.wobble_hor_bottom
      } z-50 right-6`}
    >
      <button
        className={`bg-green-500 text-base py-2 px-4 md:font-semibold lg:hover:bg-green-600 transition ease-in-out-300 rounded-full ${styles.button}`}
      >
        <p className={styles.buttonP}>About this project</p>
        <svg
          strokeWidth="4"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className={`h-6 w-6 ${styles.buttonSvg}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default AboutBtn;
