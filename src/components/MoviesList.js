import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map((item, index) => (
              <Grid key={index} item>
                <Card sx={{ maxWidth: "350" }}>
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.Poster}
                    alt={item.Title}
                  />
                  <Link to={`/movie/${item.imdbID}`}>
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        ({item.Year})
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesList;
