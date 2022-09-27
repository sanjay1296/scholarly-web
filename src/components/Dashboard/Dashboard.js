import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { CARDS } from "./constants";
import { getDashboardCount } from "./dashboardSlice";

import "./style.css";

function Dashboard() {
  const state = useSelector((state) => state.dashboard);
  const userType = "admin";
  const dispatch = useDispatch();
  const cards = CARDS[userType];
  let navigate = useNavigate();
  // const routeChange = (event) => {
  //   console.log("Navigating to ", event.target.title);
  //   let pageName = event.target.title;
  //   navigate(pageName);
  // };
  useEffect(() => {
    dispatch(getDashboardCount());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" className="dashboard-container">
      <Grid
        container
        justifyContent="center"
        xs="auto"
        spacing={2}
        className="dashboard-card"
        direction="row"
        alignItems="center"
      >
        {cards.map((card) => (
          <Grid item  key={card.key} className="dashboard-card">
            <Card variant="outlined" md={3} sx={{ display: "flex" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  gutterBottom
                  onClick={() => navigate(`${card.page}`)}
                >
                  {card.title}
                </Typography>
                <Typography variant="h3">{state[card.key]}</Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate(`${card.page}/register`)}
                >
                  <AddIcon color="inherit" fontSize="small" />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;
