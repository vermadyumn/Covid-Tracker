import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  if (!confirmed) {
    return "Loading...";
  }

  const tempData = [
    {
      className: styles.infected,
      cardTitle: "Infected",
      value: confirmed.value,
      lastUpdate: lastUpdate,
      cardSubtitle: "Number of active cases from COVID-19.",
    },

    {
      className: styles.recovered,
      cardTitle: "Recovered",
      value: recovered.value,
      lastUpdate: lastUpdate,
      cardSubtitle: "Number of recoveries from COVID-19.",
    },
    {
      className: styles.deaths,
      cardTitle: "Deaths",
      value: deaths.value,
      lastUpdate: lastUpdate,
      cardSubtitle: "Number of deaths from COVID-19.",
    },
  ];

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h3">
        COVID 19 DATA :
      </Typography>
      <Grid container spacing={2} justify="center">
        {/* <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        /> */}
        {tempData.map((values) => {
          const {
            cardTitle,
            cardSubtitle,
            value,
            className,
            lastUpdate,
          } = values;

          return (
            <CardComponent
              className={className}
              cardTitle={cardTitle}
              value={value}
              lastUpdate={lastUpdate}
              cardSubtitle={cardSubtitle}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Info;
