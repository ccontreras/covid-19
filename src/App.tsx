import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { OverallStats } from "./components/OverallStats";
import "normalize.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: grey[100],
    width: "100vw",
    height: "100vh"
  }
});

function App() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Container>
        <OverallStats />
      </Container>
    </main>
  );
}

export default App;
