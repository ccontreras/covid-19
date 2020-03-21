import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

type StatTypes = {
  title: string;
  total?: number;
};

const useStyles = makeStyles(theme => ({
  title: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

const GlobalStatPaper = ({ title, total = 0 }: StatTypes) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
      {total}
    </Paper>
  );
};

export { GlobalStatPaper };
