"use client";

import React, { useEffect } from "react";

export default function SignUp() {
  return (
    <FormSection>
      <h3> Log In</h3>
      <br className="h-[2px] bg-black w-full" />
      <form
        onSubmit={formik.handleSubmit}
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
            onClick={formik.handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </FormSection>
  );
}
