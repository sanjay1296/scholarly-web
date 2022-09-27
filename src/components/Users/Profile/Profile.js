import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

// import { view, update } from "./../userSlice";

function Profile({ uid }) {
  return (
    <Container className="dashboard-container">
      <Card variant="outlined">
        <CardHeader
          title="User Profile"
          titleTypographyProps={{ variant: "subtitle1" }}
        />
        <Grid container justifyContent="center">
          <Grid>Profile</Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default Profile;
