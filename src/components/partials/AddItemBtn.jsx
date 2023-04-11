import styles from "./AddItemBtn.module.css";

function AddItemBtn() {
  return (
    <>
      <button className={`${styles.button} rounded overflow-hidden`}>
        <span className={styles.button__text}>Add Item</span>
        <span className={styles.button__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className={styles.svg}
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
    </>
  );
}

export default AddItemBtn;
