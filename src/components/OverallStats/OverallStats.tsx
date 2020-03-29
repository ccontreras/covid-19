import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { Grid, Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import { useOverallStats } from "../../hooks";

const styles = ({ palette, spacing, breakpoints }: Theme) => createStyles({
  root: {
    paddingTop: spacing(4),
  },
  title: {
    marginBottom: spacing(4)
  },
  cardContent: {
    textAlign: "center"
  },
  item: {
    textTransform: "uppercase",
    color: palette.grey[400],

    "&:not(:last-of-type)": {
      borderRight: `2px dotted ${palette.grey[200]}`
    },

    [breakpoints.down("xs")]: {
      borderRight: "none !important",
      borderBottom: `1px dotted ${palette.grey[200]}`
    }
  },
  itemTotal: {
      display: "block"
  }
})
const useStyles = makeStyles(styles);

const OverallStatItem = ({ title, total = 0, ...props }: { title: string; total?: number }) => {
  const classes = useStyles(props);
  return (<Grid item xs={12} sm={4} className={classes.item}>
    <Typography variant="body2" component="p">
      {title}
      <Typography variant="h4" component="span" color="textPrimary" className={classes.itemTotal}>{total}</Typography>
    </Typography>
  </Grid>);
};

const OverallStats = () => {
  const classes = useStyles();
  const { isLoading, isError, overallStats } = useOverallStats();

  return (
    <section aria-labelledby="Stats" className={classes.root}>
      <Card>
        <CardHeader title="OVERALL STATS" titleTypographyProps={{ variant: "subtitle1", color: "textSecondary" }} />
        <CardContent classes={{
          root: classes.cardContent
        }}>
          {isLoading && <Skeleton width="100%" height="100%" variant="rect" />}
          {!isLoading && !isError && (
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
          {isError && <Typography variant="body1" component="p">Something went wrong...</Typography>}
        </CardContent>
      </Card>
    </section>
  );
};

export { OverallStats };
