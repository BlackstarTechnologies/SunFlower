"use client";

import {
  FormInput,
  FormSection,
} from "@components/subcomponents/FormComponents";
import React, { useRef } from "react";

const postData = async (val) => {
  try {
    return await fetch("/api/auth/helloworld", {
      method: "POST",
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((v) => {
        console.log(v);
        return v;
      });
  } catch (error) {
    console.log(error);
  }
};

export default function LogIn() {
  const ref = useRef();

  let formik = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formik);
    postData(formik);
  };
  return (
    <FormSection>
      <h3> Log In</h3>
      <br className="h-[2px] bg-black w-full" />
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="p-2 m-4 flex flex-col space-y-4 bg-white rounded drop-shadow-lg"
      >
        <FormInput
          type="text"
          name="username"
          label="Username"
          formik={formik}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          formik={formik}
        />
        <div className="flex">
          <button
            type="submit"
            className="bg-[red] text-white px-2  rounded hover:bg-[white] hover:border-[red] hover:border-2 hover:text-[red]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </FormSection>
  );
}
