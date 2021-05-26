import { useContext, useEffect } from "react";

import HomeContext from "../context/home/HomeContext";

import MainContainer from "../components/main";

/**
 *
 * @param {*} props gets data from api, server to client SSR
 * @returns Main data airlines
 */

export default function Home(props) {
  const {
    data: { places }
  } = props;

  const homeContext = useContext(HomeContext);
  const { setPlacesData } = homeContext;

  useEffect(() => {
    setPlacesData(places);
  }, []);

  return <MainContainer />;
}

/**
 *
 * get Data from api SSR
 * @returns general data airlines
 */

export async function getStaticProps(context) {
  /**
   *
   * get data from external api
   * @returns general data
   */

  //const res = await fetch("https://challenge-react.vercel.app/api/data");
  //const data = await res.json();

  const dataIsComplete = {
    places: [
      {
        name: "Vivair",
        id: 1
      },
      {
        name: "Avianca",
        id: 2
      },
      {
        name: "Aeromexico",
        id: 5
      },
      {
        name: "Volaris",
        id: 6
      }
    ]
  };

  const data = dataIsComplete;

  if (!data) {
    return {
      redirect: {
        destination: "/no-data"
      }
    };
  }

  if (data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      data
    },
    revalidate: 60
  };
}
