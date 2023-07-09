import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles";
import { getMovies } from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const classes = useStyles();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <>
      <h2 className={classes.title}>Movie Search</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()} />
      <TextField
        type="text"
        value={name}
        sx={{ m: 1, width: "55ch" }}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <p className={classes.error}>{error}</p>}
    </>
  );
};

export default Search;
