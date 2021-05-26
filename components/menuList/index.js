import { useContext } from "react";

import HomeContext from "../../context/home/HomeContext";

/**
 * @param [] places
 * @Desc {*} Menu Airlines list
 * @return set the specific airline in airline state
 */

const MenuList = ({ places }) => {
  const homeContext = useContext(HomeContext);
  const { setNamePlace } = homeContext;

  const handleChangePlace = namePlace => {
    setNamePlace(namePlace);
  };

  return (
    <ul>
      {places.map(itemPlace => (
        <li key={itemPlace.id}>
          <a href="#" onClick={() => handleChangePlace(itemPlace.name)}>
            {itemPlace.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
