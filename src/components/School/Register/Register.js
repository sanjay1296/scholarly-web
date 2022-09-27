import React from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import { registerSchool } from "./../schoolSlice";

import Header from "./../../Header";

const schema = Joi.object({
  schoolName: Joi.string().required(),
  email: Joi.string().required(),
});

export default function Register() {
  console.log("Register Page");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  return (
    <Container className="dashboard-container">
      <Card variant="outlined">
        <CardHeader
          title="School Registration"
          titleTypographyProps={{ variant: "subtitle1" }}
        />

        <Grid
          container
          // xs={15}
          xs="auto"
          spacing={3}
          // className="dashboard-card"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <form
            onSubmit={handleSubmit((data) => {
              console.log("Registering School: " + data);
              dispatch(registerSchool(data));
            })}
          >
            <Grid>
              <input
                {...register("schoolName", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                placeholder="School name"
              />

              <input
                {...register("firstName", { required: true })}
                placeholder="First name"
              />
            </Grid>

            {errors.firstName && <span>First Name is required</span>}
            <input {...register("lastName")} placeholder="Last name" />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <span>Email is required</span>}

            <input
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && <span>Password is required</span>}
            <input
              type="number"
              {...register("phoneNumber", { minLength: 10, maxLength: 16 })}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <span>
                Please enter the valid phone number with min 10 and max 16
              </span>
            )}
            <input {...register("address")} placeholder="Address" />
            <input {...register("city")} placeholder="City" />
            <input {...register("postcode")} placeholder="Postal Code" />
            <input type="submit" />
            <input
              type="reset"
              onClick={() => {
                reset({
                  keepErrors: true,
                  keepDirty: true,
                  keepIsSubmitted: false,
                  keepTouched: false,
                  keepIsValid: false,
                  keepSubmitCount: false,
                });
              }}
            />
          </form>
        </Grid>
      </Card>
    </Container>
  );
}
