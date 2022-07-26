import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { CARDS } from "./constants";
import { getDashboardCount } from "./dashboardSlice";

import "./style.css";

function Dashboard() {
  const state = useSelector((state) => state.dashboard);
  console.log("state", state);
  const userType = "admin";
  const dispatch = useDispatch();
  const cards = CARDS[userType];

  useEffect(() => {
    dispatch(getDashboardCount());
  }, []);
  return (
    <Container maxWidth="xl" className="dashboard-container">
      <Grid container>
        {cards.map((card) => (
          <Grid item md={3} className="dashboard-card">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h2">
                  {state[card.key]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;
