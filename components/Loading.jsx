import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles["body-container"]}>
      <div className={styles.spinner}>
        <img src="/loading.png" alt="Loading Spinner" />
      </div>
    </div>
  );
};

export default Loading;
