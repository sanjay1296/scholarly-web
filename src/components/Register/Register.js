import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header";
import { add } from "./slices/user";
import axios from "axios";

import { useDispatch } from "react-redux";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          let userData = await axios({
            method: "post",
            url: "/user/12345",
            data,
          });
          setData(JSON.stringify(userData));
          dispatch(add(userData));
        })}
      >
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
        />{" "}
        {errors.firstName && <span>First Name is required</span>}
        <input {...register("lastName")} placeholder="Last name" />
        <input {...register("email", { required: true })} placeholder="Email" />
        {errors.email && <span>Email is required</span>}
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
        <select {...register("gender")} placeholder="Gender">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <textarea {...register("bio")} placeholder="Bio" />
        <input type="submit" />
      </form>
    </>
  );
}
