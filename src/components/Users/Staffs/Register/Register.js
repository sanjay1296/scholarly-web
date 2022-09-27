import React from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { registerStaff } from "./../staffSlice";

import Header from "./../../Header";

const schema = Joi.object({
  schoolName: Joi.string().required(),
  age: Joi.string().required(),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xl" className="dashboard-container">
      <Header />
      <Grid container>
        <form
          onSubmit={handleSubmit((data) => {
            console.log("Registering Staff: " + data);
            dispatch(registerStaff(data));
          })}
        >
          <input
            {...register("schoolName", { required: true })}
            placeholder="School name"
          />
          <input
            {...register("firstName", { required: true })}
            placeholder="First name"
          />
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
    </Container>
  );
}
