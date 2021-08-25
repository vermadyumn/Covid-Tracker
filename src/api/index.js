import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const res = await axios.get(changeableUrl);
    console.log("response- ", res?.data);

    const { confirmed, recovered, deaths, lastUpdate } = res?.data;

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const res = await axios.get(`${url}/daily`);
    const data = res?.data;
    //console.log("DATA", data);
    const dataArray = data.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: reportDate,
    }));
    console.log("DATA", dataArray);

    return dataArray;
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US
// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://api.covidtracking.com/v1/us/daily.json"
//     );

//     return data.map(({ positive, recovered, death, dateChecked: date }) => ({
//       confirmed: positive,
//       recovered,
//       deaths: death,
//       date,
//     }));
//   } catch (error) {
//     return error;
//   }
// };

export const fetchCountries = async () => {
  try {
    const res = await axios.get(`${url}/countries`);

    console.log("countries", res?.data?.countries);
    const countries = res?.data?.countries;
    const countryList = countries.map((value) => value.name);
    console.log(countryList);
    return countryList;
  } catch (error) {
    return error;
  }
};
