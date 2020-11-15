import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import usestyles from "./styles";
import classNames from "classnames";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  key,
  activeArticle,
}) => {
  const classes = usestyles();

  const [elRefs, setElRefs] = useState([]);

  const scrollToRef = (ref) => {
    window.scroll(0, ref.current.offsetTop - 50);
  };

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {}, [key, activeArticle, elRefs]);
  if (key === activeArticle && elRefs[activeArticle]) {
    scrollToRef(elRefs[activeArticle]);
  }
  return (
    <Card
      className={classNames(
        classes.card,
        activeArticle === key ? classes.activrCard : null
      )}
    >
      <CardActionArea href={url} target='_blank'>
        <CardMedia
          className={classes.media}
          immage={
            urlToImage ||
            "https://www.google.com/search?q=news+images&rlz=1C1CHBD_frCM877CM877&sxsrf=ALeKk03WQxZ0zLwlcuN_4EmHnCwH6mbXfw:1603051734695&tbm=isch&source=iu&ictx=1&fir=6v1jo9aeSI8WTM%252ClnOQy7aptQ0EHM%252C_&vet=1&usg=AI4_-kQyCxyjTuEdvXTILrvPEHqvUUylow&sa=X&ved=2ahUKEwjRss-J-b7sAhVeVRUIHSzsAtwQ9QF6BAgCEAY#imgrc=6v1jo9aeSI8WTM"
          }
        />
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant='h5'>
          {title}
        </Typography>
        <CardContent className={classes.cardActions}>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Learn More
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {key + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
