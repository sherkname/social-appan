import React from "react";
import Link from "react-router-dom/Link";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/screamStyles";

function Scream({
  classes,
  scream: { userImage, userHandle, createdAt, body },
}) {
  return (
    <Card className={classes.card}>
      <CardMedia
        image={userImage}
        title="Profile image"
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          color="primary"
          component={Link}
          to={`/user/${userHandle}`}
        >
          {userHandle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {createdAt}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Scream);
