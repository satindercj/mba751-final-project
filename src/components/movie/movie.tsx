import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { addMovie, removeMovie } from "../../features/watchListSlice";
import defaultBackgroundPoster from "../../images/defaultBackground.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
  typography: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  typography2: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  actionArea: {
    display: "flex",
    justifyContent: "flex-end",
  },
  addButton: {
    color: "#05a3d2",
    borderColor: "#05a3d2",
  },
});

function Movie(props: any) {
  const { onClose, selectedMovie, open, originWatchList } = props;
  const [addedMovie, setAddedMovie] = React.useState({ id: 0, added: false });
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                selectedMovie.backdrop_path === null
                  ? defaultBackgroundPoster
                  : "https://image.tmdb.org/t/p/w500/" +
                    selectedMovie.backdrop_path
              }
              title={selectedMovie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {selectedMovie.title}
              </Typography>
              <Typography
                className={classes.typography}
                variant="body1"
                color="textSecondary"
              >
                {selectedMovie.overview}
              </Typography>

              <Typography
                className={classes.typography2}
                variant="subtitle1"
                color="textPrimary"
              >
                <b>Release Date: </b>
                {moment(selectedMovie.release_date).format("MMMM Do, YYYY")}
              </Typography>
              <Typography
                className={classes.typography2}
                variant="subtitle1"
                color="textPrimary"
              >
                <b>Average Vote: </b> {selectedMovie.vote_average}
              </Typography>
            </CardContent>

            {!originWatchList && (
              <CardActions className={classes.actionArea}>
                {addedMovie.id !== selectedMovie.id && (
                  <Button
                    size="medium"
                    variant="outlined"
                    className={classes.addButton}
                    onClick={() => {
                      dispatch(addMovie(selectedMovie));
                      setAddedMovie({ id: selectedMovie.id, added: true });
                    }}
                  >
                    Add movie to Watch List
                  </Button>
                )}
                {addedMovie.id === selectedMovie.id && (
                  <Button size="medium" variant="contained" disabled>
                    Added Movie
                  </Button>
                )}
              </CardActions>
            )}

            {originWatchList && (
              <CardActions className={classes.actionArea}>
                <Button
                  size="medium"
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    dispatch(removeMovie(selectedMovie));
                    handleClose();
                  }}
                >
                  Remove Movie from Watch List
                </Button>
              </CardActions>
            )}
          </CardActionArea>
        </Card>
      </Dialog>
    </div>
  );
}

export default Movie;
