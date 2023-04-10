import styles from "./SpinnerLoader.module.css";

function SpinnerLoader() {
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SpinnerLoader;
