import styles from "./Houses.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className={styles["body-container"]}>
        <h2>404 - Lost in the Wizarding World</h2>
        <p style={{ paddingTop: "20px" }}>
          It seems you've taken a wrong turn on your way to Hogwarts.{" "}
        </p>
        <Link style={{ paddingTop: "20px" }} href="/">
          Cast Lumos to Light the Way Home
        </Link>
      </div>
    </>
  );
}
