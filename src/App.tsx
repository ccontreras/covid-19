import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { GlobalStats } from "./components/GlobalStats";
import "normalize.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[50],
    width: "100vw",
    height: "100vh"
  }
});

function App() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Container>
        <GlobalStats />
      </Container>
    </main>
  );
}

export default App;
