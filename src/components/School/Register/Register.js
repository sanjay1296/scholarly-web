import React from "react";

import { useForm } from "react-hook-form";

// import Header from "../Header";
import { registerSchool } from "./../schoolSlice";

import { useDispatch } from "react-redux";

import Header from "./../../Header";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit((data) => {
          const schoolData = { ...data };
          dispatch(registerSchool(schoolData));
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
        <input {...register("email", { required: true })} placeholder="Email" />
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
        <input {...register("pincode")} placeholder="Pincode" />
        <input type="submit" />
      </form>
    </>
  );
}
