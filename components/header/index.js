import React, { useRef, useState } from "react";

import Menu from "../menu";

import styles from "./header.module.scss";

const Header = () => {
  const elementMenu = useRef(null);
  const [show, setShow] = useState(false);

  /**
   * handleClick
   * @param {*} none
   * Desc: open or close the hamburger menu
   */

  const handleClick = () => {
    if (!show) {
      elementMenu.current.setAttribute("style", "display:block;");
      setShow(true);
    } else {
      elementMenu.current.setAttribute("style", "display:none;");
      setShow(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/img/logo.png" alt="Logo" />
        <div className={styles.mobileMenu} onClick={handleClick}>
          <span className={styles.iconMenu}>
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </div>

      <Menu elementMenu={elementMenu} />
    </header>
  );
};

export default Header;
