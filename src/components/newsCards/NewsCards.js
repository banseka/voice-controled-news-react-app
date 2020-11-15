import React from "react";
import NewsCard from "../newsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./Styles";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest news",
    text: "give me the lastest news",
  },
  {
    color: "#1565c0",
    title: "News by categories",
    info: "business, Entertainment, General, Health, Sports, Technology ",
    text: "give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by terms",
    info: "Bitcoin, PlayStation5, SmartPhones, Donald Triump",
    text: "whats is with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by source",
    info: "CNN, Wired, BBC , Time, IGN,ABC news, BuzzFeed",
    text: "Give me news from CNN",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {infoCards.map((item) => (
            <Grid
              item
              xm={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCards}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: item.color }}
              >
                <Typography variant='h5'>{item.title}</Typography>
                {item.info ? (
                  <Typography variant='h6'>
                    <strong>{item.title.split(" ")[2]}</strong>
                    <br />
                    {item.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  Try saying: <br /> <i>{item.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard
              key={item.id}
              article={item}
              activeArticle={activeArticle}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
