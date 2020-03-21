import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { Typography, Grid } from "@material-ui/core";

import { useGlobalStats } from "../../hooks";
import { GlobalStatPaper } from "./GlobalStatPaper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(4)
  },
  title: {
    marginBottom: theme.spacing(4)
  }
}));

const GlobalStats = () => {
  const classes = useStyles();
  const { isLoading, globalStats } = useGlobalStats();

  return (
    <section className={classes.root}>
      <Typography className={classes.title} variant="h3" component="h2">
        Estadisticas
      </Typography>
      <Grid container spacing={3}>
        {isLoading &&
          new Array(4).fill(null).map(() => (
            <Grid item xs={3}>
              <Skeleton variant="rect" width={266} height={71} />
            </Grid>
          ))}
        {!isLoading && (
          <>
            <Grid item xs={3}>
              <GlobalStatPaper
                title="Contagios"
                total={globalStats?.results[0].currentConfirmedCount}
              />
            </Grid>
            <Grid item xs={3}>
              <GlobalStatPaper
                title="Muertes"
                total={globalStats?.results[0].deadCount}
              />
            </Grid>
            <Grid item xs={3}>
              <GlobalStatPaper
                title="Criticos"
                total={globalStats?.results[0].seriousCount}
              />
            </Grid>
            <Grid item xs={3}>
              <GlobalStatPaper
                title="Curados"
                total={globalStats?.results[0].curedCount}
              />
            </Grid>
          </>
        )}
      </Grid>
    </section>
  );
};

export { GlobalStats };
