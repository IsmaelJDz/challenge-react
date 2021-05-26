import { useContext } from "react";

import HomeContext from "../../context/home/HomeContext";
import styles from "./menu.module.scss";

import MenuList from "../menuList";

/**
 *
 * @param {*} param0 elementMenu reference to domElement
 * @returns navigation Mobile and desktop
 */

const Menu = ({ elementMenu }) => {
  const homeContext = useContext(HomeContext);
  const { places } = homeContext;

  return (
    <>
      <div
        ref={elementMenu}
        className={styles.navigation + " " + styles.mobile}
      >
        <nav className={styles.menu} aria-label="main-navigation">
          <MenuList places={places} />
        </nav>
      </div>
      <div className={styles.navigation + " " + styles.desktop}>
        <nav className={styles.menu}>
          <MenuList places={places} />
        </nav>
      </div>
    </>
  );
};

export default Menu;
