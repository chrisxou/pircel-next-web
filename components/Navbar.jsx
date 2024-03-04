// components/Navbar.jsx
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>
        Pircel Houses
      </Link>
      <img src="/house.png" alt="House" className={styles.houseIcon} />
    </div>
  );
};

export default Navbar;
