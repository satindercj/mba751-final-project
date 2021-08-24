import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";

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
});

function Movie(props: any) {
  const { onClose, selectedMovie, open } = props;
  const classes = useStyles();

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
                "https://image.tmdb.org/t/p/w500/" + selectedMovie.backdrop_path
              }
              title="Contemplative Reptile"
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
                <b>Release Date</b>:{" "}
                {moment(selectedMovie.release_date).format("MMMM Do, YYYY")}
              </Typography>
              <Typography
                className={classes.typography2}
                variant="subtitle1"
                color="textPrimary"
              >
                <b>Average Vote</b>: {selectedMovie.vote_average}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Dialog>
    </div>
  );
}

export default Movie;
