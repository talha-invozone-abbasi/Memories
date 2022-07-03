import React from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import image from "./images/1.png";
import UseStyles from "./style";
import { fetchAll } from "./redux/actions/posts";

import Posts from "./components/Posts/Posts";
import Forms from "./components/Forms/Forms";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = React.useState(null);
  React.useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch, currentId]);
  const classes = UseStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={image} alt="h2" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="start"
              spacing={4}
            >
              <Grid item xs={12} sm={7}>
                <Posts currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Forms currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
