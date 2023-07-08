"use client";

import {
  FormInput,
  FormSection,
} from "@components/subcomponents/FormComponents";
import { useFormik } from "formik";
import React from "react";

export default function LogIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormSection>
      <h3> Log In</h3>
      <br className="h-[2px] bg-black w-full" />
      <form
        onSubmit={formik.handleSubmit}
        className="p-2 m-4 flex flex-col space-y-4 "
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
      </form>
    </FormSection>
  );
}
