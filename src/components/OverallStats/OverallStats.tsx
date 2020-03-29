import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import { useGlobalStats } from "../../hooks";

const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
    paddingTop: spacing(4)
  },
  title: {
    marginBottom: spacing(4)
  },
  item: {
    textAlign: "center",
    textTransform: "uppercase",
    color: palette.grey[400],
    "&:not(:last-of-type)": {
      borderRight: `2px dotted ${palette.grey[200]}`
    }
  },
  itemTotal: {
      display: "block"
  }
})
const useStyles = makeStyles(styles);

type OverallStatItemPropTypes = { title: string; total?: number };
const OverallStatItem = ({ title, total = 0, ...props }: OverallStatItemPropTypes) => {
  const classes = useStyles(props);
  return (<Grid item xs={4} className={classes.item}>
    <Typography variant="body2" component="p">
      {title}
      <Typography variant="h4" component="span" color="textPrimary" className={classes.itemTotal}>{total}</Typography>
    </Typography>
  </Grid>);
};

const OverallStats = () => {
  const classes = useStyles();
  const { isLoading, overallStats } = useGlobalStats();

  return (
    <section aria-labelledby="Stats" className={classes.root}>
      <Card>
        <CardHeader title="OVERALL STATS" titleTypographyProps={{ variant: "subtitle1", color: "textSecondary" }} />
        <CardContent>
          {!isLoading && (
            <Grid container spacing={3}>
              <OverallStatItem
                title="Contagios"
                total={overallStats?.suspectedCount}
              />
              <OverallStatItem
                title="Muertes"
                total={overallStats?.deadCount}
              />
              <OverallStatItem
                title="Curados"
                total={overallStats?.curedCount}
              />
            </Grid>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export { OverallStats };
