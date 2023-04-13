import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={`${styles.footer} flex justify-between items-center`}>
        <div className={styles.waves}>
          <div className={styles.wave} id={styles.wave1}></div>
          <div className={styles.wave} id={styles.wave2}></div>
          <div className={styles.wave} id={styles.wave3}></div>
          <div className={styles.wave} id={styles.wave4}></div>
        </div>
        <ul className={styles.social_icon}>
          <li className={styles.social_icon__item}>
            <Link className={styles.social_icon__link} to="/">
              <FontAwesomeIcon icon={faFacebook} className="" />
            </Link>
          </li>
          <li className={styles.social_icon__item}>
            <Link className={styles.social_icon__link} to="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li className={styles.social_icon__item}>
            <Link className={styles.social_icon__link} to="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li className={styles.social_icon__item}>
            <Link className={styles.social_icon__link} to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              className={styles.menu__link}
              to="https://e-commerce-admin-mu.vercel.app/login"
            >
              Admin Panel
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="/about-us">
              Team
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="#">
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-xs text-gray-600 font-bold tracking-wide">
          &copy; 2023 No Hunger | All Rights Reserved
        </p>
        <img
          src="https://www.animatedimages.org/data/media/157/animated-fishing-image-0057.gif"
          alt=""
          className="absolute hidden top-0 -m-44 z-[1001]"
        />
      </footer>
    </>
  );
}

export default Footer;
