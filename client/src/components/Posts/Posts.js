import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import Post from "./post/post";
import UseStyles from "./style";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts.posts);

  // React.useEffect(() => {
  //   dispatch(fetchAll());
  // }, [dispatch]);

  const classes = UseStyles();
  return (
    <div>
      {posts === null ? (
        <div>no data</div>
      ) : !posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts?.length > 0 &&
            posts?.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default Posts;
