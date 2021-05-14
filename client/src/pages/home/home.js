import React from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import URL from "../../api";

function Home() {
  const [screams, setScreams] = React.useState([]);

  React.useEffect(() => {
    async function getScreams() {
      const url = await `${URL}/screams`;
      axios.get(url).then((res) => {
        setScreams(res.data);
      });
    }

    getScreams();
  }, [setScreams]);

  let recentScream = screams ? (
    screams.map((scream) => <p key={scream.screamId}>{scream.body}</p>)
  ) : (
    <p>Loading...</p>
  );

  return (
    <Grid container>
      <Grid item sm={8} xs={12}>
        <div>{recentScream}</div>
      </Grid>
      <Grid item sm={4} xs={12}>
        <div>profile</div>
      </Grid>
    </Grid>
  );
}

export default Home;
