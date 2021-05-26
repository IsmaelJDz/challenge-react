// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 *
 * @param {*} paramRes: response express
 * @returns general data
 */

export default (req, res) => {
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

  res.status(200).json(dataIsComplete);
};
